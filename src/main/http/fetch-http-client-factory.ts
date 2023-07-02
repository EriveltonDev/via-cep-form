import { FetchHttpClient } from "@/infra/fetch-http-client";
import { makeApiUrl } from "./api-url-factory";


export function makeFetchHttpClient(): FetchHttpClient {
  return new FetchHttpClient(makeApiUrl('/ws'))
} 
