"use client"
import React from 'react'
import {motion} from "framer-motion"
import { ThreeDCardDemo } from './ui/3dcard-Effect/3dcard'


export default function AbouMe() {
  return (
    <div className='flex flex-col lg:flex-row lg:px-30  items-center justify-center sm:justify-start lg:justify-center w-full h-full space-y-12 sm:space-y-20 lg:space-x-30'>
      
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col items-center justify-center w-1/2"
      >
        <ThreeDCardDemo />
        {/* <img
          src="/images/profile-photo.jpg"
          alt="Hero Image"
          className="w-full md:h-full lg:w-[40vh] lg:h-[60vh] lg:self-start object-cover object-center rounded-4xl"
        /> */}
      </motion.div>

      {/* Text Section with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }} // appears once, when 50% visible
        className="flex flex-col space-y-7 lg:w-full text-shadow-white text-center text-[12px] sm:text-xl lg:text-lg px-5 sm:px-9 lg:p-0 font-bold text-white"
      >
         <span>I’m a freelance web developer with a passion for transforming ideas into clean, modern, and high-performing websites. Whether it's building from scratch or upgrading an existing site.</span>
        <span>I focus on creating responsive, user-friendly, and professional-looking web experiences. I work closely with clients to enhance their online presence, improve functionality, and deliver results that align with their business goals.</span>
        <span>With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React, Next JS and Tailwind CSS, I stay current with the latest web trends and best practices to ensure every site I build is fast, secure, and SEO-friendly.</span>
      </motion.div>
      
    </div>
  )
}
