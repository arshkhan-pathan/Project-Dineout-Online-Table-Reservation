//
import baseApi from './baseApi';


export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/api/login/",
                method: "POST",
                body: { ...credentials },
            }),
        }),
        register: builder.mutation({
            query: (credentials) => ({
                url: '/api/restaurant/register/',
                method: 'POST',
                body: { ...credentials }
            })
        })
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
