import MobileMenu from "../header/MobileMenu";
import LoginPopup from "../common/form/login/LoginPopup";
import BreadCrumb from "../dashboard-pages/BreadCrumb";
import CopyrightFooter from "../dashboard-pages/CopyrightFooter";
import CvUploader from "./components/CvUploader";
import MenuToggler from "../dashboard-pages/MenuToggler";
import DefaulHeader2 from "../header/DefaulHeader2";

const index = () => {
  return (
    <div className="page-wrapper dashboard ps-0">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader2 />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard mt-5 ">
        <div className="dashboard-outer">
          <BreadCrumb title="CV Manager!" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="cv-manager-widget ls-widget">
                <div className="widget-title">
                  <h4>Cv Manager</h4>
                </div>
                {/* End widget-title */}
                <div className="widget-content">
                  <CvUploader />
                </div>
                {/* End widget-content */}
              </div>
              {/* End Ls widget */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div >
    // End page-wrapper
  );
};

export default index;
