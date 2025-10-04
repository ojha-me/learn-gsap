import { useNavigate } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const GSAPTimeline = () => {

    
const navigate = useNavigate()
  return (
<div>
    <button className="p-2 border border-black ml-[25%]" onClick={() => navigate('/')} >Home</button>
    
</div>
  )
}

export default GSAPTimeline