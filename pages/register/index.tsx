import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navBar'
import RegisterSection from '@/components/registerSection'

const inter = Inter({ subsets: ['latin'] })

export default function Register() {
  return (
    <main>
      <div className='pt-16'>
        <Navbar />
      </div>
      <div className='pt-10 pb-10'>
        <RegisterSection />
      </div>
    </main>
  )
}
