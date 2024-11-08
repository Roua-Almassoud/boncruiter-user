import dynamic from 'next/dynamic';
import Education from '@/components/profile/education';

export const metadata = {
  title: 'My Profile || Superio - Job Borad React NextJS Template',
  description: 'Superio - Job Borad React NextJS Template',
};

const index = () => {
  return (
    <>
      <Education />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
