import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Template from './components/Template'
import { GlobalStyles } from './GlobalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <Template>
      <App />
    </Template>
  </React.StrictMode>
)
