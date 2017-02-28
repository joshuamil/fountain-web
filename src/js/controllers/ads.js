import React from 'react';
import ReactDOM from 'react-dom';
import * as service from '../services/ads-service';

class Ads extends React.Component {

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

        if(parseInt(this.props.width) === item.width && parseInt(this.props.height) === item.height) {
          return (
            <div key={i}
              className={"advert advert-" + item.width + "x" + item.height }
              data-placement={item.placement}>
              <label htmlFor={"ad-" + item.id}>Advertisement</label>
              <iframe src={item.src} width={item.width} height={item.height} id={"ad-" + item.id}></iframe>
            </div>
          )
        }
      })}
      </div>
    )

  }

};


const containers = [
  {"width":"300", "height": "250", "container": ".ad.ad-300x250"},
  {"width":"728", "height": "90", "container": ".ad.ad-728x90"},
  {"width":"970", "height": "90", "container": ".ad.ad-970x90"},
  {"width":"970", "height": "250", "container": ".ad.ad-970x250"},
  {"width":"468", "height": "60", "container": ".ad.ad-468x60"},
  {"width":"300", "height": "100", "container": ".ad.ad-300x100"}
];

window.setTimeout(() => {
  containers.forEach((c) => {
    if (document.querySelector(c.container)) {
      ReactDOM.render(
        <Ads width={c.width} height={c.height} />,
        document.querySelector(c.container)
      );
    }
  });
}, 2000);
