import dynamic from 'next/dynamic';
import jobs from '@/data/job-featured';
import LoginPopup from '@/components/common/form/login/LoginPopup';
import FooterDefault from '@/components/footer/common-footer';
import DefaulHeader2 from '@/components/header/DefaulHeader2';
import MobileMenu from '@/components/header/MobileMenu';
import RelatedJobs from '@/components/job-single-pages/related-jobs/RelatedJobs';
import SocialTwo from '@/components/job-single-pages/social/SocialTwo';
import JobDetailsDescriptions from '@/components/job-single-pages/shared-components/JobDetailsDescriptions';
import ApplyJobModalContent from '@/components/job-single-pages/shared-components/ApplyJobModalContent';
import Image from 'next/image';
//import JobSingleNew from '../../components/job-single-pages/job-single-new';
import JobSingleNew from '../../../../components/job-single-pages/job-single-new';
export const metadata = {
  title: 'Job Single Dyanmic V5 || Superio - Job Borad React NextJS Template',
  description: 'Superio - Job Borad React NextJS Template',
};

const JobSingleDynamicV1 = ({ params }) => {
  const id = params.id;
  const company = jobs.find((item) => item.id == id) || jobs[0];
  console.log('id in app: ', id);
  return <JobSingleNew id={id} />;
};

export default dynamic(() => Promise.resolve(JobSingleDynamicV1), {
  ssr: false,
});
