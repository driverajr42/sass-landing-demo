import CaseStudies from '@/components/CaseStudies'
import Customers from '@/components/Customers'
import Hero from '@/components/Hero'
import Info from '@/components/Info'
import Pricings from '@/components/Pricings'
import Image from 'next/image'

export default function Home() {
  return (
    <>
     <Hero />
     <Customers />
     <Info />
     <CaseStudies />
     <Pricings />
    </>
  )
}
