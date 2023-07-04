import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ZipCodeFormType, zipCodeSchema } from '@/validations/cep-form-validation'
import { Address } from '@/domain/usecases/address'
import { Dispatch, SetStateAction, useState } from 'react'
import { AddressModel } from '@/domain/models/address'

interface UseZipCodeFormParams {
  remoteAddress: Address
	setDialogIsOpen:  Dispatch<SetStateAction<boolean>>
}

export function useZipCodeForm({ remoteAddress, setDialogIsOpen }: UseZipCodeFormParams) {
	const [address, setAddress] = useState<AddressModel>()

	const { register, handleSubmit, formState: { errors } } = useForm<ZipCodeFormType>({
		resolver: zodResolver(zipCodeSchema)
	})

	async function onSubmit({ zipCode }: ZipCodeFormType) {
		try {
			const response = await remoteAddress.getByZipCode({ zipCode })
			if (response.erro) {
				setAddress(undefined)
				return setDialogIsOpen(true)
			}
			setAddress(response)
		} catch {
			setDialogIsOpen(true)
		}
	}
	return { register, handleSubmit, onSubmit, errors, address }
}