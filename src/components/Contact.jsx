import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from "@web3forms/react";
import Button from './Button';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const accessKey = "968f0cd7-3749-43aa-b597-6eaac955a951";

  const { submit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult("");
      toast.success(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult("");
      toast.error(msg);
    },
  });

  return (
    <motion.div 
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }} 
   className="py-16 px-4" id="Contact">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Contact <span className="text-gray-500">With Us</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Ready to Make a Move? Let&apos;s Build Your Future Together!
        </p>
        <form
          onSubmit={handleSubmit(submit)}
          className="shadow-lg p-6 rounded-lg max-w-2xl mx-auto text-gray-500 pt-8"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                placeholder="Your Name"
                className="border border-gray-300 rounded py-3 px-4"
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address',
                  },
                })}
                placeholder="Your Email"
                className="border border-gray-300 rounded py-3 px-4"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
          </div>
          <div className="my-6 text-left">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
              placeholder="Message"
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
          </div>
          
         <div className="flex justify-center mt-6">
  <Button 
    label={result ? result : "Send Message"} 
    type="submit" 
    className="bg-blue-600 flex items-center text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors" 
  />
</div>

            </form>
      </div>
    </motion.div>
  );
};

export default Contact; 