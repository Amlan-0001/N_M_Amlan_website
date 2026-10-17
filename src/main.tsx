import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import './styles/components.css'
import App from './App.tsx'

const container = document.getElementById('app')
if (!container) throw new Error('Failed to find root element #app')

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
)
