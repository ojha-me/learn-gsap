import { useNavigate } from "react-router-dom"

const App = () => {
const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-center content-between gap-4">
      <button className="p-2 border border-black w-1/2" onClick={() => navigate('/gsap-to')}>GSAP To</button>
      <button className="p-2 border border-black w-1/2" onClick={() => navigate('/gsap-from')}>GSAP From</button>
      <button className="p-2 border border-black w-1/2" onClick={() => navigate('/gsap-timeline')}>GSAP Timeline</button>
      <button className="p-2 border border-black w-1/2" onClick={() => navigate('/gsap-from-to')}>GSAP From To</button>
      <button className="p-2 border border-black w-1/2" onClick={() => navigate('/gsap-target-with-refs')}>GSAP Target elements with ref</button>
      <button className="p-2 border border-black w-1/2" onClick={() => navigate('/gsap-stagger')}>GSAP Stagger</button>
    </div>
  )
}

export default App