"use client";
import menu_data from "@/data/MenuData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import admin_routes from "@/data/Admin";
import { useEffect, useState } from "react";

const NavMenu = () => {
  const currentRoute = usePathname();

  const isMenuItemActive = (menuLink: string) => {
    return currentRoute === menuLink;
  };

  const isSubMenuItemActive = (subMenuLink: string) => {
    return currentRoute === subMenuLink;
  };
  const [ROLE, setRole] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Prevents SSR issues
      const user = localStorage.getItem("user");
      try {
        setRole(user ? JSON.parse(user)?.role : null);
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        setRole(null);
      }
    }
  }, []);

  return (
    <ul>
      {menu_data.map((menu: any) => (
        <li key={menu.id}>
          <Link
            href={menu.link}
            className={`${
              isMenuItemActive(menu.link) ||
              (menu.sub_menus &&
                menu.sub_menus.some(
                  (sub_m: any) => sub_m.link && isSubMenuItemActive(sub_m.link)
                ))
                ? "active"
                : ""
            }`}
            style={{
              color: menu.title === "Home" ? "#ffe000" : "white",
            }}
          >
            {menu.title}
          </Link>
          {menu.has_dropdown && (
            <>
              {menu.sub_menus && (
                <ul className="submenu">
                  {menu.sub_menus.map((sub_m: any, i: any) => (
                    <li key={i}>
                      <Link
                        href={sub_m.link}
                        className={`${
                          sub_m.link && isSubMenuItemActive(sub_m.link)
                            ? "active"
                            : ""
                        }`}
                      >
                        {sub_m.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </li>
      ))}
      {ROLE === "ADMIN" &&
        admin_routes.map((menu: any) => (
          <li key={menu.id}>
            <Link
              href={menu.path}
              className={`${
                isMenuItemActive(menu.link) ||
                (menu.sub_menus &&
                  menu.sub_menus.some(
                    (sub_m: any) =>
                      sub_m.link && isSubMenuItemActive(sub_m.link)
                  ))
                  ? "active"
                  : ""
              }`}
              style={{
                color: menu.title === "Home" ? "#ffe000" : "white",
              }}
            >
              {menu.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default NavMenu;
