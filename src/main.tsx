import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GSAPFrom from './components/GSAPFrom/GSAPFrom.tsx'
import GSAPTo from './components/GSAPTo/GSAPTo.tsx'
import GSAPTimeline from './components/GSAPTimeline/GSAPTimeline.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/gsap-from" element={<GSAPFrom />} />
      <Route path="/gsap-to" element={<GSAPTo />} />
      <Route path="/gsap-timeline" element={<GSAPTimeline />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
