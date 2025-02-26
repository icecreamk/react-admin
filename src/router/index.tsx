import { Navigate, useRoutes } from "react-router-dom";
import Login from "@/views/Login";
import NotFound from "@/views/NotFound";
import Home from "@/views/Home";

const routers = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Navigate to='/404' />,
  },
  {
    path: '/404',
    element: <NotFound />,
  },
  {
    path: '/403',
    element: <div>403</div>,
  },
];

export default function Router() {
  return useRoutes(routers)
}

