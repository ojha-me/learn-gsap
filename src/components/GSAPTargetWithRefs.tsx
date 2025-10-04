import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const GSAPTargetWithRefs = () => {
  const navigate = useNavigate();
  const boxRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Using ref for direct element access
    gsap.to(boxRef.current, {
      x: 200,
      rotation: 360,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Using ref for a different animation
    gsap.to(circleRef.current, {
      y: 100,
      scale: 1.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "bounce.out"
    });
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <button
        className="p-2 border border-black bg-white rounded-md hover:bg-gray-100 transition-colors"
        onClick={() => navigate('/')}
      >
        Home
      </button>

      <div className="max-w-2xl mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">GSAP with Refs</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Using Refs with GSAP:</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-2">useRef()</span>
              <span>Create a direct reference to DOM elements</span>
            </li>
            <li className="flex items-start">
              <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-2">ref.current</span>
              <span>Access the actual DOM element</span>
            </li>
            <li className="flex items-start">
              <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-2">Performance</span>
              <span>Faster than querying with class/id selectors</span>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center h-[400px] bg-white rounded-lg shadow-md p-6 relative">
          <div className="space-y-12">
            <div 
              ref={boxRef} 
              className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg"
            ></div>
            <div 
              ref={circleRef} 
              className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full shadow-lg"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSAPTargetWithRefs;