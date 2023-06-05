//
import baseApi from "./base";

export const restaurantsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRestaurant: builder.query({
      query: ({ cuisines, tags, types }) =>
        `/api/restaurant/restaurants/?cuisines=${cuisines}${tags}${types}`,
    }),
    getRestaurant: builder.query({
      query: (restaurantId) => `api/restaurant/restaurants/id/${restaurantId}/`,
    }),
  }),
});

export const { useGetAllRestaurantQuery, useGetRestaurantQuery } =
  restaurantsApi;
