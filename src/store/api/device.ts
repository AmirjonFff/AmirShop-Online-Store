import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
interface IMyCard {
    id: number
    title: string
    price: number
    description: string,
    image: string
    rating: [
        {
            count: number,
            rate: number
        }
    ]
}

type PostsResponse = IMyCard[]

export const deviceApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
    tagTypes: ['Device'],
    endpoints: (build) => ({
        getDevice: build.query<PostsResponse, void>({
            query: () => '/products',
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Device' as const, id })),
                        { type: 'Device', id: 'LIST' },
                    ]
                    : [{ type: 'Device', id: 'LIST' }],
        }),
    }),
})
export const { useGetDeviceQuery } = deviceApi