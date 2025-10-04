import { useNavigate } from "react-router-dom"

const GSAPFrom = () => {
const navigate = useNavigate()
  return (
<div>
    <button className="p-2 border border-black ml-[25%]" onClick={() => navigate('/')} >Home</button>
    <div>GSAPFrom</div>
</div>
  )
}

export default GSAPFrom