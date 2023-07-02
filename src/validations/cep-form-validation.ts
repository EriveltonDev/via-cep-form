import * as z from 'zod'

export const zipCodeSchema = z.object({
	zipCode: z.string().min(9)
})

export type ZipCodeFormType = z.infer<typeof zipCodeSchema>