import axiosRetry from 'axios-retry';
import { HttpClient } from 'generated/http-client';
import { LmsApiClient } from 'clients/lms-api-client';
import { AxiosRequestHeaders } from 'axios';
import ExtendedHttpClient from 'clients/ExtendedHttpClient';

// const httpClient = new HttpClient({
//   baseURL: baseAPIUrl,
//   paramsSerializer: (params) => {
//     if (params instanceof URLSearchParams) {
//       return params.toString();
//     }
//
//     const queryString = Object.entries(params)
//       .map(([key, value]) => {
//         if (Array.isArray(value)) {
//           return value.map((val) => `${key}=${encodeURIComponent(val)}`).join('&');
//         }
//         return `${key}=${encodeURIComponent(value as string)}`;
//       })
//       .join('&');
//
//     return queryString;
//   },
// });
//
// axiosRetry(httpClient.instance, { retries: 3 });
//
// httpClient.instance.interceptors.request.use(async (request) => {
//   const { store } = await import('store/store');
//   const state = store.getState();
//   const token = authTokenSelector(state);
//
//   const headers = {
//     ...request.headers,
//     [HeaderKeys.Authorization]: `Bearer ${token}`,
//     [HeaderKeys.Accept]: '*/*',
//   } as AxiosRequestHeaders;
//
//   request.headers = headers;
//
//   return request;
// });
//
// httpClient.instance.interceptors.response.use(
//   async (response) => {
//     return response;
//   },
//   async (error) => {
//     if (error.response.status === 401) {
//       await signOut();
//       const { store } = await import('store');
//       store.dispatch(dropUser());
//       store.dispatch({ type: 'logout/clear-state' });
//       window.location.assign('/');
//     } else {
//       return Promise.reject(error);
//     }
//   },
// );


const httpClient = new ExtendedHttpClient('' );


export const lmsApiClient = new LmsApiClient(httpClient);
