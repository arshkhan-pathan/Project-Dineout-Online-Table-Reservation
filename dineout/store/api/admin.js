//
import baseApi from "./base";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStats: builder.query({
      query: () => "/api/mod/stats",
    }),
    getTagTypeCuisine: builder.query({
      query: () => "api/mod/cusinetagstypes/",
      providesTags: ["TagsTypesCuisnes"],
    }),
    createTypes: builder.mutation({
      query: (type) => ({
        url: `/api/mod/types/`,
        method: "POST",
        body: type,
      }),
      invalidatesTags: ["TagsTypesCuisnes"],
    }),
    deleteTypes: builder.mutation({
      query: (id) => ({
        url: `/api/mod/types/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TagsTypesCuisnes"],
    }),
    createCuisine: builder.mutation({
      query: (cuisine) => ({
        url: `api/mod/cuisines/`,
        method: "POST",
        body: cuisine,
      }),
      invalidatesTags: ["TagsTypesCuisnes"],
    }),
    deleteCuisine: builder.mutation({
      query: (id) => ({
        url: `api/mod/cuisines/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TagsTypesCuisnes"],
    }),
    createTags: builder.mutation({
      query: (tag) => ({
        url: `/api/mod/tags/`,
        method: "POST",
        body: tag,
      }),
      invalidatesTags: ["TagsTypesCuisnes"],
    }),
    deleteTags: builder.mutation({
      query: (id) => ({
        url: `/api/mod/tags/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TagsTypesCuisnes"],
    }),
  }),
});

export const {
  useGetStatsQuery,
  useGetTagTypeCuisineQuery,
  useCreateTypesMutation,
  useDeleteTypesMutation,
  useCreateCuisineMutation,
  useDeleteCuisineMutation,
  useCreateTagsMutation,
  useDeleteTagsMutation,
} = adminApi;
