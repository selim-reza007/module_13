import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=''>
          <ul className='flex gap-1 p-8 bg-[#20b9c2] justify-center'>
            <li><Link className='p-2 bg-red-200 rounded-lg' href={'/'}>Home</Link></li>
            <li ><Link className='p-2 bg-red-200 rounded-lg' href={'/cookie'}>Cookie</Link></li>
            <li ><Link className='p-2 bg-red-200 rounded-lg' href={'/jsonreturn'}>JSON Return</Link></li>
            <li ><Link className='p-2 bg-red-200 rounded-lg' href={'/headermodi'}>Header modification</Link></li>
          </ul>
        </div>
        <div className='min-h-[570px] font-bold text-center pt-10 border'>
          {children}
        </div>
      </body>
    </html>
  )
}
