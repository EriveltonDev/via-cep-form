import { RemoteAddress } from "@/data/usecases/remote-address";
import { makeAxiosHttpClient } from "../http/axios-http.client-factory";

export function makeRemoteAddress(): RemoteAddress {
  return new RemoteAddress(makeAxiosHttpClient())
}