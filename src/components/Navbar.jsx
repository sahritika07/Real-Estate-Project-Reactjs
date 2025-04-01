import React from 'react'
import {assets} from "../assets/assets"

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32'>
        <img src={assets.logo} alt="" />
        <ul className='hidden md:flex gap-7 text-white' >
            <a href="#Header" className="cursor-pointer text-lg hover:text-gray-400">Home</a>
            <a href="#About" className="cursor-pointer text-lg hover:text-gray-400">About</a>
            <a href="#Projects" className="cursor-pointer text-lg hover:text-gray-400">Projects</a>
            <a href="#Testimonials" className="cursor-pointer text-lg hover:text-gray-400">Testimonials</a>           
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>
        <img src={assets.menu_icon} className='md:hidden w-7' alt="" />
      </div>
    </div>
  )
}

export default Navbar
