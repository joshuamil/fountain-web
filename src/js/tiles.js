import React from 'react';
import ReactDOM from 'react-dom';
import * as service from './services/tiles-service';

class Tile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    let results = [];

    service.findAll()
      .then( tiles => {
        this.setState({
          data: tiles
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
      {this.state.data.map( (tile, i) => {
        return (
          <section key={i}>
            <article>
              <a href={"tag/" + tile.lang} className="category">{tile.lang}</a>
              <div className="information">
                <a className="linkWrapper" href={"items/" + tile.itemid}>
                  <h2>{tile.title}</h2>
                  <p>{tile.shortdesc}</p>
                </a>
              </div>
            </article>
          </section>
        )
      })}
      </div>
    )

  }

};


ReactDOM.render(
  <Tile />,
  document.querySelector('.content')
);
