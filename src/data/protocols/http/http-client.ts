import { AxiosRequestConfig } from "axios";

export interface IHttpClient {
  get<T>(url: string, config?: RequestInit | AxiosRequestConfig): Promise<T>;
  post<T>(url: string, data?: any, config?: RequestInit | AxiosRequestConfig): Promise<T>;
  put<T>(url: string, data?: any, config?: RequestInit | AxiosRequestConfig): Promise<T>;
  delete<T>(url: string, config?: RequestInit | AxiosRequestConfig): Promise<T>;
  patch<T>(url: string, data?: any, config?: RequestInit | AxiosRequestConfig): Promise<T>;
  head<T>(url: string, config?: RequestInit | AxiosRequestConfig): Promise<T>;
}
