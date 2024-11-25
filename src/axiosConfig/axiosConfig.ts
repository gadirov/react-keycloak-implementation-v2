import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import keycloak from "../Keycloak/keycloak";

// export const fetcher = (url: string) =>
//   axiosInstance.post(url, {}).then((res) => {
//     return res.data;
//   });

// export const multipleFetcher = <T>(...urls: string[]): Promise<T[]> => {
//   return Promise.all(urls.map(fetcher));
// };

// export const fetcherWithLang = (url: string, locale: string) =>
//   axiosInstance
//     .get(url, {
//       headers: {
//         "Accept-Language": locale,
//       },
//     })
//     .then((res) => {
//       return res.data;
//     });

// export const blobFetcher = (url: string) =>
//   axiosInstance
//     .get(url, {
//       responseType: "blob",
//     })
//     .then((res) => res.data);

const axiosInstance = axios.create({
  baseURL: `/`,
});

export const get = <T>(url: string, config?: AxiosRequestConfig) =>
  axiosInstance.get(url, config).then((res) => res.data as T);

export const post = <T>(url: string, data: T, config?: AxiosRequestConfig) =>
  axiosInstance.post(url, data, config).then((res) => res.data as T);

export const put = <T>(url: string, data: T, config?: AxiosRequestConfig) =>
  axiosInstance.put(url, data, config).then((res) => res.data);

export const deleteRequest = (url: string) =>
  axiosInstance.delete(url).then((res) => res.data);

axiosInstance.interceptors.request.use(
  (config) => {
    const cb = () => {
      config.headers = config.headers ?? {};
      // config.headers.authorization = `Bearer ${keycloak.token}`;
      config.headers.authorization = `Bearer ${Cookies.get("token")}`;
      return Promise.resolve(config);
    };
    return keycloak.updateToken(5).then(cb).catch(keycloak.login);
  },
  (error) => Promise.reject(error)
);
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    //TODO tobe implemented
    // const response = error.response.data;
    if (error.response?.status === 401) {
      Cookies.remove("token");
      return;
    }
    //  toast.error(response.errorDetail, {
    //    position: "top-right",
    //    autoClose: 5000,
    //    hideProgressBar: true,
    //    theme: "colored",
    //  });

    //  return Promise.reject(response);
    return Promise.reject(error);
  }
);

export default axiosInstance;
