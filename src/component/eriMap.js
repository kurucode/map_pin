/*import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// imports maps lib
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers, Marker,
    Annotations, Annotation
  } from "react-simple-maps"

class EriMap extends Component {
    
    constructor() {
        super()
    
        this.state = {
          zoom: 1,
          geographyPaths: [],

        }
    
        this.handleZoomIn = this.handleZoomIn.bind(this)
        this.handleZoomOut = this.handleZoomOut.bind(this)
        this.onWheel = this.onWheelEvent.bind(this)
    }

    handleZoomIn() {
        this.setState({
            zoom: this.state.zoom * 2,
        })
    }

    handleZoomOut() {
        this.setState({
            zoom: this.state.zoom / 2,
        })
    }

    onWheelEvent(delta) {
        if( delta.deltaY > 0)
        {
            this.setState({
                zoom: this.state.zoom / 2,
            })
        }
        else
        {
            this.setState({
                zoom: this.state.zoom * 2,
            })
        }
        
    }
    render() {
        return (
            <div >
                <button onClick={ this.handleZoomIn }>{ "Zoom in" }</button>
                <button onClick={ this.handleZoomOut }>{ "Zoom out" }</button>
                <hr />

                <div onWheel={this.onWheel}>
                
                <ComposableMap projection="miller"  >
                    <ZoomableGroup 
                        zoom={ this.state.zoom } 
                        >
                        <Geographies geography={"/mapJsons/us.json"} disableOptimization>
                            {(geographies, projection) => geographies.map((geography, i) => (
                                <Geography
                                    key={i}
                                    geography={ geography }
                                    projection={ projection }
                                    style={{
                                        default: {
                                            fill: "#666",
                                            stroke: "#FFF",
                                            strokeWidth: 0.1,
                                            outline: "none",
                                        },
                                        hover:   { fill: "#999"},
                                        pressed: { fill: "#FFF",  },
                                    }}
                                />
                            ))}

                            
                        </Geographies>
                        
                    </ZoomableGroup>
                </ComposableMap>
                </div>
            </div>
        );
    }
}

 export default EriMap;*/
 
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, Circle } from 'google-maps-react';
import '../App.css'
import { addPoint } from '../actions';

const mapStyles = {
  width: '100%',
  height: '100%',
  position: 'fixed'
};

export class EriMap extends Component {
    constructor(props) {
        super(props);
      }
   

  render() {
    const {points} = this.props

    return (
            <Map 
                google={this.props.google}
                zoom={6}
                style={mapStyles}
                initialCenter={{
                  lat: 8,
                  lng: 105
                }}
                >
                    {points.map((marker, index) => (
                        <Marker
                            key={index}
                            title={marker.title}
                            name={marker.name }
                            position={marker.position}
                            draggable={true}
                            icon="favicon.ico"
                        />
                        
                    ))}
            </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBUrb3CdVhj3KVdMtf2O7liPhHKJKgMBxY'
})(EriMap);

