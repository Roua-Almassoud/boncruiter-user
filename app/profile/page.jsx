import dynamic from 'next/dynamic';
import ProfileHome from '@/components/profile/basic-info';

export const metadata = {
  title: 'Candidates Dashboard || Superio - Job Borad React NextJS Template',
  description: 'Superio - Job Borad React NextJS Template',
};

const index = () => {
  return (
    <>
      <ProfileHome />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
