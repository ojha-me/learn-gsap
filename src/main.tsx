import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GSAPFrom from './components/GSAPFrom.tsx'
import GSAPTo from './components/GSAPTo.tsx'
import GSAPTimeline from './components/GSAPTimelines.tsx'
import GSAPFromTo from './components/GSAPFromTo.tsx'
import GSAPStagger from './components/GSAPStagger.tsx'
import GSAPTargetWithRefs from './components/GSAPTargetWithRefs.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/gsap-from" element={<GSAPFrom />} />
      <Route path="/gsap-to" element={<GSAPTo />} />
      <Route path="/gsap-timeline" element={<GSAPTimeline />} />
      <Route path="/gsap-from-to" element={<GSAPFromTo />} />
      <Route path="/gsap-target-with-refs" element={<GSAPTargetWithRefs />} />
      <Route path="/gsap-stagger" element={<GSAPStagger />} />
      <Route path="/gsap-timelines" element={<GSAPTimeline />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
