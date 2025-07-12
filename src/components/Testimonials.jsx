import React from 'react'
import { testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'
const Testimonials = () => {
  return (
    <motion.div 
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
    className="py-16 px-4 bg-white bg-black" id="Testimonials">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Customer <span className="text-gray-500">Testimonials</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Real Stories from Those Who Found Home with Us
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonialsData.map((item, index) => (
          <div key={index} className="shadow-lg p-6 rounded-lg bg-gray-50 text-center">
            <img
              src={item.image}
              alt={item.alt}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.title}</p>
            <div className="flex justify-center mt-2 text-yellow-500">
              {'★'.repeat(item.rating)}
            </div>
            <p className="text-sm text-gray-600 mt-4">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;