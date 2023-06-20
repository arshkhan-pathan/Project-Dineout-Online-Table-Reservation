// packages
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// base query
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000",
  // credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.access;
    console.log(token);

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseApi = createApi({
  baseQuery,
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
