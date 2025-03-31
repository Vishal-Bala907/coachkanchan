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
  {
    id: 4,
    title: "Workshop",  
    path: "/workshop",
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
