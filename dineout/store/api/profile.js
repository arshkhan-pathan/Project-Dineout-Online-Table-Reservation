//
import baseApi from "./base";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => "/api/users/me",
      providesTags: ["User"],
    }),
    updateCurrentUser: builder.mutation({
      query: (data) => ({
        url: "/api/users/me",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    deleteBookings: builder.mutation({
      query: (id) => ({
        url: `/api/restaurant/bookings/${id}/cancel/`,
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useUpdateCurrentUserMutation,
  useDeleteBookingsMutation,
} = profileApi;
