import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

const GSAPFromTo = () => {
    const navigate = useNavigate()

    useGSAP(()=>{
        gsap.fromTo(
            ".box",
            {
              x: 200,
              opacity: 0,
              scale: 0.5,
            },
            {
             
              x: 400,
              opacity: 1,
              scale: 2,
              rotation: 360,
              duration: 2,
              ease: "power3.inOut",
            }
          );
    },[])

  return (
    <>
    <button className="border bg-white p-2" onClick={()=>navigate("/")}>Home</button>
    <h1>GSAP FromTo example:</h1>
    Used in scenarios where you want an element to animate from one point in screen to another.
    For the to and from method you would have to postion the element in the initial state using css.
    <div className="box bg-red-500 h-[100px] w-[100px] mt-8"></div>
    </>
  )
}

export default GSAPFromTo