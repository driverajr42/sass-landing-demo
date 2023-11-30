'use client'
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


const Navbar = () => {
    const [menuIcon, setMenuIcon] = useState(false)

    const handleSmallScreen = () => {
        setMenuIcon(!menuIcon)
    }

    // const toggleMenu = () => {
    //     setIsOpen(!isOpen)
    // }
  return (
    // TODO: When navbar is completed, remove the border-2 and border-red-500 classes
    <nav className="border-2 border-red-500 flexBetween max-container padding-container relative z-30 py-5">
        <Link href='/' onClick={handleSmallScreen}>
            <Image src='/logo.svg' alt="logo" width={74} height={29}/>
            </Link>

            {/* Desktop Navigation */}
            <ul className='hidden gap-12 lg:flex'>
                {/* We are accessing the data within contstant/index.ts and mapping through the NAV_LINKS data */}
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                )) }

            </ul>

            <div className="lg:flexCenter hidden">
                <Button type='button' title='GET STARTED' variant='btn_orange' />
            </div>

           <div onClick={handleSmallScreen} className="inline-block cursor-pointer lg:hidden">
           {menuIcon ? 
            ( <AiOutlineClose alt="close" width={32} height={32} /> ) 
             : 
             (<AiOutlineMenu alt="menu" width={32} height={32} />)
           }
           </div>

{/* Mobile Navigation */}
           <ul className={menuIcon ? 
           'md:hiddem absolute top-[100px] right-0 bottom-0 left-0 flexColCenter w-full h-screen bg-slate-800 ease-in duration-300'
        :
        'md:hidden absolute top-[100px] right-0 left-[-100%] flexColCenter w-full h-screen bg-slate-800 ease-in duration-300 text-center'}>
                {/* We are accessing the data within contstant/index.ts and mapping through the NAV_LINKS data */}
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="regular-16 text-gray-50  cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                )) }

            </ul>

        

    </nav>
  )
}

export default Navbar