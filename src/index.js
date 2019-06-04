import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import {createStore}from 'redux'

// import reducer
import reducer from './reducer/index'
// import app
import App from './App'
// import stylesheet
import './index.css'

const store = createStore(reducer)
render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
)
