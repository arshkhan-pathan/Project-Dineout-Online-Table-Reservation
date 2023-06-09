//
import baseApi from "./base";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/login/",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    restaurantRegister: builder.mutation({
      query: (credentials) => ({
        url: "/api/managers/register/",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    restaurantLogin: builder.mutation({
      query: (credentials) => ({
        url: "/api/managers/login/",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    adminLogin: builder.mutation({
      query: (credentials) => ({
        url: "/api/admin/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRestaurantRegisterMutation,
  useRestaurantLoginMutation,
  useAdminLoginMutation,
} = authApi;
