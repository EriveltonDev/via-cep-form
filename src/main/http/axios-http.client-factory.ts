import { AxiosHttpClient } from "@/infra/axios-http-client";
import { makeApiUrl } from "./api-url-factory";


export function makeAxiosHttpClient(): AxiosHttpClient {
  return new AxiosHttpClient(makeApiUrl('/ws'))
} 
