import { InputHTMLAttributes, forwardRef } from 'react'
import { RootProps, LabelProps, HelperTextProps } from './types'

function Root({ children }: RootProps) {
	return (
		<div>
			{children}
		</div>
	)
}

function Label({ children }: LabelProps) {
	return (
		<label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
			{children}
		</label>
	)
}

const Element = forwardRef(({ type = 'text', ...rest }: InputHTMLAttributes<HTMLInputElement>, ref)) {
	return (
		<input
			className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
			type={type}
			{...rest}
		/>
	)
}

function HelperText({ children }: HelperTextProps) {
	return (
		<div>
			{children}
		</div>
	)
}

export const Input = {
	Root,
	Label,
	Element,
	HelperText
}