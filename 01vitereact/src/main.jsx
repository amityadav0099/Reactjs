import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// virtual DOM
// createRoot DOM like structure create krta hai jaise browser ke paas DOM hota hai waise e bhi apna DOM create krta hai
// main DOM ko aur apne DOM ko compare krta hai aur sirf unhi cheez ko update krta hai jo actually me UI me update huie hain
//  lekin browser pure DOM ko remove krke waps se repaint(structure dubara se taiyaar hota hai) krta hai isi ko page reload bolte hain
  