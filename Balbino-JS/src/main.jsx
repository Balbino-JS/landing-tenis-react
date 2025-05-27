import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Home from "./componentes/Home"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     <Home />
  </StrictMode>,
)
