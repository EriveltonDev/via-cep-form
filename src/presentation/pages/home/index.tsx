'use client'

import { Address } from '@/domain/usecases/address'
import { Input } from '@/presentation/components/Input'
import { useState } from 'react'

interface HomeProps {
  remoteAddress: Address
}

export function Home({ remoteAddress }: HomeProps) {
	const [cep, setCep] = useState('')

	async function getZipCode() {
		try {
			const response = await remoteAddress.getByZipCode({ zipCode: cep })
			alert(JSON.stringify(response))
		} catch (error) {
			alert(error)
		}
	}

	return (
		<>
			<Input.Root>
				<Input.Label>
					CEP:
				</Input.Label>
				<Input.Element/>

				<Input.HelperText>

				</Input.HelperText>
			</Input.Root>

			<button
				className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
				onClick={getZipCode}
			>
				Buscar
			</button>

		</>
	)
}