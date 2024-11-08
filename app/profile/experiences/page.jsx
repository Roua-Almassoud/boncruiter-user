import dynamic from 'next/dynamic';
import Experiences from '@/components/profile/experiences';

export const metadata = {
  title: 'My Profile || Superio - Job Borad React NextJS Template',
  description: 'Superio - Job Borad React NextJS Template',
};

const index = () => {
  return (
    <>
      <Experiences />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
