import { useState } from "react"

const Count = () => {
    const [count,setCount]=useState(0)
  return (
    <>
    <p>Count : {count}</p>
    <button onClick={()=>{setCount(count+1)}}>Increase</button>
    </>
  )
}

export default Count
