import React from 'react'
import PhoneAdd from '../components/PhoneAdd'
import HomeCategories from '../components/HomeCategories'

const Homepage = () => {
  return (
    <div className='bg-slate-50'>
      <PhoneAdd />
      <div className='flex flex-col justify-center sm:w-[90%] w-full px-10  mx-auto'>
        <HomeCategories />
      </div>
    </div>
  )
}

export default Homepage
