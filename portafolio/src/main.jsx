import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <video className="video-background" autoPlay loop muted>
        <source src="/background/videobackground.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
      <div className="app-content">
        <App />
      </div>
    </div>
  </StrictMode>,
)