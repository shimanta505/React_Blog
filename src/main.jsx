import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Tailwind from './components/Tailwind.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>, 
)
