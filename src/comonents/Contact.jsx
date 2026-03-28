import { faEnvelope, faLocation, faLocationDot, faMailReply, faPhone, faStopwatch, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Img from '../assets/img2.jpg'
import { fa11ty, faFacebook, faFacebookF, faInstagram, faTiktok, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className='flex flex-col gap-8 lg:flex-row lg:justify-between items-center' id='contact-us'>
      <div className='w-full lg:w-full'>
        <img src={Img} alt="" className='h-100 w-full object-cover rounded-sm'/>
      </div>
      <div className='flex flex-col gap-3 ' data-aos="fade-left">
        <h3 className='text-xl font-medium'>Get In Touch</h3>
        <h1 className='text-3xl font-bold'>To Enjoy Seamless Response, <br />Give Us a Call Now!</h1>
        <p className='text-lg text-grey'>We are built on reliability, affordability and customer's satisfaction, aiming to deliver top notch tech solutions while maintaining a strong relationship with both existing and intending customers.</p>
        <div className='grid  md:grid-cols-2 gap-4'>
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faPhone} className='text-2xl'/>
                <div>
                    <h3 className='text-xl font-bold'>Call Us</h3>
                    <p>+234 8110947408</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faEnvelope} className='text-2xl'/>
                <div>
                    <h3 className='text-xl font-bold'>Send Email</h3>
                    <p>daniellawal401@gmail.com</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faLocationDot} className='text-2xl'/>
                <div>
                    <h3 className='text-xl font-bold'>Address</h3>
                    <p>University Cresent, Ibadan, Oyo, Nigeria</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faStopwatch} className='text-2xl'/>
                <div>
                    <h3 className='text-xl font-bold'>Working Days</h3>
                    <p>Mon - Sat</p>
                </div>
            </div>
        </div>
        <div>
          <h2 className='text-2xl font-bold mb-4'>Follow Us On</h2>
          <div className='flex gap-4'>
            <a href="https://www.instagram.com/Mindsetgadgets_ng"><FontAwesomeIcon icon={faInstagram} className='text-2xl text-white bg-black p-3 rounded-full'/></a>
            <a href="https://www.tiktok.com/@mindset.gadgets?_r=1&_t=zs-942acun2zwy"><FontAwesomeIcon icon={faTiktok} className='text-2xl text-white bg-black p-3 rounded-full'/></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
