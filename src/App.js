import React, { Component } from 'react'

// import my - erick Map
import EriMap from './container/eriMapContainer'
// import custom stylesheets
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">  
          <EriMap />
        </header>
      </div>
    );
  }
}
export default App;