import React from 'react'
import SidevarImage from "/laptop1.jpg"
import { FaEnvelope } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <>
     <aside className='bg-amber-100 w-[350px] p-4'>
        <img src={SidevarImage} alt="sidebarImage" />
        <h1>Mariam</h1>
        <p className='bg-[#bfb9c5] text-black p-4'>Software developer</p>
        <hr />
        <div>
            <span><FaEnvelope /></span>
            <span><p>Email:</p>
            <p>Adesinamariam7@gmail.com</p></span>
        </div>
     </aside>
    
    </>
  )
}

export default Sidebar