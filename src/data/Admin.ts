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
export const user_routes: AdminRoutes[] = [
  {
    id: 3,
    title: "Query",
    path: "/query",
  },
];
// export  user_routes;
export default admin_routes;
