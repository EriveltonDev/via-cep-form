'use client'

import { Home } from "@/presentation/pages/home";
import { makeRemoteAddress } from "../usecases/remote-address-factory";

export function MakeHome() {
  return (
    <Home remoteAddress={makeRemoteAddress()} />
  )
}