import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface BestSeller {
  id: string;
  title: string;
  description: string;
  price: number;
  images: { url: string }[];
  category: string;
  createdAt: string;
  updatedAt: string;
}

export const bestsellerApi = createApi({
  reducerPath: "bestsellerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
  }),
  endpoints: (builder) => ({
    getBestsellers: builder.query<BestSeller[], void>({
      query: () => "/bestseller",
    }),
    getBestsellerById: builder.query<BestSeller, string>({
      query: (id) => `/bestseller/${id}`,
    }),
    createBestseller: builder.mutation<BestSeller, Partial<BestSeller>>({
      query: (body) => ({
        url: "/bestseller",
        method: "POST",
        body,
      }),
    }),
    updateBestseller: builder.mutation<
      BestSeller,
      { id: string; body: Partial<BestSeller> }
    >({
      query: ({ id, body }) => ({
        url: `/bestseller/${id}`,
        method: "PATCH",
        body,
      }),
    }),
    deleteBestseller: builder.mutation<void, string>({
      query: (id) => ({
        url: `/bestseller/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBestsellersQuery,
  useGetBestsellerByIdQuery,
  useCreateBestsellerMutation,
  useUpdateBestsellerMutation,
  useDeleteBestsellerMutation,
} = bestsellerApi;
