import React from 'react';
import ReactDOM from 'react-dom';
import * as service from '../services/exhibits-service';

class Exhibit extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    let results = [];

    service.findAll()
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
            <div key={i} className="exhibit">
              <article role="article">
                <a href={"tag/" + item.lang} className="category">{item.lang}</a>
                <div className="information">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <a href={"exhibits/" + item.exhibitid}>Discover More</a>
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
  {"start":"1", "end": "1", "container": ".content.secondary"},
  {"start":"2", "end": "2", "container": ".content.quaternary"}
];
containers.forEach((c) => {
  ReactDOM.render(
    <Exhibit start={c.start} end={c.end} />,
    document.querySelector(c.container)
  );
});
