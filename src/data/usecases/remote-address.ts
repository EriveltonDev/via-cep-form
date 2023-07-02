import { Address } from "@/domain/usecases/address";
import { IHttpClient } from "../protocols/http";

export class RemoteAddress implements Address {
  constructor (
    private readonly httpClient: IHttpClient
  ) {}
  
  async getByZipCode ({zipCode}: Address.Params): Promise<Address.Model> {
    const httpResponse = await this.httpClient.get<Address.Model>(`/${zipCode}/json`)
    return httpResponse
  }
}