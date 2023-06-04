//
import baseApi from "./base";

export const restaurantsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllRestaurant: builder.query({
            query: ({ cuisines, tags, types}) => `/api/restaurant/restaurants/?cuisines=${cuisines}${tags}${types}`,
        }),
    }),
});

export const {
    useGetAllRestaurantQuery,
} = restaurantsApi;