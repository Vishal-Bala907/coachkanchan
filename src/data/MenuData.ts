interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
}
[];

const menu_data: MenuItem[] = [
  {
    id: 1,
    has_dropdown: true,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    has_dropdown: false,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    has_dropdown: false,
    title: "Courses",
    link: "/service",
  },

  {
    id: 7,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 4,
    has_dropdown: false,
    title: "Login",
    link: "/login",
  },
];
export default menu_data;
