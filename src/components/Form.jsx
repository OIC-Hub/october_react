import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const handleSubmit = () =>{
       localStorage.setItem("user", JSON.stringify({name, email}))
       console.log(name, email);
       
    }
  return (
    <>
     <div>
        <h1>Login</h1>
        <input type="text" placeholder='Name...' value={name} onChange={(e)=>setName(e.target.value)}  />
        <input type="text" placeholder='Email..' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button onClick={handleSubmit}>Login</button>
     </div>
    
    </>
  )
}

export default Form