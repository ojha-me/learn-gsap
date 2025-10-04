import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

const GSAPFromTo = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.fromTo(".box", 
      {
        x: -200,
        opacity: 0,
        backgroundColor: "#3B82F6" 
      },
      {
        x: 200,
        opacity: 1,
        backgroundColor: "#EF4444",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      }
    );
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
        <h1 className="text-3xl font-bold mb-6 text-gray-800">GSAP FromTo Animation</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">How .fromTo() Works:</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-2">gsap.fromTo()</span>
              <span>Define both starting AND ending states explicitly</span>
            </li>
            <li className="flex items-start">
              <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-2">from: &#123;x: -200&#125;</span>
              <span>Start position: 200px left</span>
            </li>
            <li className="flex items-start">
              <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-2">to: &#123;x: 200&#125;</span>
              <span>End position: 200px right</span>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center h-[400px] bg-white rounded-lg shadow-md p-6">
          <div className="box w-32 h-32 rounded-xl shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default GSAPFromTo;