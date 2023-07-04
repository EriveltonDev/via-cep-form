import { InputHTMLAttributes, forwardRef } from 'react'
import { RootProps, LabelProps, HelperTextProps, ElementWithMaskProps } from './types'
import InputMask from 'react-input-mask'

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

const Element = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({ type = 'text', ...rest }, ref) => {
	return (
		<input
			className='outline-none border border-zinc-800 text-gray-900 text-sm rounded-lg focus:ring-zinc-800 focus:border-zinc-800 block w-full p-2.5 dark:bg-zinc-800 dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white'
			ref={ref}
			type={type}
			{...rest}
		/>
	)
})

const ElementWithMask = forwardRef<HTMLInputElement, ElementWithMaskProps>(({ type = 'text', mask ,...rest }, ref) => {
	return (
		<InputMask
			mask={mask}
			className='outline-none border border-zinc-800 text-gray-900 text-sm rounded-lg focus:ring-zinc-800 focus:border-zinc-800 block w-full p-2.5 dark:bg-zinc-800 dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white'
			inputRef={ref}
			type={type}
			{...rest}
		/>
	)
})

function HelperText({ children }: HelperTextProps) {
	return (
		<div className='mt-1 text-red-500'>
			{children}
		</div>
	)
}

export const Input = {
	Root,
	Label,
	Element,
	HelperText,
	ElementWithMask
}