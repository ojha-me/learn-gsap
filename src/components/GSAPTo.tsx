import { useNavigate } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const GSAPTo = () => {
const navigate = useNavigate()

useGSAP(() => {
    gsap.to(".box", {
        duration: 1,
        x: 1000,
        rotation: 360,
        repeat: -1, // repeat from left to right uni directional
        yoyo: true, // repeat from left to right to left bi directional
        ease: "power1.inOut" // you can create your own ease by using the ease visualizer in the gsap website
    })
},[])

useGSAP(() => {
    gsap.to(".box2", {
        duration: 1,
        x: 1000,
        y: 500,
        opacity: 0,
        rotation: 360,
        repeat: -1,
        yoyo: true,
        ease: "back.in"
    })
},[])
  return (
<div>
    <button className="p-2 border border-black ml-[25%]" onClick={() => navigate('/')} >Home</button>

    <h1>GSAP To Example:</h1>
    <div className="box w-[100px] h-[100px] bg-red-500"></div>
    <div className="box2 w-[100px] h-[100px] bg-blue-500 "></div>
</div>
  )
}

export default GSAPTo