import React from 'react'
import "./Button.css"
// import Laptop from  "/laptop1.jpg"

const Button = (props) => {
 
  return (
    <>
      <div>
        <button>
          {props.label} {props.icon}
        </button>

       
        {/* <button style={{backgroundColor: "red", color:"white", }}>Submit</button>
        <button className='login-btn'>Login</button>
        <img src="/laptop1.jpg" alt="Laptop" />
        <img src={Laptop} alt="" /> */}
      </div>
    </>
  );
}

export default Button