import * as z from 'zod'

export const zipCodeSchema = z.object({
	zipCode: z.string()
		.min(9, {
			message: 'o CEP deve conter 8 dígitos'
		})
		.refine((zipCode) => zipCode.replaceAll('_', '').length === 9, {
			message: 'o CEP deve conter 8 dígitos'
		})
})

export type ZipCodeFormType = z.infer<typeof zipCodeSchema>