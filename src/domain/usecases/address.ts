import { AddressModel } from "../models/address";

export interface Address {
  getByZipCode: (params: Address.Params) => Promise<AddressModel>
}

export namespace Address {
  export type Params = {
    zipCode: string
  }

  export type Model = AddressModel
}