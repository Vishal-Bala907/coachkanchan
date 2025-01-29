"use client"
import Image from "next/image"
import NavMenu from "./menus/NavMenu"
import Link from "next/link"
import OffCanvas from "./menus/OffCanvas"
import { useState } from "react"
import UseSticky from "@/hooks/UseSticky"
import HeaderTopTwo from "./menus/HeaderTopTwo"

import logo_1 from "@/assets/img/logo/logo-2.svg"
import logo_2 from "@/assets/img/logo/logo.svg"
import shape from "@/assets/img/arrow-shape.png"

const HeaderThree = () => {

   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);

   return (
      <>
         <header>
            <HeaderTopTwo />
            <div id="header-sticky" className={`header-3 ${sticky ? "sticky" : ""}`}>
               <div className="container">
                  <div className="mega-menu-wrapper">
                     <div className="header-main">
                        <div className="header-left">
                           <div className="logo">
                              <Link href="/" className="header-logo">
                                 <Image src={logo_1} alt="logo-img" />
                              </Link>
                              <Link href="/" className="header-logo-2">
                                 <Image src={logo_2} alt="logo-img" />
                              </Link>
                           </div>
                           <div className="mean__menu-wrapper d-none d-lg-block">
                              <div className="main-menu">
                                 <nav id="mobile-menu">
                                    <NavMenu />
                                 </nav>
                              </div>
                           </div>
                        </div>
                        <div className="header-right">
                           <div className="header-button">
                              <Link href="/contact" className="theme-btn-2 padding-style">
                                 Get A Quote
                                 <span className="shape-img">
                                    <Image src={shape} alt="shape-img" />
                                 </span>
                              </Link>
                           </div>
                           <div className="header__hamburger d-lg-none my-auto">
                              <div className="sidebar__toggle">
                                 <a className="bar-icon" href="#">
                                    <i className="fas fa-bars"></i>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <OffCanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
      </>
   )
}

export default HeaderThree
