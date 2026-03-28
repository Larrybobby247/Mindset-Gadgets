import React from 'react'
import Hero from '../comonents/Hero'
import Services from '../comonents/Services'
import ProductsCat from '../comonents/ProductsCat'
import Contact from '../comonents/Contact'
import FeaturedProds from '../comonents/FeaturedProds'
import TopProducts from '../comonents/TopProducts'

const Home = () => {
  return (
    <div className='flex flex-col gap-24'>
      <Hero/>
      <div className='flex flex-col gap-16 mx-6 lg:mx-16 mb-24'>
      <Services/>
      <FeaturedProds/>
      <TopProducts/>
      <ProductsCat/>
      <Contact/>
      </div>
    </div>
  )
}

export default Home
