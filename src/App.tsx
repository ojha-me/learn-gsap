import { useNavigate } from "react-router-dom"

const App = () => {
const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-center content-between gap-4">
      <button className="p-2 border border-black w-1/2" onClick={() => navigate('/gsap-to')}>GSAP To</button>
      <button className="p-2 border border-black w-1/2" onClick={() => navigate('/gsap-from')}>GSAP From</button>
      <button className="p-2 border border-black w-1/2" onClick={() => navigate('/gsap-timeline')}>GSAP Timeline</button>
    </div>
  )
}

export default App