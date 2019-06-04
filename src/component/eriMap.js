import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { get } from "axios"
import { feature } from "topojson-client"
import { scaleLinear } from "d3-scale"
// imports maps lib
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
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
        this.loadPaths = this.loadPaths.bind(this)
    }
    componentDidMount() {
        this.loadPaths()
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

    handleMoveStart(currentCenter) {
        console.log("New center: ", currentCenter)
      }
      
    handleMoveEnd(newCenter) {
        console.log("New center: ", newCenter)
    }

    loadPaths() {
        get("/mapJsons/world-50m.json")
          .then(res => {
            if (res.status !== 200) return
            const world = res.data
            const geographyPaths = feature(
              world,
              world.objects[Object.keys(world.objects)[0]]
            ).features
            this.setState({ geographyPaths })
          })
    }
    render() {
        return (
            <div>
                <button onClick={ this.handleZoomIn }>{ "Zoom in" }</button>
                <button onClick={ this.handleZoomOut }>{ "Zoom out" }</button>
                <hr />
                <ComposableMap projection="miller">
                    <ZoomableGroup zoom={ this.state.zoom } onMoveStart={this.handleMoveStart}
  onMoveEnd={this.handleMoveEnd}>
                        <Geographies geography={ this.state.geographyPaths} disableOptimization>
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
        );
    }
}

export default EriMap;
