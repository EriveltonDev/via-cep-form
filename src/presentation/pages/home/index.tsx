'use client'

import { Address } from "@/domain/usecases/address"
import { useState } from "react"

interface HomeProps {
  remoteAddress: Address
}

export function Home({remoteAddress}: HomeProps) {
  const [cep, setCep] = useState('')

  async function getZipCode() {
    try {
      await remoteAddress.getByZipCode({zipCode: cep})
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <input onChange={(e) => setCep(e.target.value)}/>
      <button onClick={getZipCode}>Buscar</button>
    </>
  )
}