import React from 'react'
import brand_img from '../assets/brand_img.png'
import Button from './Button'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <motion.div 
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
     className="flex flex-col items-center justify-center container mx-auto p-14 px-6 md:px-20 lg:px-32 w-full overflow-hidden" id='About'>

     <h1 className="text-2xl sm:text-4xl font-bold mb-2">About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>

     <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About properties, Dedicated to Your Vision</p>
       <div className='flex flex-col md:flex-row  items-center md:items-start md:gap-20'> 
      <img src={brand_img} alt=""  className='w-full sm:w-1/2  max-w-lg'/>

       <div className='flex flex-col  items-center md:items-start mt-10 text-gray-600'>
        <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
         <div>
             <p className='text-4xl font-medium text-gray-800'>10+</p>
             <p>Years of Excellence</p>
        
         </div>
            

         <div >
             <p className='text-4xl font-medium text-gray-800'>12+</p>
             <p>Projects Completed</p>
         </div>

         <div >
             <p className='text-4xl font-medium text-gray-800'>20+</p>
             <p>Mn. Sq Ft. Delivered</p>
         </div>

         <div >
             <p className='text-4xl font-medium text-gray-800'>25+</p>
             <p>Ongoing Projects</p>
         </div>

         
    
        </div>
        
        <p className='my-10 max-w-lg '>At EstateZen, we don't just handle real estate—we craft lifestyles, shape dreams, and build legacies. 
            From charming starter homes to bold commercial visions, our dedicated team brings integrity, insight,
            and an eye for what makes a space feel truly yours.Whether you’re buying, selling, or investing,
            we’re here to unlock possibilities—one property at a time.</p>
           <Button label="Learn More" className="bg-blue-600 text-white  px-8 py-2 rounded" />

         </div>
          </div>


    </motion.div>
  )
}

export default About