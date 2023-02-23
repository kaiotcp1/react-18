import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { appProvider } from './context/context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <appProvider>
      <App />
    </appProvider>
  </React.StrictMode>,
)
