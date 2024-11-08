import dynamic from 'next/dynamic';

import VerifyAccount from '@/components/pages-menu/verify-account';

export const metadata = {
  title: 'Verify Account || Superio - Job Borad React NextJS Template',
  description: 'Superio - Job Borad React NextJS Template',
};

const index = () => {
  return (
    <>
      <VerifyAccount />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
