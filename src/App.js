import React, { Component } from 'react'

// import my - erick Map
import EriMap from './container/eriMapContainer'
//import EriMap from './component/eriMap'
import DataSet from './container/datasetContainer'
// import custom stylesheets
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <DataSet />
        </div>
        <div className="mapcontainer">
          <EriMap/>
        </div>
      </div>
    );
  }
}
export default App;