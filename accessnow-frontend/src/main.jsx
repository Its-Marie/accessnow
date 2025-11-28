import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'leaflet/dist/leaflet.css'
import Planning from './pages/map/Planning.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Planning />
  </StrictMode>,
)
