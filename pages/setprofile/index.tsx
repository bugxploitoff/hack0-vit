import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google'
import Setprofile from '@/components/setprofileSection'
import Innavbar from '@/components/innavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const { data: session, status } = useSession();
    const router = useRouter();
  
  
    if (session && session.user && session.user.email) {
    }
  
    // Redirect to login page if there's no session
    if (status === 'loading') {
      return <div>Loading...</div>;
    }
  
    if (!session) {
      router.push('/login');
      return null; // Or you can render a message here while redirecting
    }
  return (
    <main>
      <div >
        <Innavbar />
      </div>
      <div className='pt-10 pb-5'>
        <Setprofile />
      </div>
    </main>
  )
}
