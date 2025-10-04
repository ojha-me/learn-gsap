import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const GSAPFrom = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.from(".box", {
      x: -200,
      opacity: 0,
      rotation: -180,
      duration: 2,
      ease: "power1.out",
      repeat: -1,
      yoyo: true,
      repeatDelay: 1
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
        <h1 className="text-3xl font-bold mb-6 text-gray-800">GSAP From Animation</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">How .from() Works:</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-2">gsap.from()</span>
              <span>Animates FROM the specified values TO element's natural state</span>
            </li>
            <li className="flex items-start">
              <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-2">x: -200</span>
              <span>Starts 200 pixels to the left</span>
            </li>
            <li className="flex items-start">
              <span className="font-mono bg-gray-100 px-2 py-1 rounded mr-2">opacity: 0</span>
              <span>Starts fully transparent</span>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center h-[400px] bg-white rounded-lg shadow-md p-6">
          <div className="box w-32 h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default GSAPFrom;