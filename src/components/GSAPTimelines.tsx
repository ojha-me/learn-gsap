import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const GSAPStagger = () => {
  const navigate = useNavigate();

  const listRef = useRef<HTMLUListElement | null>(null);
  const squareRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!listRef.current) return;

    const children = Array.from(listRef.current.children) as HTMLElement[];

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { duration: 0.5 }
    });

    tl.fromTo(
      children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2 }
    );
  }, { scope: listRef });

  useGSAP(() => {
    if (!squareRef.current) return;

    const children = Array.from(squareRef.current.children) as HTMLElement[];

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
      defaults: { duration: 0.5, ease: "none" }
    });

    tl.fromTo(
      children,
      { opacity: 0, x: 200, y: 0 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        stagger: {
          from: "edges",
          amount: 0.2
        }
      }
    );
  }, { scope: squareRef });

  return (
    <>
      <button
        className="p-2 border border-black w-1/2 mb-6"
        onClick={() => navigate('/')}
      >
        Home
      </button>

      <div className="p-6 max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">GSAP Stagger Effect Example 1</h1>
        <div className="mb-6 space-y-2">
          <p className="text-gray-700">
            When you have a list of elements and you want to animate them one after the other.
          </p>
          <p className="text-gray-700">
            You could individually animate each element with delays, but GSAP’s stagger feature makes it easier.
          </p>
          <p className="text-gray-700">
            You can use `ref.current.children` to select the list, then stagger to give it a delay duration.
          </p>
        </div>

        <ul ref={listRef} className="space-y-3">
          <li className="p-3 bg-blue-100 rounded-lg border-l-4 border-blue-500">Item 1</li>
          <li className="p-3 bg-green-100 rounded-lg border-l-4 border-green-500">Item 2</li>
          <li className="p-3 bg-yellow-100 rounded-lg border-l-4 border-yellow-500">Item 3</li>
          <li className="p-3 bg-red-100 rounded-lg border-l-4 border-red-500">Item 4</li>
          <li className="p-3 bg-purple-100 rounded-lg border-l-4 border-purple-500">Item 5</li>
        </ul>
      </div>

      <div className="p-6 max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">GSAP Stagger Effect Example 2</h1>
        <div
          ref={squareRef}
          className="flex gap-4 justify-center items-center"
          style={{ flexWrap: "wrap" }}
        >
          <div className="square bg-blue-500 h-20 w-20"></div>
          <div className="square bg-green-500 h-20 w-20"></div>
          <div className="square bg-yellow-500 h-20 w-20"></div>
          <div className="square bg-red-500 h-20 w-20"></div>
          <div className="square bg-purple-500 h-20 w-20"></div>
        </div>
      </div>
    </>
  );
};

export default GSAPStagger;
