import { ThemeSwitcher } from '@/presentation/components/ThemeSwitcher'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Via CEP form',
	description: 'An simple page to implement React Hook Form, Clean Architecture'
}

export default function RootLayout({
	children
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="pt-BR" className='dark'>
			<body className={`${inter.className} dark:bg-zinc-800`}>
				<ThemeSwitcher/>
				{children}
			</body>
		</html>
	)
}
