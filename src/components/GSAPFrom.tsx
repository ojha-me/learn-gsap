import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useNavigate } from "react-router-dom"

const GSAPFrom = () => {
const navigate = useNavigate()


useGSAP(() => {
    gsap.from(".box", {
        duration: 2,
        x: 1000,
        rotation: 360,
        repeat: -1, 
        yoyo: true, 
        ease: "circ.inOut"
    })
},[])

useGSAP(() => {
    gsap.from(".box2", {
        duration: 1,
        x: 1000,
        y: 500,
        opacity: 0,
        rotation: 360,
        repeat: -1,
        yoyo: true,
        ease: "back.out"
    })
},[])


  return (
<div>
    <button className="p-2 border border-black ml-[25%]" onClick={() => navigate('/')} >Home</button>
    <h1>GSAP From Example:</h1>
    <div className="box w-[100px] h-[100px] bg-red-500"></div>
    <div className="box2 w-[100px] h-[100px] bg-blue-500 "></div>
</div>
  )
}

export default GSAPFrom