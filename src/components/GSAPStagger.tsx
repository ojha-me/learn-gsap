import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"


const GSAPStagger = () => {
    const listRef = useRef<HTMLUListElement | null>(null)

    useGSAP(() => {
        if (!listRef.current) return
        gsap.fromTo(listRef.current?.children, {opacity: 0, y: 20}, {opacity: 1, y: 0, stagger: 0.2, yoyo: true, repeat: -1})
    },{scope:listRef})
    return (
      <div className="p-6 max-w-2xl">
       <h1 className="text-2xl font-bold mb-4">GSAP Stagger effect</h1>
       <div className="mb-6 space-y-2">
         <p className="text-gray-700">when you have a list of elements and you want to animate them one after the other</p>
         <p className="text-gray-700">you could hypothetically individually animate each element with a delay</p>
         <p className="text-gray-700">but gsap stagger makes it easier</p>
         <p className="text-gray-700">you can use the ref.current.children to select the list, stagger to give it a delay duration</p>
       </div>
       <ul ref={listRef} className="space-y-3">
        <li className="p-3 bg-blue-100 rounded-lg border-l-4 border-blue-500">Item 1</li>
        <li className="p-3 bg-green-100 rounded-lg border-l-4 border-green-500">Item 2</li>
        <li className="p-3 bg-yellow-100 rounded-lg border-l-4 border-yellow-500">Item 3</li>
        <li className="p-3 bg-red-100 rounded-lg border-l-4 border-red-500">Item 4</li>
        <li className="p-3 bg-purple-100 rounded-lg border-l-4 border-purple-500">Item 5</li>
       </ul>
       </div>
    )
}

export default GSAPStagger