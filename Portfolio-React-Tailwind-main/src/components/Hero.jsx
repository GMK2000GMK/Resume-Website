import React from 'react'
import HeroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Ghulam M. Khan</span>
            ,  a Computational Biologist
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I specialise in building bioinformatic workflows, medical applications and responsive web applications.
        </p>
        <div className='mt-8 space-x-4'>
    <button
        className='bg-gradient-to-r from-green-400 to-blue-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
        Contact With Me
    </button>
    <a
        href="/public/Ghulam_Khan_CV.pdf" // Replace with the actual path to your PDF file
        target="_blank" // Opens the PDF in a new tab
        rel="noopener noreferrer" // Improves security when using target="_blank"
        className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full inline-block text-center'>
        Resume
    </a>
</div>
    </div>
  )
}

export default Hero