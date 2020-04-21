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

var idx;

const markerList = [
  { lat: 17.441013, long: 78.391796, info: 10, category:"Contact Tracing" },
  { lat: 17.442889, long: 78.396073, info: 20, category:"Dignostics"},
  { lat: 17.441681, long: 78.394357, info: 10, category:"Employ Support"}
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

  changeColor(marker,index){
    var i;
    for(i=0;i<Category.length;i++)
    {
      if(Category[i]==marker.category)
      {
        break;
      }
    }
    if(this.state.category[i].selected)
    {
      return(
        <Marker longitude={marker.long} latitude={marker.lat}>
                  <i
                    className='fas fa-map-marker fa-4x'
                    name='hospital'
                    size='big'
                    style={{color:this.state.category[i].color}}
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
