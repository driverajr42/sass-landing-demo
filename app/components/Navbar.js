"use client"
import React, { useEffect, useState } from "react";
import { BsShare } from "react-icons/bs";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Image from "next/image";

import styles from '../styles/navbar.module.css'
import '../globals.css'
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sideList = [
    {
    
      title: "How it Works",
    },
    {
    
      title: "About",
    },
    {
    
      title: "Work",
    },
    {
    
      title: "Pricing",
    },
    {
      
        title: "Blog",
      }
  ];

  const navList = [
    {
      
        title: "How it Works",
      },
      {
      
        title: "About",
      },
      {
      
        title: "Work",
      },
      {
      
        title: "Pricing",
      },
      {
        
          title: "Blog",
        }
  ];

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleEscKeyPress = (e) => {
      if (e.keyCode === 27 && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [isOpen]);

  return (
    <nav className={styles.navbar} >
      <div className={`${styles.innerNav} && ${styles.container}`}>
        

        <Image
          src='./logo.svg'
          alt="Logo"
         width={50}
         height={50}className={styles.logo}
        />

<button className={styles.toggleBtn} aria-label="Open Menu" onClick={handleDrawer}>
          <AiOutlineMenu className={styles.toggleBtn} />
        </button>


        <div className={styles.desktopNav}>
        
        {navList.map(({ title }, index) => {
          return  (
          
      
              <Link className={styles.desktopLinks} key={index} href='/'>{title}</Link>
    
          );
        })}
      
  
      <div className={styles.desktopBtn}>
      <button className={`${styles.btn} && ${styles.navBtn}`}>
          <Link href='#'>Get Started With Your Trial</Link>
        </button>
      </div>
      
    </div>

      </div>

    

      

      {isOpen && (
        <div className={styles.contentCover}>
          <div
            onClick={() => setIsOpen(false)}
            className={styles.coverClosed}
            tabIndex="0"
          ></div>
        </div>
      )}

      <aside
        className={`${styles.sideBar} && ${
          isOpen ? styles.sidebarClosed : styles.sidebarOpen
        }`}
      >
        <span className={styles.innerNavLogo}>
          <Image
            src='./logo.svg'
            alt="Logo"
            
            width={50}
            height={50}
            
          />
           <AiOutlineClose className={styles.closeBtn} onClick={() => setIsOpen(false)} />
        </span>
        {sideList.map(({ icon, title }, index) => {
          return (
            <span
              key={index}
              className={styles.mobileNav}
            >
              <Link href='#'>{title}</Link>
            </span>
          );
        })}
  
          <button className={`${styles.btn} && ${styles.navBtn}`}>
            <Link href='#'>Get Started With Your Trial</Link>
          </button>
        
      </aside>
    </nav>
  );
};

export default Navbar;