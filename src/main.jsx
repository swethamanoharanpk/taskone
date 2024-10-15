import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Sample from './pages/sample.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Sample>
    <App />
    </Sample>
  </StrictMode>
)
