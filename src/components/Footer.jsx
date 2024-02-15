import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
     <div>
        <h2 className='text-[#00df9a] text-bold w-full text-3xl text-center'>CAMFLOW</h2>
        <p className='text-gray-500 pt-2 text-center font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi debitis at illo aut aliquam, consequatur dolor distinctio ex? Minus, porro.</p>
     </div>
     <div className='lg:col-span-2 flex justify-between'>
        <div>
            <h4 className='font-medium text-gray-400'>Solutions</h4>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insights</li>
            </ul>
        </div>
        <div>
            <h4 className='font-medium text-gray-400'>Support</h4>
            <ul>
                <li className='py-2 text-sm'>Documentation</li>
                <li className='py-2 text-sm'>Guide</li>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>API Status</li>
            </ul>
        </div>
        <div>
            <h4 className='font-medium text-gray-400'>Company</h4>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Jobs</li>
                <li className='py-2 text-sm'>Press</li>
                <li className='py-2 text-sm'>Careers</li>
            </ul>
        </div>
        <div>
            <h4 className='font-medium text-gray-400'>Legal</h4>
            <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Term</li>
            </ul>
        </div>
     </div>
    </div>
  )
}

export default Footer