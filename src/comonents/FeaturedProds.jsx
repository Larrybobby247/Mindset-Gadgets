import { faArrowCircleRight, faArrowLeft, faArrowRight, faNairaSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import {ProductLists} from './ProductLists'  

const FeaturedProds = () => {
  const featuredProds = ProductLists.filter(prod => prod.arrival === 'featured')
  return (
    <div id='store'>
      <div className='flex justify-between items-center mb-12'>
        <h1 className='text-3xl font-bold lg:text-4xl'>Featured Products</h1>
      </div>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
        {featuredProds.map(product => {
          return(
            <div key={product.id} className='' data-aos="fade-right">
              <img src={product.image} alt="" className='rounded-sm h-[340px] w-full object-cover'/>
              <div className='flex flex-col gap-4 my-4 mx-2'>
                <div className='flex gap-2 items-center'>
                  <button className='btn-tertiary cursor-none'>{product.color}</button>
                </div>
                <h3 className='text-2xl font-bold'>{product.name}</h3>
                <h3 className="text-xl font-bold flex items-center"><FontAwesomeIcon icon={faNairaSign}/>{product.price}</h3>
                <button className="btn-primary flex gap-2 items-center btn">
                  <a href='https://wa.me/2348110947408' className="font-medium transition duration-300">Order Now</a>
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedProds
