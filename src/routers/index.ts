
import { RouteType } from '@/types/router.type';
import { lazy } from 'react';

const HomeScreen = lazy(() => import('@/pages/home'));
export const routes: Array<RouteType> = [
    {
        name: 'Home',
        exact: true,
        path: '/',
        component: HomeScreen,
    },
]
