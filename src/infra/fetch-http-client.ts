import { IHttpClient } from "@/data/protocols/http";

export class FetchHttpClient implements IHttpClient {
  private readonly baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private buildUrl(url: string): string {
    return this.baseURL + url;
  }

  public async get<T>(url: string, config?: RequestInit): Promise<T> {
    const response = await fetch(this.buildUrl(url), config);
    const data = await response.json();
    return data as T;
  }

  public async post<T>(url: string, data?: any, config?: RequestInit): Promise<T> {
    const requestConfig: RequestInit = {
      method: 'POST',
      body: JSON.stringify(data),
      ...config,
    };

    const response = await fetch(this.buildUrl(url), requestConfig);
    const responseData = await response.json();
    return responseData as T;
  }

  public async put<T>(url: string, data?: any, config?: RequestInit): Promise<T> {
    const requestConfig: RequestInit = {
      method: 'PUT',
      body: JSON.stringify(data),
      ...config,
    };

    const response = await fetch(this.buildUrl(url), requestConfig);
    const responseData = await response.json();
    return responseData as T;
  }

  public async delete<T>(url: string, config?: RequestInit): Promise<T> {
    const requestConfig: RequestInit = {
      method: 'DELETE',
      ...config,
    };

    const response = await fetch(this.buildUrl(url), requestConfig);
    const responseData = await response.json();
    return responseData as T;
  }

  public async patch<T>(url: string, data?: any, config?: RequestInit): Promise<T> {
    const requestConfig: RequestInit = {
      method: 'PATCH',
      body: JSON.stringify(data),
      ...config,
    };

    const response = await fetch(this.buildUrl(url), requestConfig);
    const responseData = await response.json();
    return responseData as T;
  }

  public async head<T>(url: string, config?: RequestInit): Promise<T> {
    const requestConfig: RequestInit = {
      method: 'HEAD',
      ...config,
    };

    const response = await fetch(this.buildUrl(url), requestConfig);
    const responseData = await response.json();
    return responseData as T;
  }
}
