// import logoImg from '../assets/shared/desktop/logo.svg'

// import Image from 'next/image'

// export default function Header (){
//     return (
//         <header>
//             <Image src={logoImg} alt='logo' priority></Image>




//         </header>
//     )
// }
'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import logo from '../assets/shared/desktop/logo.svg'
import openMenu from '../assets/shared/mobile/icon-hamburger.svg';
import closeMenu from '../assets/shared/mobile/icon-close.svg';

export default function MainNavigation (){


    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu () {
        setIsOpen((isOpen) => !isOpen);
    }
    useEffect(() => {
        window.addEventListener("resize", handleCloseNav);
        return () => {
            window.removeEventListener("resize", handleCloseNav)
        }
        
    }, [isOpen])

    function handleCloseNav(){
        setIsOpen(false)
    }

    return (
        <header>
            <div className='logo'>
                <Link href="/">
                    <Image src={logo} alt='logo' priority></Image>
                </Link>
            </div>
            <button className='nav-icon' onClick={toggleMenu} aria-haspopup="true" aria-expanded={isOpen}>
                {isOpen ? 
                    <Image src={closeMenu} alt='close navigation' />
                    :
                    <Image src={openMenu} alt='open navigation' />       
                }
                
            </button>
            {/* {isOpen && <nav className={`main-navigation is-open`}>  */}
            <nav className={`main-navigation ${isOpen ? 'is-open' : ''}`}>
                
                <ul className='nav'>
                    <li>
                        <Link onClick={toggleMenu}
                            href="/"
                            // className={({ isActive }) =>
                            //     isActive ? 'active' : undefined
                            //   }
                            >
                            Home
                        </Link>
                    </li>
                    <li><Link onClick={toggleMenu} href="/about-us">About us</Link></li>
                    <li><Link onClick={toggleMenu} href="/create-plan">Create your plan</Link></li>
                </ul>
                
                {/* <div className='nav-bg'>
                    
                    <div className='nav-blur'><div></div></div>
                </div> */}
                
            </nav>
        </header>
    )
}