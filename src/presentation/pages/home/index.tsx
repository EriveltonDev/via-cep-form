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
      const response = await remoteAddress.getByZipCode({zipCode: cep})
      alert(JSON.stringify(response))
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <input onChange={(e) => setCep(e.target.value)}/>
      <button onClick={getZipCode}>Buscar</button>
    </>
  )
}