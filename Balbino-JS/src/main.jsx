import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Home from "./componentes/Home"
import About from './componentes/About.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     <Home />
     <About />
  </StrictMode>,
)
