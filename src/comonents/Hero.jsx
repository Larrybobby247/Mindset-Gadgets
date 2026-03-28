import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Img1 from '../assets/img1.jpg'

const Hero = () => {
  return (
    <div className=' flex h-[95vh]  justify-center items-center relative'>
      <div className='overlay w-full h-full'>
        <img src={Img1} alt="" className='h-full w-full object-cover'/>
      </div>
      <div className='px-6 lg:px-24 xl:px-40 absolute flex flex-col text-white gap-3 justify-center items-center'>
        <h1 className='text-4xl lg:text-[52px] font-bold text-center' data-aos="fade-right">Powering Your Lifestyle with Smart, Reliable Technology</h1>
        <p className='text-lg text-center text-light mb-4' data-aos="fade-right">Mindset Gadget is a modern tech and gadget brand focused on providing quality electronic devices and accessories such as smartphones and other smart gadgets.</p>
        <div className='flex gap-4 ' data-aos="fade-right">
            <button className='btn-primary'><a href="#store">Shop Now</a></button>
            <button className='btn-secondary'><FontAwesomeIcon icon={faWhatsapp}/><a href="https://wa.me/2348110947408">Let's Talk</a></button>
        </div>
      </div>
    </div>
  )
}

export default Hero
