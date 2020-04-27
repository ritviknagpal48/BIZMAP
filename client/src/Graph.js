import React, { Component } from 'react';
import MapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';
import axios from 'axios';

const TOKEN =
  'pk.eyJ1IjoiYWJoaWxhc2hhLXNpbmhhIiwiYSI6ImNqdzFwYWN1ajBtOXM0OG1wbHAwdWJlNmwifQ.91s73Dy03voy-wPZEeuV5Q';
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

const Category = [
  'Contact Tracing',
  'Diagnostics',
  'Employee Support',
  'Infection Control',
  'Medication',
  'Patient Engagement',
  'Informative portals',
  'PPE',
  'Supports- Hackathon',
  'Vaccinatory',
  'Financial support providers',
  'Tele-Medicines',
  'NGO Networking',
  'Tele Education Resources',
  'Covid Specialised Hospitals',
  'Food Providers',
  'Patient Engagement',
  'Self Reporting Apps',
  'Alert/tracking app',
  'datasets',
  'Automobile',
  'Bioinformatics',
  'Skill Training',
  'Mask Providers',
  'Heatmaps',
  'Volunteering orgs',
  'Others',
  'Volunteers'
];
var idx;

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 17.44212,
        longitude: 78.391384,
        zoom: 3,
        bearing: 0,
        pitch: 0,
        width: '100%',
        height: '500px',
        padding: '0px',
        margin: '0px'
      },
      display: [false, false, false],
      markerList: []
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:5050/graph/all_business')
      .then(response => {
        let arr = [];
        for (let i = 0; i < response.data.length; ++i) {
          arr.push({
            lat: parseFloat(response.data[i].latitude),
            long: parseFloat(response.data[i].longitude),
            info: response.data[i].description,
            category: response.data[i].category,
            link: response.data[i].email
          });
          console.log('Data', response);
        }
        this.setState({
          markerList: arr
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  // showDetails=() => {
  // this.setState({popupInfo: true});
  // }

  // hideDetails= ()=> {
  // this.setState({popupInfo: null});
  // }
  popup = index => {
    const array = this.state.display;
    for (var i = 0; i < this.state.display.length; i++) {
      array[i] = false;
    }
    array[index] = true;
    this.setState({ display: array });
  };

  renderPopup(index) {
    if (
      this.state.display[index] === true &&
      this.props.category[index].selected == 1
    ) {
      return (
        <Popup
          tipSize={5}
          max-width='240px'
          anchor='bottom-right'
          longitude={this.state.markerList[index].long}
          latitude={this.state.markerList[index].lat}
          closeOnClick={false}
          closeButton={true}
          onClose={e => {
            this.setState({
              display: {
                ...this.state.display,
                [index]: !this.state.display[index]
              }
            });
          }}
        >
          <p>
            <strong>Category:</strong> {this.state.markerList[index].category}
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href={this.state.markerList[index].link} target='_blank'>
              {this.state.markerList[index].link}
            </a>
          </p>
          <p>
            <strong>Description:</strong> {this.state.markerList[index].info}
          </p>
        </Popup>
      );
    } else {
      return null;
    }
  }

  changeColor(marker, index) {
    var i;
    for (i = 0; i < Category.length; i++) {
      if (Category[i] == marker.category) {
        break;
      }
    }
    //hello
    if (this.props.category[i].selected == 1) {
      return (
        <Marker longitude={marker.long} latitude={marker.lat}>
          <i
            className='fas fa-map-marker fa-2x'
            name='hospital'
            size='big'
            style={{ color: this.props.category[i].color }}
            onClick={() => this.popup(index)}
          />
        </Marker>
      );
    }
    return null;
  }

  render() {
    const { viewport } = this.state;
    return (
      <MapGL
        {...viewport}
        width='100%'
        onViewportChange={viewport => this.setState({ viewport })}
        mapStyle='mapbox://styles/mapbox/streets-v10'
        mapboxApiAccessToken={TOKEN}
      >
        <div className='nav' style={navStyle}>
          <NavigationControl
            onViewportChange={viewport => this.setState({ viewport })}
          />
          {this.state.markerList.map((marker, index) => {
            return (
              <div key={index}>
                {' '}
                {this.changeColor(marker, index)} {this.renderPopup(index)}
              </div>
            );
          })}
        </div>
      </MapGL>
    );
  }
}
