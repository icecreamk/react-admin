import { lazy } from "react";
import { buildRoutes, RouteConfig } from "./utils";

export const routeConfig: RouteConfig[] = [
  {
    element: lazy(() => import('@/layouts/BasicLayout')),
    children: [
      {
        path: '/',
        element: lazy(() => import('@/views/Home')),
      },
      {
        path: '/about',
        element: lazy(() => import('@/views/About')),
      },
      // {
      //   path: '/user',
      //   element: lazy(() => import('@/views/User')),
      // },
      {
        path: '/404',
        element: lazy(() => import('@/views/NotFound')),
      },
    ]
  },
  {
    path: '/login',
    element: lazy(() => import('@/views/Login')),
  },

];

export const routers = buildRoutes(routeConfig)
