import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { useAuth } from "../auth/useAuth";

export const useApi = () => {
  const { token, logout } = useAuth();

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC__API_URL,
  });

  api.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      if (
        config.url &&
        (config.url.includes("/auth/login") ||
          config.url.includes("/auth/register"))
      ) {
        return config;
      }
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        logout();
      }
      return Promise.reject(error);
    }
  );

  return api;
};
