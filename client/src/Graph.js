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

const Category = ["Contact Tracing","Dignostics","Employ Support","Infection Support","Patient Engagement","Medication"];

const markerList = [
  { lat: 17.441013, long: 78.391796, info: 10, color:"red" },
  { lat: 17.442889, long: 78.396073, info: 20, color:"blue"},
  { lat: 17.441681, long: 78.394357, info: 10, color:"green" }
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
        height: 500
      },
      display:[false,false,false],
      category:[
        {selected:true,color:"#0953B8"},
        {selected:true,color:"#00C495"},
        {selected:true,color:"#984BFF"},
        {selected:true,color:"#D6D6D6"},
        {selected:true,color:"#77C600"},
        {selected:true,color:"#77C600"}
      ]
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
                
                <Marker longitude={marker.long} latitude={marker.lat}>
                  <i
                    className='fas fa-map-marker fa-4x'
                    name='hospital'
                    size='big'
                    style={{color:marker.color}}
                    onClick = {() =>{this.setState({display:{...this.state.display,[index]:!this.state.display[index]}}); console.log(this.state.display[index]) }}
                  />
                </Marker>{' '}
                {this.renderPopup(index)}
              </div>
            );
          })}
        </div>
      </MapGL>
    );
  }
}