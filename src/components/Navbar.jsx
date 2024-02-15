import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
   const [nav,setNav] = useState(false)
   function navHandler () {
      setNav(!nav)
   }
   return (
    <div className='text-white flex justify-between items-center px-4 h-24 max-w-6xl mx-auto'>
      <h2 className='text-[#00df9a] text-bold w-full text-3xl'>
      CAMFLOW
      </h2>
      <ul className='hidden md:flex mx-auto items-center uppercase'>
           <li><a href="#" className='font-bold p-4 hover:text-[#00df9a] '>Home</a></li>
           <li><a href="#" className='font-bold p-4 hover:text-[#00df9a]'>Resources</a></li>
           <li><a href="#" className='font-bold p-4 hover:text-[#00df9a]'>Company</a></li>
           <li><a href="#" className='font-bold p-4 hover:text-[#00df9a]'>About</a></li>
           <li><a href="#" className='font-bold p-4 hover:text-[#00df9a]'>Contact</a></li>
      </ul>

      
      <div onClick={navHandler} className='block md:hidden'>
      {!nav ? <AiOutlineMenu size= {20}/> : <AiOutlineClose size={20}/>}
      </div>
   <div className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#00df9a] ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <h2 className='text-black text-bold w-full text-3xl mt-8 text-center'>
          CAMFLOW
      </h2>
      <ul className='space-y-4 uppercase py-[4rem] text-center text-black font-bold'>
            <li><a href="#" className='p-4 hover:text-gray-800'>Home</a></li>
           <li><a href="#" className='p-4 hover:text-gray-800'>Resources</a></li>
           <li><a href="#" className='p-4 hover:text-gray-800'>Company</a></li>
           <li><a href="#" className='p-4 hover:text-gray-800'>About</a></li>
           <li><a href="#" className='p-4 hover:text-gray-800'>Contact</a></li>
      </ul>
    </div>
    </div>
   )
}

export default Navbar
