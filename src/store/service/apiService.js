import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiService = createApi({
  reducerPath: 'apiService',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://contact.sankyitar.store/api/v1/',
    prepareHeaders: (headers)=> {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${JSON.parse(token)}`);
      }
      return headers;
    }

  }),
  endpoints: () => ({})
})

