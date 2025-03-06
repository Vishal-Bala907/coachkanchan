interface AdminRoutes {
  id: Number;
  title: String;
  path: String;
}

const admin_routes: AdminRoutes[] = [
  {
    id: 3,
    title: "Dashboard",
    path: "/dashboard",
  },
];

export default admin_routes;
