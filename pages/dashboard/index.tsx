import { useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Navbar from '@/components/navBar';
import RegisterSection from '@/components/registerSection';

export default function Register() {
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
      <div className='pt-16'>
       <h1>dashboard</h1>
      </div>
    </main>
  );
}
