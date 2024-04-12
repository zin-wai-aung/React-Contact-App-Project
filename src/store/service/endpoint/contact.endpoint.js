import { apiService } from "../apiService";

const contactEndpoint = apiService.injectEndpoints({
  endpoints: (builder) => ({
    createcontact: builder.mutation({
      query: (arg) => ({
        url: `contact`,
        method: "POST",
        body: arg,
      }),
    }),
    getcontact: builder.query({
      query: () => "contact",
    }),
    getsinglecontact: builder.query({
      query: (arg) => `contact/${arg}`,
    }),
    deletecontact: builder.mutation({
      query: (arg) => ({
        url: `contact/${arg}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useCreatecontactMutation, useGetcontactQuery , useGetsinglecontactQuery, useDeletecontactMutation } = contactEndpoint;
