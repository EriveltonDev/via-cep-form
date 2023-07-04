'use client'

import { Address } from '@/domain/usecases/address'
import { Input } from '@/presentation/components/Input'
import { useZipCodeForm } from '@/presentation/hooks/useZipCodeForm'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { useState } from 'react'

interface HomeProps {
  remoteAddress: Address
}

export function Home({ remoteAddress }: HomeProps) {
	const [dialogIsOpen, setDialogIsOpen] = useState(false)
	const { handleSubmit, onSubmit, register, errors, address } = useZipCodeForm({ remoteAddress, setDialogIsOpen })

	return (
		<section className='max-w-md mx-auto mt-10 px-5'>
			<h1 className='text-center text-2xl dark:text-white text-zinc-800'>
					Busca CEP
			</h1>

			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
				<Input.Root>
					<Input.Label>
						CEP:
					</Input.Label>
					<Input.ElementWithMask
						mask='99999-999'
						{...register('zipCode')}
					/>

					{errors.zipCode && (
						<Input.HelperText>
							{errors.zipCode.message}
						</Input.HelperText>
					)}
				</Input.Root>

				<button className='bg-transparent hover:bg-zinc-700 hover:text-white hover:border-transparent text-zinc-800 font-semibold py-2 px-4 border border-zinc-800 rounded dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-800'>
					Buscar
				</button>
			</form>

			{address && address.erro !== true && (
				<div className='mt-10 flex flex-col gap-3'>
					<h1 className='text-center text-2xl dark:text-white text-zinc-800'>
					Endereço
					</h1>

					{address.logradouro && (
						<Input.Root>
							<Input.Label>
							Logradouro:
							</Input.Label>
							<Input.Element
								value={address.logradouro}
							/>
						</Input.Root>
					)}

					{address.complemento && (
						<Input.Root>
							<Input.Label>
							Complemento:
							</Input.Label>
							<Input.Element
								value={address.complemento}
							/>
						</Input.Root>
					)}

					{address.bairro && (
						<Input.Root>
							<Input.Label>
							Bairro:
							</Input.Label>
							<Input.Element
								value={address.bairro}
							/>
						</Input.Root>
					)}

					{address.localidade && (
						<Input.Root>
							<Input.Label>
							Localidade:
							</Input.Label>
							<Input.Element
								value={address.localidade}
							/>
						</Input.Root>
					)}

					{address.uf && (
						<Input.Root>
							<Input.Label>
							UF:
							</Input.Label>
							<Input.Element
								value={address.uf}
							/>
						</Input.Root>
					)}
				</div>
			)}

			<AlertDialog.Root open={dialogIsOpen} onOpenChange={(open) => setDialogIsOpen(open)}>
				<AlertDialog.Trigger />
				<AlertDialog.Portal>
					<AlertDialog.Overlay className='fixed inset-0' />
					<AlertDialog.Content className='dark:bg-white dark:text-zinc-800 text-white bg-zinc-800 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md p-5 flex justify-center flex-col gap-3'>
						<AlertDialog.Title className='text-xl text-center'>
							CEP inexistente ou inválido
						</AlertDialog.Title>

						<AlertDialog.Description className='text-center'>
							O CEP que você digitou é inválido ou não existe no banco de dados do Via CEP
						</AlertDialog.Description>
						<AlertDialog.Cancel>
							<button className='font-semibold py-2 px-4 border border-white dark:border-zinc-800 rounded'>OK</button>
						</AlertDialog.Cancel>
					</AlertDialog.Content>
				</AlertDialog.Portal>
			</AlertDialog.Root>
		</section>
	)
}