import React, { Component } from 'react';
import MapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';

const TOKEN =
  'pk.eyJ1IjoiYWJoaWxhc2hhLXNpbmhhIiwiYSI6ImNqdzFwYWN1ajBtOXM0OG1wbHAwdWJlNmwifQ.91s73Dy03voy-wPZEeuV5Q';
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

const Category = ["Contact Tracing","Diagnostics","Employee Support","Infection Control","Medication","Patient Engagement","Portal","PPE","Supports","Vaccinatory","Financial Support Providers","Telemedicine","Tele Education Resources","Covid Specific Hospitals","Free Food Providers","Patient Tracing Apps", "Self Reporting Apps", "Data Sets", "Automobile Related", "Skill Training", "Mask Providers", "Heat Map", "Volunteering Org", "Others", "Unemployed", "Volunteers"]
var idx;

const markerList = [
  { lat: 16.441013, long: 77.391796, info: 10, category:"Contact Tracing" },
  { lat: 17.442889, long: 78.696073, info: 20, category:"Diagnostics"},
  { lat: 17.541681, long: 78.394357, info: 10, category:"Employee Support"},
  {lat: 17.541681, long: 79.394357, info: 10, category:"Infection Control"}
];
export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 17.44212,
        longitude: 78.391384,
        zoom: 4,
        bearing: 0,
        pitch: 0,
        width: '100%',
        height: "500px",
        padding: "0px",
        margin: '0px'
      },
      display:[false,false,false]
    };
  }

  // showDetails=() => {
  // this.setState({popupInfo: true});
  // }

  // hideDetails= ()=> {
  // this.setState({popupInfo: null});
  // }

  renderPopup(index) {
    if(this.state.display[index])
    {
      return (
          <Popup
            tipSize={5}
            anchor='bottom-right'
            longitude={markerList[index].long}
            latitude={markerList[index].lat}
          >
                  {console.log(markerList[index])}
            <p>Available beds:{markerList[index].info}</p>
          </Popup>
      )
    }
    else{
      return (null)
    }

  }

  changeColor(marker,index){
    var i;
    for(i=0;i<Category.length;i++)
    {
      if(Category[i]==marker.category)
      {
        break;
      }
    }
    //hello
    if(this.props.category[i].selected==1)
    {
      return(
        <Marker longitude={marker.long} latitude={marker.lat}>
                  <i
                    className='fas fa-map-marker fa-4x'
                    name='hospital'
                    size='big'
                    style={{color:this.props.category[i].color}}
                    onClick = {() =>{this.setState({display:{...this.state.display,[index]:!this.state.display[index]}}); console.log(this.state.display[index]) }}
                  />
        </Marker>
      )
    }
    return null;
  }

  render() {
    const { viewport } = this.state;
    return (
      <MapGL
        {...viewport}
        onViewportChange={viewport => this.setState({ viewport })}
        mapStyle='mapbox://styles/mapbox/streets-v10'
        mapboxApiAccessToken={TOKEN}
      >
        <div className='nav' style={navStyle}>
          <NavigationControl
            onViewportChange={viewport => this.setState({ viewport })}
          />
          {markerList.map((marker, index) => {
            return (
              <div key={index}>
                {' '}
                {this.changeColor(marker,index)}
                {' '}
                {this.renderPopup(index)}
              </div>
            );
          })}
        </div>
      </MapGL>
    );
  }
}
