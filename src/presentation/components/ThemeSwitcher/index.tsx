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
		<div>
			{isDark && (
				<FaSun onClick={() => setIsDark(false)} />
			)}

			{!isDark && (
				<FaMoon onClick={() => setIsDark(true)}/>
			)}

		</div>
	)
}