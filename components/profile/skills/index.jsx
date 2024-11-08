'use client';
import MobileMenu from '../../header/MobileMenu';
import LoginPopup from '../../common/form/login/LoginPopup';
import ProfileSidebar from '../../header/ProfileSidebar';
import BreadCrumb from '../BreadCrumb';
import CopyrightFooter from '../CopyrightFooter';
import DashboardCandidatesHeader from '../../header/DashboardCandidatesHeader';
import MenuToggler from '../MenuToggler';
import Select from 'react-select';

const index = () => {
  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DashboardCandidatesHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <ProfileSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="Skills" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget pt-5">
                <div className="tabs-box">
                  <form action="#" className="default-form">
                    <div className="row">
                      <div className="form-group col-lg-11 col-md-11 m-auto">
                        {/* <label>Skills</label> */}
                        <Select
                          //className={'skills-select'}
                          placeholder={'Skills'}
                          isMulti
                          name="Skills"
                          options={[
                            { value: 1, label: 'first' },
                            { value: 2, label: 'second' },
                            { value: 3, label: 'third' },
                          ]}
                          className="basic-multi-select"
                          classNamePrefix="select"
                        />
                      </div>

                      <div className="form-group col-lg-11 col-md-11 mx-auto my-4">
                        <button
                          type="submit"
                          className="theme-btn btn-style-one"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default index;
