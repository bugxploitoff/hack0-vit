import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navBar'
import Loginsection from '@/components/loginSection'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <main>
      <div className='pt-16'>
        <Navbar />
      </div>
      <div className='pt-10 pb-10'>
        <Loginsection />
      </div>
    </main>
  )
}
