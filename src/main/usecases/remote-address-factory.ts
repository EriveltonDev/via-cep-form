import { RemoteAddress } from "@/data/usecases/remote-address";
import { makeAxiosHttpClient } from "../http/axios-http-client-factory";
import { makeFetchHttpClient } from "../http/fetch-http-client-factory";

export function makeRemoteAddress(): RemoteAddress {
  if (process.env.NEXT_PUBLIC_HTTP_CLIENT_PROVIDER === 'axios') {
    return new RemoteAddress(makeAxiosHttpClient())
  } else {
    return new RemoteAddress(makeFetchHttpClient())
  }
}