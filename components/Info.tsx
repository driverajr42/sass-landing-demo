import Image from 'next/image'
import React from 'react'

const Info = () => {
  return (
    <section  className='border-2 border-red-500 bg-offWhite padding-container flexCenter gap-20 py-10 md:gap-28 lg:py-20'>
      {/* Startup Info Content */}
        <div className='flexColCenter text-center'>
          <h2 className='font-bold text-4xl mb-4'>A Diverse Team Of <span className='text-orange'>Passionate</span> UX Nerds Who Are Here To Help Your <span className='text-orange'>Startup Succeed</span></h2>
          <p className='regular-16'>From ideation to expansion, TDP understands the unique demands of your startup—providing you with optimized design strategies and fast turnarounds for an affordable monthly subscription.</p>
        {/* Startup Info Content Cards */}
          <div className='mx-6 my-8'>
            {/* Info Conten Car 1 */}
            <div className='flexColCenter mb-10'>
              <Image src='/infoIcon1.svg' alt='' width={130} height={130} />
              <h3 className='bold-20  m-2'>Consts 70% Less</h3>
              <p className='regular-16'>We developed highly-optimized design processes to let us work fast and deliver incredible results—and we pass those savings on to you</p>
            </div>

             {/* Info Conten Car 2 */}
             <div className='flexColCenter mt-4 mb-10'>
              <Image src='/infoIcon2.svg' alt='' width={130} height={130} />
              <h3 className='bold-20 m-2'>Adaptable and Scalable</h3>
              <p className='regular-16'>High-velocity is crucial to a startup’s success, and that’s why TDP delivers new designs every week so your momentum never falters</p>
            </div>
             {/* Info Conten Car 3 */}
             <div className='flexColCenter mb-10'>
              <Image src='/infoIcon3.svg' alt='' width={130} height={130} />
              <h3 className='bold-20  m-2'>Fast Turnaround Time</h3>
              <p className='regular-16'>TDP was built for flexibility—we quickly adapt and grow as you grow</p>
            </div>
          </div>


        </div>

  
    </section>
  )
}

export default Info