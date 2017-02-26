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

    if(this.state.data && this.state.data.length === 0) {
      return null;
    }

    return (
      <div>
      {this.state.data.map( (item, i) => {
        if((i+1) >= parseInt(this.props.start) && (i+1) <= parseInt(this.props.end)) {
          return (
            <section key={i} className="item">
              <article role="article">
                <a href={"tag/" + item.lang} className="category">{item.lang}</a>
                <div className="information">
                  <a className="linkWrapper" href={"items/" + item.itemid}>
                    <h2>{item.title}</h2>
                    <p>{item.shortdesc}</p>
                  </a>
                </div>
              </article>
            </section>
          )
        }
      })}
      </div>
    )

  }

};


const containers = [
  {"start":"1", "end": "3", "container": ".content.primary"},
  {"start":"4", "end": "6", "container": ".content.tertiary"}
];
containers.forEach((c) => {
  ReactDOM.render(
    <Item start={c.start} end={c.end} />,
    document.querySelector(c.container)
  );
});
