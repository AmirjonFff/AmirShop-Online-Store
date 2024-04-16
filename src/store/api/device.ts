import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { providesList } from '../cash';

interface IMyCard {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: Category;
}

interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}

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
    }),
});

export const { useGetDeviceQuery, useGetDeviceIdQuery } = deviceApi;