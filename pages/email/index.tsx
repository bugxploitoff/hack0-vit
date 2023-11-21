import ErrorPages from '@/components/custom/error_page';
import Errorverification from '@/components/errorVerify';
import Goback from '@/components/goBack';
import Navbar from '@/components/navBar';
import Successverify from '@/components/successVerify';
import { useRouter } from 'next/router';


const RedirectPage = () => {
  const router = useRouter();
  const { type } = router.query;

  // Handle different types of queries
  const renderContent = () => {
    if (type === 'error') {
      return <Errorverification />;
    } else if (type === 'success') {
      return <Successverify />;
    } else {
      <ErrorPages />
   }
  };

  return (
    <main className="lg:pb-28 pb-96 overflow-x-hidden">
        <div className="pt-16">
            <Navbar />
        </div>
        <div className="pt-10 pb-10">
        {renderContent()}
        </div>
        <div className="pt-16">
            <Goback />
        </div>
    </main>
)
};

export default RedirectPage;
