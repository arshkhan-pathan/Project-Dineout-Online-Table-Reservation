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
        getTags: builder.query({
            query: () => '/api/mod/tags',
        }),
        getCuisines: builder.query({
            query: () => '/api/mod/cuisines',
        }),
        getTypes: builder.query({
            query: () => '/api/mod/types',
        }),
    }),
});

export const {
    useCreateRestaurantMutation,
    useGetTagsQuery,
    useGetCuisinesQuery,
    useGetTypesQuery
} = restaurantApi;
