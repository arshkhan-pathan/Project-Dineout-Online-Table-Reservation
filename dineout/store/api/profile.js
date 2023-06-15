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
  }),
});

export const { useGetCurrentUserQuery, useUpdateCurrentUserMutation } =
  profileApi;
