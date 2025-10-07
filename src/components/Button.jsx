import React from 'react'
import "./Button.css"

const Button = () => {
  return (
    <>
    <div>
        <button style={{backgroundColor: "red", color:"white", }}>Submit</button>
        <button className='login-btn'>Login</button>
    </div>
    </>
  )
}

export default Button