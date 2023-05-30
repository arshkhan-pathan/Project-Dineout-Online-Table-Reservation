//
import baseApi from './base';


export const restaurantApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createRestaurant: builder.mutation({
            query: (credentials) => ({
                url: "/api/restaurant/restaurants/create/ ",
                method: "POST",
                body: credentials,
            }),
        }),
    }),
});

export const { useCreateRestaurantMutation } = restaurantApi;
