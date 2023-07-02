'use client'

import { Address } from '@/domain/usecases/address'
import { Input } from '@/presentation/components/Input'
import { useZipCodeForm } from '@/presentation/hooks/useZipCodeForm'

interface HomeProps {
  remoteAddress: Address
}

export function Home({ remoteAddress }: HomeProps) {
	const { handleSubmit, onSubmit, register } = useZipCodeForm({ remoteAddress })

	return (
		<section className='max-w-md mx-auto'>
			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 px-5 pt-10'>
				<Input.Root>
					<Input.Label>
						CEP:
					</Input.Label>
					<Input.ElementWithMask
						mask='99999-999'
						{...register('zipCode')}
					/>

					<Input.HelperText>

					</Input.HelperText>
				</Input.Root>

				<button className='bg-transparent hover:bg-zinc-700 hover:text-white hover:border-transparent text-zinc-800 font-semibold py-2 px-4 border border-zinc-800 rounded dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-800'>
					Buscar
				</button>

			</form>
		</section>
	)
}