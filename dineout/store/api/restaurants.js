//
import baseApi from "./base";

export const restaurantsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRestaurant: builder.query({
      query: ({ selectedFilters, page, search }) => {
        let queryUrl = `/api/restaurant/restaurants/?cuisines=${selectedFilters?.cuisines}&tags=${selectedFilters?.tags}&types=${selectedFilters?.types}&locality=${selectedFilters?.location}&page=${page}`;
        if (search) {
          queryUrl = `/api/restaurant/restaurants?search=${search}`;
        }
        return queryUrl;
      },
    }),
    getRestaurant: builder.query({
      query: (restaurantId) => `api/restaurant/restaurants/id/${restaurantId}/`,
    }),
    getFeaturedRestaurant: builder.query({
      query: ({ selectedFilters }) =>
        `api/restaurant/restaurants/featured?locality=${selectedFilters?.location}`,
    }),
    checkAvailibility: builder.query({
      query: ({ restaurantId, date, num_guest }) =>
        `/api/restaurant/availibility/?date=${date}&num_guests=${num_guest}&restaurant_id=${restaurantId}`,
    }),
    getUserProfile: builder.query({
      query: (userId) => `/api/restaurant/users/${userId}/`,
    }),
  }),
});

export const {
  useGetAllRestaurantQuery,
  useGetRestaurantQuery,
  useCheckAvailibilityQuery,
  useGetUserProfileQuery,
  useGetFeaturedRestaurantQuery,
} = restaurantsApi;
