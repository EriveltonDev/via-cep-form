'use client'

import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export function ThemeSwitcher() {
	const [isDark, setIsDark] = useState(true)

	useEffect(() => {
		if (isDark === true) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [isDark])

	return (
		<div className='fixed right-4 top-4'>
			{isDark && (
				<FaSun
					className='text-white hover:text-zinc-200'
					size={25}
					cursor={'pointer'}
					onClick={() => setIsDark(false)}
				/>
			)}

			{!isDark && (
				<FaMoon
					className='text-zinc-800 hover:text-zinc-600'
					size={25}
					cursor={'pointer'}
					onClick={() => setIsDark(true)}
				/>
			)}

		</div>
	)
}