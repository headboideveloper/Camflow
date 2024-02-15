import React from 'react'
// import Typed from 'react-typed';
import { Typewriter, useTypewriter } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter ({
    words: ["BTB", "BTC", "SASS"],
    loop:true,
    typeSpeed:20,
    deleteSpeed:10,
    delaySpeed:2000,
  })
  return (
    <div className='text-white text-center mx-auto py-36 max-w-4xl h-screen'>
        <p className='text-[#00df9a] font-bold'>GROWING WITH DATA ANALYTICS</p>
        <h2 className='text-3xl font-bold py-6 md:text-5xl lg:text-6xl'>Grow with data.</h2>
        <h3 className='mt-[-15px] md:text-4xl'>Fast, flexible financing </h3>
        <h4 className='text-4xl font-bold text-white'>
          for <span className='text-gray-600'>{text}</span>
          </h4>
          <p className='py-6 text-gray-600 font-bold w-[500px] mx-auto px-16 mb-4 md:text-2xl'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
          <a href="#" className='bg-[#00df9a] px-6 py-2 w-[200px] rounded-md text-black font-bold'>Get Started</a>
        {/* <Typed strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop /> */}
    </div>
  )
}

export default Hero