import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'//for redux store
import { configureStore } from '@reduxjs/toolkit'
import userReducers from './Reducers/userReducers.jsx'

const store = configureStore({
  reducer: {
    users: userReducers
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider> 
  </React.StrictMode>,
)
