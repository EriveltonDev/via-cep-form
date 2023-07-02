import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ZipCodeFormType, zipCodeSchema } from '@/validations/cep-form-validation'
import { Address } from '@/domain/usecases/address'

interface UseZipCodeFormParams {
  remoteAddress: Address
}

export function useZipCodeForm({ remoteAddress }: UseZipCodeFormParams) {
	const { register, handleSubmit } = useForm<ZipCodeFormType>({
		resolver: zodResolver(zipCodeSchema)
	})

	async function onSubmit({ zipCode }: ZipCodeFormType) {
		try {
			const response = await remoteAddress.getByZipCode({ zipCode })
			alert(JSON.stringify(response))
		} catch (error) {
			alert(error)
		}
	}
	return { register, handleSubmit, onSubmit }
}