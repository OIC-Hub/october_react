import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='bg-green-500 p-4 text-white'>
          <a className='text-white' href="/">Home</a>
          <a className='text-white' href="/about">About</a>
          <a className='text-white' href="/contact">Contact</a>
        </nav>
    </>
  )
}

export default Navbar