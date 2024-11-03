import CallToAction10 from '../call-to-action/CallToAction10';
import Hero16 from '../hero/hero-16';
import JobFeatured11 from '../job-featured/JobFeatured11';
import Footer from './Footer';
//import Header from "./Header";
import DefaulHeader2 from '../header/DefaulHeader2';
import Block8 from '../block/Block8';
import Candidates from '../candidates/Candidates';
import Testimonial from '../testimonial/Testimonial';
import LoginRegBanner from '../block/LoginRegBanner';
import LoginPopup from '../common/form/login/LoginPopup';
import MobileMenu from '../header/MobileMenu';
import CvUploadPopup from '../cv-manager/components/CvUploadPopup';


const index = () => {
  return (
    <>
      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader2 />
      {/* <!--End Main Header --> */}
      <CvUploadPopup />

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero16 />
      {/* End Hero Section */}
    
      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
