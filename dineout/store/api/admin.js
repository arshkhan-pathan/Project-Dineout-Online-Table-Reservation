//
import baseApi from "./base";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStats: builder.query({
      query: () => "/api/mod/stats",
    }),
  }),
});

export const { useGetStatsQuery } = adminApi;
