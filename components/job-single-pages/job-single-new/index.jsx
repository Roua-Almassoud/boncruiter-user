'use client';
import React, { useState, useEffect } from 'react';
import MobileMenu from '../../header/MobileMenu';
import LoginPopup from '../../common/form/login/LoginPopup';
import DefaulHeader2 from '../../header/DefaulHeader2';
import ApplyJobModalContent from '../shared-components/ApplyJobModalContent';
import JobDetailsDescriptions from '../shared-components/JobDetailsDescriptions';
import FooterDefault from '../../footer/common-footer';
import Image from 'next/image';
import Api from '../../../api/Api';
import {useRouter} from 'next/navigation'
const index = ({ id }) => {
  const router = useRouter()
  const [loading, setLoading] = useState({});
  const [job, setJob] = useState({});
  const calculate = (item) => {
    const currentDate = new Date();
    const postDate = new Date(item.createdAt);
    const differenceInTime = currentDate.getTime() - postDate.getTime();
    let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };
  const getJob = async () => {
    setLoading(true);
    const response = await Api.call({}, `/job/${id}`, 'get', '');
    console.log('response: ', response);
    if (response.data) {
      const jobDetails = response.data?.data;
      setJob(jobDetails);
    } else {
      setLoading(false);
    }
  };
  useEffect(() => {
    getJob();
  }, []);
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader2 />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      {/* <!-- Job Detail Section --> */}
      <section className="job-detail-section style-three">
        <div className="upper-box">
          <div className="auto-container">
            <div className="job-block-seven style-three">
              <div className="inner-box">
                <div className="content">
                  <span className="company-logo">
                    <Image
                      width={100}
                      height={98}
                      src={'/images/resource/company-logo/1-1.png'}
                      alt="logo"
                    />
                  </span>
                  <h4>{job?.title}</h4>

                  <ul className="job-info">
                    <li>
                      <span className="icon flaticon-briefcase"></span>
                      {job?.Company?.name}
                    </li>
                    {/* compnay info */}
                    <li>
                      <span className="icon flaticon-map-locator"></span>
                      {job?.location}
                    </li>
                    {/* location info */}
                    <li>
                      <span className="icon flaticon-clock-3"></span>{' '}
                      {`${calculate(job)} day ago`}
                    </li>
                    {/* time info */}
                    <li>
                      <span className="icon flaticon-money"></span>{' '}
                      {job.salary
                        ? job.salary
                        : `$${job.salaryMin} - $${job.salaryMax}`}
                    </li>
                    {/* salary info */}
                  </ul>
                  {/* End .job-info */}

                  {/* <ul className="job-other-info">
                    {company?.jobType?.map((val, i) => (
                      <li key={i} className={`${val.styleClass}`}>
                        {val.type}
                      </li>
                    ))}
                  </ul> */}
                  {/* End .job-other-info */}
                </div>
                {/* End .content */}


                <div className="btn-box">
                  <a
                    href="#"
                    className={`theme-btn btn-style-one ${
                      job?.isApplied ? 'applied-disable' : ''
                    }`}
                    data-bs-toggle="modal"
                    data-bs-target="#applyJobModal"
                  >
                    {job?.isApplied ? 'Applied' : 'Apply For Job'}
                  </a>
                  <button className="bookmark-btn">
                    <i className="flaticon-bookmark"></i>
                  </button>
                </div>
                {/* End apply for job btn */}

                {/* <!-- Modal --> */}
                
                <div
                  className="modal fade"
                  id="applyJobModal"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="apply-modal-content modal-content">
                      <div className="text-center">
                        <h3 className="title">Apply for this job</h3>
                        <button
                          type="button"
                          className="closed-modal"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      {/* End modal-header */}

                      <ApplyJobModalContent jobId={job?.id} />
                      {/* End PrivateMessageBox */}
                    </div>
                    {/* End .send-private-message-wrapper */}
                  </div>
                </div>:
                r
                {/* End .modal */}
              </div>
            </div>
            {/* <!-- Job Block --> */}
          </div>
        </div>
        {/* <!-- Upper Box --> */}

        <div className="job-detail-outer">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-8 offset-2 col-md-12 col-sm-12">
                <JobDetailsDescriptions job={job} />
                {/* End jobdetails content */}

                {/* <div className="other-options">
                      <div className="social-share">
                        <h5>Share this job</h5>
                        <SocialTwo />
                      </div>
                    </div> */}
                {/* <!-- Other Options --> */}

                {/* <div className="related-jobs">
                      <div className="title-box">
                        <h3>Related Jobs</h3>
                        <div className="text">
                          2020 jobs live - 293 added today.
                        </div>
                      </div>
                      <RelatedJobs />
                    </div> */}
                {/* <!-- Related Jobs --> */}
              </div>
              {/* End .content-column */}
            </div>
          </div>
        </div>
        {/* <!-- job-detail-outer--> */}
      </section>
      {/* <!-- End Job Detail Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
