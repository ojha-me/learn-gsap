import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const GSAPTargetWithRefs = () => {
    const navigate = useNavigate()
    const boxRef = useRef<HTMLDivElement>(null)
    const circleRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.to(boxRef.current, {yoyo: true, repeat: -1, duration: 1, x: 200})
        gsap.fromTo(circleRef.current, { x: 100, opacity: 0}, { x: 500, y: 500, opacity: 1, rotate:270, yoyo: true, repeat: -1})
    })

  return (
    <>
    <button className="p-2 border border-black ml-[25%]" onClick={() => navigate('/')} >Home</button>
    <div>GSAPTargetWithRefs</div>
    <p>you can target an element with the classnames like .box or #circle</p>
    <p>but, multiple elements can have the same classname, and gsap still has to search throught the dom for the selector.</p>
    <p>so, a more React.y way is to use refs</p>
    
    <div ref={boxRef} className="box w-[100px] h-[100px] bg-red-500"></div>
    {/*  Not sure why the tailwind rounded property is not working, for now using inline style this is primarily a gsap project*/}
    {/* still super weird though, something probably is overriding the tailwind property */}
    <div ref={circleRef} style={{borderRadius: '100%'}} className="circle w-[100px] h-[100px] bg-blue-500"></div>
    
    </>
    
  )
}

export default GSAPTargetWithRefs