import { ComponentType, LazyExoticComponent } from 'react';

export type RouteType = {
    path: string;
    name: string;
    exact: boolean;
    isHidden?: boolean;
    component: LazyExoticComponent<ComponentType<any>>;
    routes?: Array<RouteType>;
};
