import React from 'react';
import ReactDOM from 'react-dom';
import * as service from '../services/items-service';

class Item extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    let results = [];

    service.findAll(this.props.start, this.props.end)
      .then( items => {
        this.setState({
          data: items
        });
      })
      .catch(e => console.log(e));

  };

  render() {

    if (this.state.data && this.state.data.length === 0) {
      return null;
    }

    let start = parseInt(this.props.start);
    let end = parseInt(this.props.end);
    let max = ((end-start)+1);

    // Limit the records to only those requested
    let records = this.state.data.slice((start-1),end);

    // Ensure that the content is divisible by 3
    // If not, then inject ads into content
    if (max % 3 !== 0) {
      end++;
      records.push({
        title: "ad",
        component: "Ads",
        width: 300,
        height: 250,
        placement: `home.tile.${end}`
      });
    }

    return (
      <div>
      {records.map( (item, i) => {
        if (item.title === 'ad') {
          return (
            <div key={i} className="item">
              <div key={i}
                className={"ad ad-" + item.width + "x" + item.height}
                data-placement={item.placement}>
              </div>
            </div>
          )
        } else {
          return (
            <div key={i} className="item">
              <article role="article">
                <a href={"tag/" + item.lang} className="category">{item.lang}</a>
                <div className="information">
                  <a className="linkWrapper" href={"items/" + item.itemid}>
                    <h2>{item.title}</h2>
                    <p>{item.shortdesc}</p>
                  </a>
                </div>
              </article>
            </div>
          )
        }
      })}
      </div>
    )

  }

};


const containers = [
  {"start":"1", "end": "2", "container": ".content.primary"},
  {"start":"3", "end": "5", "container": ".content.tertiary"}
];
containers.forEach((c) => {
  ReactDOM.render(
    <Item start={c.start} end={c.end} />,
    document.querySelector(c.container)
  );
});
