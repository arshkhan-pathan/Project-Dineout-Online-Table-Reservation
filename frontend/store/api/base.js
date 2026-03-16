import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {logOut, setCredentials} from "@/store/slices/auth";

// base query
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  // credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.access;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// Define a custom base query with token refreshing logic
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  // If token is expired or returns 401 unauthorized
  if (result?.error?.status === 401) {
    // Try to refresh the token
    const refreshToken = api.getState().auth.refresh;
    if (refreshToken) {
      // Send refresh token request
      const refreshResult = await baseQuery(
        {
          url: '/api/token/refresh/',  // Your refresh token endpoint
          method: 'POST',
          body: { refresh: refreshToken },
        },
        api,
        extraOptions
      );
      if (refreshResult?.data) {
        // Store the new access token
        api.dispatch(setCredentials(refreshResult?.data))

        // Retry the original query with the new token
        result = await baseQuery(args, api, extraOptions);
      } else {
        // Logout user or handle token refresh failure
        api.dispatch(logOut())
      }
    }
  }

  return result;
};

const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
  tagTypes: [
    "Tables",
    "Rules",
    "RestaurantData",
    "TagsTypesCuisnes",
    "PendingRestaurant",
    "Featured",
    "Restaurant",
    "User",
    "Bookings",
  ],
});

export default baseApi;
