import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Categories from './pages/Categories'
import Advantages from './pages/Advantages'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <Categories/>
   <Advantages/>
  </StrictMode>,
)
