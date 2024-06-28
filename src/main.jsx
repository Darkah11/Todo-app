import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {persistor, store} from "./app/store.js"
// import persistStore from 'redux-persist/es/persistStore.js'
import { PersistGate } from 'redux-persist/integration/react'

// let persistor =


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}><App /></PersistGate>
    </Provider>
  </React.StrictMode>,
)
