//
import baseApi from "./base";

export const restaurantApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRestaurant: builder.mutation({
      query: (credentials) => ({
        url: "/api/restaurant/restaurants/create/ ",
        method: "POST",
        body: credentials,
      }),
    }),
    getTags: builder.query({
      query: () => "/api/mod/tags",
    }),
    getCuisines: builder.query({
      query: () => "/api/mod/cuisines",
    }),
    getTypes: builder.query({
      query: () => "/api/mod/types",
    }),
    getRestaurantData: builder.query({
      query: (id) => `api/restaurant/restaurants/${id}/`,
    }),
    getRestaurantEarnings: builder.query({
      query: (id) => `api/restaurant/restaurants/${id}/earnings`,
    }),
    getRestaurantById: builder.query({
      query: (id) => `api/restaurant/restaurants/${id}`,
    }),
    createTable: builder.mutation({
      query: ({ restaurantId, tableData }) => ({
        url: `/api/restaurant/restaurants/${restaurantId}/tables/`,
        method: "POST",
        body: tableData,
      }),
    }),
  }),
});

export const {
  useCreateRestaurantMutation,
  useGetTagsQuery,
  useGetCuisinesQuery,
  useGetTypesQuery,
  useGetRestaurantDataQuery,
  useGetRestaurantEarningsQuery,
  useGetRestaurantByIdQuery,
  useCreateTableMutation,
} = restaurantApi;
