import React from 'react'
import Laptop from '../assets/pngtree-laptop-icon-png-image_1871608.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className="flex flex-col justify-center md:ml-10">
                <p className='text-[#00df9a] font-bold mx-auto md:mx-0'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='font-bold text-xl md:text-2xl py-2 mx-auto md:mx-0'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maiores, omnis saepe perferendis reiciendis optio excepturi, error, nam iste quis enim nostrum praesentium quod officia. Fugit sint nam quaerat in.</p>
                <button className='bg-black px-6 mt-4 py-2 rounded-md text-[#00df9a] font-bold w-[200px] mx-auto md:mx-0'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics