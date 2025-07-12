import { assets } from '../assets/assets.js'
import React from 'react'
import Button from './Button.jsx'
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 overflow-hidden " id="Footer">
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center text-white py-8'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="Logo" />
                <p className='text-gray-400 mt-4'>EstateZen is company dedicated to providing the best real estate services.</p>
            </div>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
               <h3 className='text-white text-lg font-bold mb-4'>Company</h3> 
              <ul className='flex flex-col gap-2 text-gray-400'>
               <li><a href="#Header" className='hover:text-white'>Home</a></li>
               <li><a href="#About" className='block hover:text-white'>About</a></li>
               <li><a href="#Contact" className='block hover:text-white'>Contact U</a></li>
               <li><a href="#" className='block hover:text-white'>Privacy Policy</a></li>
              </ul>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold mb-4'>Subscribe to Our Newsletter</h3> 
               <p className='text-gray-400'>Stay updated with the latest news, articles, resources and offers.</p>
               <div className='flex flex-col md:flex-row gap-4 mt-4'>
                 <input type="email" className='p-2 rounded-md text-gray-300 bg-gray-800 border border-gray-700 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Enter your email' />
                 <Button className={"py-2 px-4 rounded bg-blue-500 text-white"}  type='button' label={"Subscribe"}/>
               </div>
            </div>
        </div>
         <div className='text-center text-gray-500 py-4 border-t border-gray-700 mt-8'>
           Copyright © 2025 Real Estate. All Rights Reserved.
         </div>
    </div>

  )
}

export default Footer