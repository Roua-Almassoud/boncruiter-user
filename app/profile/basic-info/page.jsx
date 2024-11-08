import dynamic from 'next/dynamic';
import BasicIno from '@/components/profile/basic-info';

export const metadata = {
  title: 'My Profile || Superio - Job Borad React NextJS Template',
  description: 'Superio - Job Borad React NextJS Template',
};

const index = () => {
  return (
    <>
      <BasicIno />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
