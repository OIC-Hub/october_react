import React, { useState } from 'react'

const MondayClass = () => {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("red")
    const [alert, setAlert] = useState(false)
    const [age, setAge] = useState(0)
    const handleCount =() =>{
        setCount(count + 1)
    }

    const handleAlert = () => {
        setAlert(true)
    }
  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={handleCount}>Count</button>
        <p style={{backgroundColor: color, color:"white"}}>This is {color} text</p>
        <button onClick={()=>setColor("blue")} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Change color</button>
        <p>{alert && "This is an alert!"}</p>
        <button onClick={handleAlert}>Show alert</button>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
    
    </>
  )
}

export default MondayClass