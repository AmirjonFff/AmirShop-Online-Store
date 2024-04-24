import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { providesList } from '../cash';
import { ICategory, IMyCard, ISearch } from '../type';


export const deviceApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1/' }),
    tagTypes: ['Device'],
    endpoints: (build) => ({
        getDevice: build.query<IMyCard[], void>({
            query: () => '/products',
            providesTags: (result = []) => providesList(result, 'Device'),
        }),
        getDeviceId: build.query<IMyCard, number | undefined>({
            query: (id) => `/products/${id}`,
            providesTags: (result) => {
                if (result) {
                    return providesList([result], 'Device');
                }
                return [];
            },
        }),
        getDeviceName: build.query<IMyCard[], string>({
            query: (title) => `/products?title=${title}`,
            providesTags: (result = []) => providesList(result, 'Device'),
        }),
        getCategories: build.query<ICategory[], void>({
            query: () => `/categories`,
            providesTags: (result = []) => providesList(result, 'Device'),
        }),
        getSearch: build.query<IMyCard[], ISearch>({
            query: ({ title, price_min, price_max, categoryId }) => `/products?title=${title}&price_min=${price_min}&price_max=${price_max}&categoryId=${categoryId}`,
            providesTags: (result = []) => providesList(result, 'Device'),
        }),
    }),
});

export const { useGetDeviceQuery, useGetDeviceIdQuery, useGetCategoriesQuery, useGetSearchQuery, useGetDeviceNameQuery } = deviceApi;