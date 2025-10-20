import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='bg-green-500 p-4 text-white'>
          <a className='text-white' href="/">Home</a>
          <a className='text-white' href="/about">About</a>
          <a className='text-white' href="/contact">Contact</a>
          <Link className='text-white' to="/products">Products</Link>
        </nav>
    </>
  )
}

export default Navbar