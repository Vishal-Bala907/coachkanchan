interface AdminRoutes {
  id: Number;
  title: String;
  path: String;
}

const admin_routes: AdminRoutes[] = [
  {
    id: 1,
    title: "Add Course",
    path: "/add-course",
  },
  {
    id: 2,
    title: "Add Blog",
    path: "/add-blog",
  },
  {
    id: 3,
    title: "Dashboard",
    path: "/dashboard",
  },
];

export default admin_routes;