import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppLayout from './AppLayout.jsx'
import Categories from './component/Categories/Categories.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLayout />
    <Categories/>
    
  </StrictMode>,
)
