import React from 'react'
import Button from './Button'
import { AiOutlineCheckCircle } from "react-icons/ai";


const Hero = () => {
  return (
    <section className='border-2 border-red-500 max-container padding-container flexColCenter gap-20 py-10 md:gap-28 lg:py-20'>
      <div className='text-4xl'>
      <h1 className='font-bold text-center'>A UI/UX Design Subscription So <span className='text-orange font-bold'>Good </span>
It Should Come With A <span className='text-orange font-bold'>Warning</span> Label</h1>
      </div>
      
        {/* Callout Points */}
       <div className=''>
       <p className=' flex flex-row mb-4'>
       <AiOutlineCheckCircle className='flex justify-center items-center mr-2 w-6 h-6 text-orange' />
        No Hiring Headaches</p>
        <p className=' flex flex-row mb-4'>
        <AiOutlineCheckCircle className='flex justify-center items-center mr-2 w-6 h-6 text-orange' />
          Weekly Turnaround Times</p>
        <p className=' flex flex-row mb-4'>
        <AiOutlineCheckCircle className='flex justify-center items-center mr-2 w-6 h-6 text-orange' />
          One Flat Monthly Fee</p>
       </div>
        <div className="lg:flexCenter">
                <Button type='button' title='Stary Your Risk Free Trial' variant='btn_orange' />
        </div>
      

      <div className='hero-img' />
    </section>
  )
}

export default Hero