"use client";
import menu_data from "@/data/MenuData";
import Link from "next/link.js";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MobileMenu = () => {

   const [navTitle, setNavTitle] = useState("");
   const currentRoute = usePathname();

   const isMenuItemActive = (menuLink: string) => {
      return currentRoute === menuLink;
   };

   const isSubMenuItemActive = (subMenuLink: string) => {
      return currentRoute === subMenuLink;
   };

   //openMobileMenu
   const openMobileMenu = (menu: any) => {
      if (navTitle === menu) {
         setNavTitle("");
      } else {
         setNavTitle(menu);
      }
   };

   return (
      <ul>
         {menu_data.map((menu: any) => (
            <li key={menu.id}>
               <Link href={menu.link} className={isMenuItemActive(menu.link) ? "active" : ""}>
                  {menu.title}
               </Link>
               {menu.has_dropdown && (
                  <>
                     {menu.sub_menus && (
                        <ul className="submenu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                           {menu.sub_menus.map((sub_m: any, i: any) => (
                              <li key={i}>
                                 <Link href={sub_m.link} className={`${sub_m.link && isSubMenuItemActive(sub_m.link) ? "active" : ""}`}>
                                    {sub_m.title}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     )}
                  </>
               )}
               {menu.has_dropdown &&
                  <a onClick={() => openMobileMenu(menu.title)} className={`mean-expand ${navTitle === menu.title ? "mean-clicked" : ""}`} style={{ fontSize: "18px", cursor: "pointer" }}>
                     <i className="far fa-plus"></i>
                  </a>}
            </li>
         ))}
      </ul>
   );
};

export default MobileMenu;