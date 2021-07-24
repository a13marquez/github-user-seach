import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app/App'
import { store } from './app/store'
import { Provider } from 'react-redux'

import './app/app.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
