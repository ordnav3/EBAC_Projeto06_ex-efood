import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Place } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getPlaces: builder.query<Place[], void>({
      query: () => ''
    }),
    getProducts: builder.query<Place, string>({
      query: (id) => `${id}`
    })
  })
})

export const { useGetPlacesQuery, useGetProductsQuery } = api

export default api
