//
import baseApi from "./base";

export const restaurantsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRestaurant: builder.query({
      query: ({ cuisines, tags, types }) =>
        `/api/restaurant/restaurants/?cuisines=${cuisines}&tags=${tags}&types=${types}`,
    }),
    getRestaurant: builder.query({
      query: (restaurantId) => `api/restaurant/restaurants/id/${restaurantId}/`,
    }),
    checkAvailibility: builder.query({
      query: ({ restaurantId, date, num_guest }) =>
        `/api/restaurant/availibility/?date=${date}&num_guests=${num_guest}&restaurant_id=${restaurantId}`,
    }),
  }),
});

export const {
  useGetAllRestaurantQuery,
  useGetRestaurantQuery,
  useCheckAvailibilityQuery,
} = restaurantsApi;
