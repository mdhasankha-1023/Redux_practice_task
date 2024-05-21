import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainContainer from './Pages/MainContainer'
import { Provider } from 'react-redux'
import store from './App/Store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainContainer />
    </Provider>
  </React.StrictMode>,
)
