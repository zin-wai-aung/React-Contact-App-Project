import { apiService } from "../apiService";

const contactEndpoint = apiService.injectEndpoints({
  endpoints: (builder) => ({
    createcontact: builder.mutation({
      query: (arg) => ({
        url: `contact`,
        method: "POST",
        body: arg,
      }),
      invalidatesTags: ["contact"],
    }),
    getcontact: builder.query({
      query: () => "contact",
      providesTags: ["contact"],
    }),
    getsinglecontact: builder.query({
      query: (arg) => `contact/${arg}`,
      providesTags: ["contact"],
    }),
    deletecontact: builder.mutation({
      query: (arg) => ({
        url: `contact/${arg}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contact"],
    }),
    updatecontact: builder.mutation({
      query: (arg) => ({
        url: `contact/${arg.id}`,
        method: "PUT",
        body:arg
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const { useCreatecontactMutation, useGetcontactQuery , useGetsinglecontactQuery, useDeletecontactMutation, useUpdatecontactMutation } = contactEndpoint;
