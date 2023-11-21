import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navBar'
import HomeSection from '@/components/homeSection'
import Footbar from '@/components/footBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div >
        <Navbar />
      </div>
      <div className='pt-10 pb-10'>
        <HomeSection />
      </div>
      <div className='pt-05'>
        <Footbar />
      </div>
    </main>
  )
}
