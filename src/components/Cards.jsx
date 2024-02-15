import React from 'react'

const Cards = () => {
  return (
    <div className='py-16 bg-white w-full px-4'>
        <div className=" flex flex-col mx-auto max-w-6xl md:flex-row md:space-x-4">
            <div className="w-full mx-auto shadow-lg flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <h2 className='text-center font-bold text-2xl py-4'>Single User</h2>
                <p className='text-center text-2xl font-bold'>$149</p>
                <div className='text-center py-4 font-medium'>
                    <p className='py-2 border-b mx-auto mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-auto'>1 Granted User</p>
                    <p className='py-2 border-b mx-auto'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] mx-auto my-6 text-black rounded-md font-medium px-6 w-[200px] py-3'>Start Trial</button>
            </div>

            <div className="w-full mx-auto shadow-lg bg-gray-100 flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300">
                <h2 className='text-center font-bold text-2xl py-4'>Double User</h2>
                <p className='text-center text-2xl font-bold'>$149</p>
                <div className='text-center py-4 font-medium'>
                    <p className='py-2 border-b mx-auto mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-auto'>2 Granted User</p>
                    <p className='py-2 border-b mx-auto'>Send up to 2 GB</p>
                </div>
                <button className='text-[#00df9a] mx-auto my-6 bg-black rounded-md font-medium px-6 w-[200px] py-3'>Start Trial</button>
            </div>

            <div className="w-full mx-auto shadow-lg flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                <h2 className='text-center font-bold text-2xl py-4'>Triple User</h2>
                <p className='text-center text-2xl font-bold'>$149</p>
                <div className='text-center py-4 font-medium'>
                    <p className='py-2 border-b mx-auto mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-auto'>3 Granted User</p>
                    <p className='py-2 border-b mx-auto'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] mx-auto my-6 text-black rounded-md font-medium px-6 w-[200px] py-3'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards