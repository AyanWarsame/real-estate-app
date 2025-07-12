import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets.js'
import { motion } from 'framer-motion'

const Projects = () => {

const [cuurentIndex, setCurrentIndex] = useState(0);
  
const [cardstToShow, setCardsToShow] = useState(4);



useEffect(() => {
 
  const updateCardsToShow = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1024) {
      setCardsToShow(projectsData.length); 
    } else if (screenWidth >= 768) {
      setCardsToShow(3); 
    } else {
      setCardsToShow(1); 
    }
  };

  updateCardsToShow();

  window.addEventListener('resize', updateCardsToShow);
  return () => {
    window.removeEventListener('resize', updateCardsToShow);
  };
}, []);


const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)

}


const prevProject = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1) 

}

  return (
    <motion.div 
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
   id="Projects"  className="container mx-auto px-6 py-4 pt-20 md:px-20 lg:px-32 w-full overflow-hidden" >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies — Explore Our Portfolio
      </p>

   
      {/* Navigation Arrows */}
      <div className="flex justify-between items-center mb-8">
        <button onClick={prevProject}
        className="p-3 bg-gray-200 rounded mr-2 " aria-label="Previous project">
          <img src={assets.left_arrow} alt="Previous project"   className='w-6 h-6' />
        </button>
        <button onClick={nextProject} 
        className="p-3 bg-gray-200 rounded ml-2" aria-label="Next project">
          <img src={assets.right_arrow} alt="Next "  className='w-6 h-6' />
        </button>
      </div>

      {/* Project Slider */}
      <div className="overflow-hidden ">
        <div style = {{ transform: `translateX(-${cuurentIndex * (100 / cardstToShow)}%)` }}
        className=" container mx-auto  my-4 p-2 flex gap-8 transition-transform duration-500 ease-in-out">
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex flex-shrink-0 h-full w-full sm:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full mb-5 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center items-center  ">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md pt-5 ">
                  <h2 className="text-xl text-gray-800 font-semibold ">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {project.price} <span>{project.location}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>

  )
}

export default Projects
