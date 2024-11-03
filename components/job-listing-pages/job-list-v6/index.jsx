'use client';
import FooterDefault from '../../../components/footer/common-footer';
import LoginPopup from '../../common/form/login/LoginPopup';
import DefaulHeader2 from '../../header/DefaulHeader2';
import MobileMenu from '../../header/MobileMenu';
import FilterJobBox from './FilterJobBox';
import JobSearchForm from './JobSearchForm';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Api from '../../../api/Api';
import Utils from '../../../components/utils/utils';

const index = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  const [loading, setLoading] = useState(true);
  const [searchForm, setSearchForm] = useState({
    title: search,
    companyId: '',
    skills: '',
  });
  const [jobsList, setJobsList] = useState([]);
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const getSkills = async () => {
    const response = await Api.call({}, `/user/available-skills`, 'get', '');
    if (response.data) {
      let availableSkills = response.data.data.list.map((skill) => {
        return { id: skill.id, name: skill.name };
      });

      setSkills(availableSkills);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  const getJobs = async () => {
    const skillsSelected =
      selectedSkills.length > 0 ? selectedSkills : searchForm?.skills || [];
    const title = searchForm?.title || '';
    const skills =
      skillsSelected?.map((skill) => {
        return skill.id;
      }) || '';
    const location = searchForm?.location || '';
    let link = '/job?';
    if (title) link = link + 'title=' + title + '&';
    if (location) link = link + 'location=' + location + '&';
    if (skills.length > 0) link = link + 'skills=' + skills.join(',') + '&';
    if (currentPage > 0) link = link + 'page=' + currentPage + '&';
    const response = await Api.call({}, link, 'get', '');
    if (response.data.code === '200') {
      let jobs = response.data.data.jobs;
      const pages = response.data.data.pages;
      setJobsList(jobs);
      setPages(pages);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    //getJobs();
    //getSkills();
  }, []);

  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader2 />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      {/* End MobileMenu */}

      <section className="page-title style-three">
        <div className="auto-container">
          <JobSearchForm />
          {/* <!-- Job Search Form --> */}
        </div>
      </section>
      {/* <!--End Page Title--> */}

      <section className="ls-section style-three">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-12">
              <div className="ls-outer">
                <FilterJobBox />
              </div>
            </div>
            {/* <!-- End Content Column --> */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
      {/* <!--End Listing Page Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
