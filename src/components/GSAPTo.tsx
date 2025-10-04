import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GSAPTo = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.to(".box", {
      x: 400,
      rotation: 360,
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
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
        <h1 className="text-3xl font-bold mb-6 text-gray-800">GSAP To Animation</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">How .to() Works:</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-2">gsap.to()</span>
              <span>Animates an element TO a specified end state</span>
            </li>
            <li className="flex items-start">
              <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-2">x: 400</span>
              <span>Moves element 400 pixels to the right</span>
            </li>
            <li className="flex items-start">
              <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-2">rotation: 360</span>
              <span>Rotates element one full turn</span>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center h-[400px] bg-white rounded-lg shadow-md p-6">
          <div className="box w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default GSAPTo;