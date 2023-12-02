import Image from 'next/image'
import React from 'react'

const Customers = () => {
  return (
    <section className=' bg-black w-screen h-80 relative -top-60 -mb-72 md:-top-80 md:h-96 md:-mb-96 lg:h-[20rem] lg:-mb-[30rem]'>
      <div className='flexCenter gap-28 py-14 '>
        <h3 className='text-xl  text-white font-bold md:text-4xl'>We Helped Our Customers Raise <span className='text-orange'>$1B+</span></h3>
      </div>
      {/* Customer's Logos */}
      <div className='flexCenter w-full px-6  divide-x divide-orange'> 
        <Image src='/combinatorLogo.svg' alt='' width={90} height={100} className="md:w-48" />
        <Image src='/sequioiaLogo.svg' alt='' width={90} height={100} className="md:w-48" />
        <Image src='/accelLogo.svg' alt='' width={90} height={100} className="md:w-48" />
        <Image src='/a16zLogo.svg' alt='' width={90} height={100} className="md:w-48" />
      </div>
    </section>
  )
}

export default Customers