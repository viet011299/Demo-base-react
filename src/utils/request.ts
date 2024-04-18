import type { AxiosInstance, AxiosRequestConfig, Method } from 'axios';

import axios from 'axios';

let store;
export const injectStore = (_store) => {
    store = _store;
};

const axiosInstance: AxiosInstance = axios.create({
    timeout: 6000,
    // baseURL: ENDPOINTS._HOST,
});

// Interceptors for global loading state
axiosInstance.interceptors.request.use(
    (config) => {

        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    (response) => {

        if (response?.data?.message) {
            // $message.success(response.data.message)
        }

        return response?.data;
    },
    (error) => {
        let errorMessage = 'System error';

        if (error?.message?.includes('Network Error')) {
            errorMessage = 'Network error, please check your connection';
        } else {
            errorMessage = error?.message;
        }

        console.dir(error);
        // error.message && $message.error(errorMessage);

        return {
            status: false,
            message: errorMessage,
            result: null,
        };
    },
);

export type Response<T = any> = {
    status: boolean;
    message: string;
    result: T;
};

export type MyResponse<T = any> = Promise<Response<T>>;

export enum HttpMethod {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
}

export const request = <T = any>(
    method: Lowercase<Method>,
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
): MyResponse<T> => {
    const prefix = 'http://localhost:3000';

    url = prefix + url;

    if (method === HttpMethod.POST) {
        return axiosInstance.post(url, data, config);
    } else if (method === HttpMethod.GET) {
        return axiosInstance.get(url, { params: data, ...config });
    } else if (method === HttpMethod.PUT) {
        return axiosInstance.put(url, data, config);
    } else if (method === HttpMethod.DELETE) {
        return axiosInstance.delete(url, { params: data, ...config });
    } else {
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
};

export const get = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): MyResponse<T> => {
    return request<T>(HttpMethod.GET, url, data, config);
};

export const post = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): MyResponse<T> => {
    return request<T>(HttpMethod.POST, url, data, config);
};

export const put = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): MyResponse<T> => {
    return request<T>(HttpMethod.PUT, url, data, config);
};

export const del = <T = any>(url: string, data?: any, config?: AxiosRequestConfig): MyResponse<T> => {
    return request<T>(HttpMethod.DELETE, url, data, config);
};
