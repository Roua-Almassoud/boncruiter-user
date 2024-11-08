import dynamic from 'next/dynamic';
import Certificates from '@/components/profile/certificates';

export const metadata = {
  title: 'My Profile || Superio - Job Borad React NextJS Template',
  description: 'Superio - Job Borad React NextJS Template',
};

const index = () => {
  return (
    <>
      <Certificates />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
