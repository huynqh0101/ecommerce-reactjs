import { lazy } from 'react';

const routers = [
    {
        path: '/',
        component: lazy(() => import('@components/HomePage/HomePage'))
    },
    {
        path: '/blog',
        component: lazy(() => import('@components/Blog/Blog'))
    },
    {
        path: '/shop',
        component: lazy(() => import('@pages/OurShop/OurShop'))
    },
    {
        path: '/cart',
        component: lazy(() => import('@pages/Cart/Cart'))
    },
    {
        path: '/product/:id',
        component: lazy(() => import('@pages/DetailProduct'))
    },
    {
        path: '/admin',
        component: lazy(() => import('@pages/Admin/Admin'))
    },
    {
        path: '/admin/dashboard',
        component: lazy(() =>
            import('@pages/Admin/components/dashboard/AdminDashboard')
        )
    },
    {
        path: '/admin/home',
        component: lazy(() =>
            import('@pages/Admin/components/dashboard/AdminHome/AdminHome')
        )
    },
    {
        path: '/about-us',
        component: lazy(() => import('@pages/AboutUs'))
    },
    {
        path: '/order',
        component: lazy(() => import('@pages/Orders'))
    }
];

export default routers;
