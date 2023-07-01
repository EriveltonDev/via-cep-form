import { Address } from "@/domain/usecases/address";
import { AxiosHttpClient } from "@/infra/axios-http-client";

export class RemoteAddress implements Address {
  constructor (
    private readonly httpClient: AxiosHttpClient
  ) {}
  
  async getByZipCode ({zipCode}: Address.Params): Promise<Address.Model> {
    const httpResponse = await this.httpClient.get<Address.Model>(`/${zipCode}/json`)
    return httpResponse
  }
}