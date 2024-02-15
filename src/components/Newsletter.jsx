import React from 'react'

const Newsletter = () => {
  return (
    <div className='py-10 w-full text-white'>
        <div className="mx-auto max-w-6xl flex flex-col justify-between md:flex-row">
            <div className="flex flex-col space-y-2 md:space-y-0 mx-auto px-4 py-4 md:mx-0">
                <h3 className='font-bold text-xl md:text-2xl'>Want tricks & tips to optimize your flow?</h3>
                <p>Sign up to our newsletter and stay up to date</p>
            </div>
           <div className="my-4">
            <div className="flex flex-col items-center justify-between md:flex-row px-4 w-full">
                <input className='px-6 py-3 text-center w-full rounded-md text-black mb-4' type="email" placeholder='Enter Email'/>
                <button className='bg-[#00df9a] text-black rounded-md font-medium ml-4 px-6 w-[200px] py-3 md:mt-[-10px]'>Notify Me</button>
            </div>
            <p className='text-gray-600'>We care about the protection of your data. Read our <a className='text-[#00df9a]'>Privacy Policy.</a></p>
           </div>
        </div>
    </div>
  )
}

export default Newsletter