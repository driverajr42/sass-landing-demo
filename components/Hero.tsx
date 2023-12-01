import React from 'react'

import Button from './Button'
import { AiOutlineCheckCircle } from "react-icons/ai";
import Image from 'next/image';


const Hero = () => {
  return (
    <section className='border-2 border-red-500 bg-blue padding-container flexColCenter gap-20 py-10 md:gap-28 lg:py-20'>
      
      <div className='text-4xl lg:w-[62%] lg:regular-64'>
      <h1 className='font-bold text-center'>A UI/UX Design Subscription So <span className='text-orange font-bold'>Good</span> It Should Come With A <span className='text-orange font-bold'>Warning</span> Label</h1>
      </div>
      
        {/* Callout Points */}
       <div className='font-bold lg:flex '>
       <p className=' flex flex-row mb-4 lg:mx-4'>
       <AiOutlineCheckCircle className='flex justify-center items-center mr-2 w-6 h-6 text-orange' />
        No Hiring Headaches</p>
        <p className=' flex flex-row mb-4 lg:mx-4'>
        <AiOutlineCheckCircle className='flex justify-center items-center mr-2 w-6 h-6 text-orange' />
          Weekly Turnaround Times</p>
        <p className=' flex flex-row mb-4 lg:mx-4'>
        <AiOutlineCheckCircle className='flex justify-center items-center mr-2 w-6 h-6 text-orange' />
          One Flat Monthly Fee</p>
       </div>
        <div className="relative z-10 -top-12 lg:flexCenter">
                <Button type='button' title='Start Your Risk Free Trial' variant='btn_orange' />
        </div>
      <Image src='/hero-img.svg' alt={''} width={900} height={900} className='relative -top-36 lg:-top-44 '/>
    </section>
  )
}

export default Hero