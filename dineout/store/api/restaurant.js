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
    getRestaurantBookingStats: builder.query({
      query: (id) => `api/restaurant/restaurants/${id}/bookings/stats`,
    }),
    getRestaurantBookingsData: builder.query({
      query: (id) => `api/restaurant/restaurants/${id}/bookings/data`,
    }),
    getRestaurantById: builder.query({
      query: (id) => `api/restaurant/restaurants/${id}`,
    }),
    createTable: builder.mutation({
      query: ({ id, tableData }) => ({
        url: `/api/restaurant/restaurants/${id}/tables/`,
        method: "POST",
        body: tableData,
        providesTags: ["Tables"],
      }),
    }),
    getRestaurantTable: builder.query({
      query: (id) => `/api/restaurant/restaurants/${id}/tables/all`,
      providesTags: ["Tables"],
    }),
    getReviews: builder.query({
      query: ({ id, pageNumber, selectedFilters }) =>
        `/api/restaurant/restaurants/${id}/reviews?page=${pageNumber}&ordering=${selectedFilters}`,
    }),
    invalidatesTags: ["Tables"],
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
  useGetReviewsQuery,
  useGetRestaurantBookingStatsQuery,
  useGetRestaurantBookingsDataQuery,
  useGetRestaurantTableQuery,
} = restaurantApi;
