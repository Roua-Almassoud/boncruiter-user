'use client';
import React, { useState, useEffect } from 'react';
import MobileMenu from '../../header/MobileMenu';
import LoginPopup from '../../common/form/login/LoginPopup';
import ProfileSidebar from '../../header/ProfileSidebar';
import BreadCrumb from '../BreadCrumb';
import CopyrightFooter from '../CopyrightFooter';
import DashboardCandidatesHeader from '../../header/DashboardCandidatesHeader';
import MenuToggler from '../MenuToggler';
import Select from 'react-select';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import FormComponent from '../FormComponent';
import Utils from '../../utils/utils';
import Api from '../../../api/Api';
import { yearList, monthList } from '../../../data/education';

const index = () => {
  const experiencesList = [
    {
      title: 'Front End & AI Developer',
      company: 'Corseat',
      summary:
        'Leading the Most Powerful Urban and Electronic Training Courses, Successfully converted whole project from python 2 to 3.8.0, Scripted unique test plans, test scripts and processes to remove previously known redundancy by 40% and ensured predictable outcomes',
      location: 'KSA - Riyadh',
      remote: false,
      fullTime: true,
      startYear: 2023,
      startMonth: 7,
      endYear: 2024,
      endMonth: 6,
    },
    {
      title: 'Front End Developer',
      company: 'Axtro-Soft',
      summary:
        'Software services & mobile applications, Recommendation System using Amplitude and Amazon Personalize System Testing and Debugging: Designed and developed reusable software components which used in 3 different project with reducing development effort by 50%',
      location: 'Syria - Damascus',
      remote: false,
      fullTime: true,
      startYear: 2022,
      startMonth: 5,
      endYear: 2023,
      endMonth: 7,
    },
    {
      title: 'Front End Developer',
      company: 'New Design',
      summary:
        'Helped to increase the accuracy of the reporting systems by 4%, Delivered configuration management tools to track server settings for performance testing which saved 25% of initial machine setup',
      location: 'Lebanon - Beirut',
      remote: false,
      fullTime: true,
      startYear: 2022,
      startMonth: 5,
      endYear: 2022,
      endMonth: 10,
    },
    {
      title: 'Front End Developer',
      company: 'Luka & the Lights',
      summary:
        'Managed a portfolio of 10 ongoing website update projects. Achieved 20% quicker project turnaround by integrating advanced JavaScript frameworks',
      location: 'Turkey - Istanbul',
      remote: false,
      fullTime: true,
      startYear: 2021,
      startMonth: 12,
      endYear: 2022,
      endMonth: 6,
    },
    {
      title: 'Front End Developer',
      company: 'Tourism',
      summary:
        'Software services & mobile app, Wrote optimized scripts for data-heavy & processing heavy task automation, Spearheaded the revamp of tech stack which resulted in 40% decrease in server costs',
      location: 'Egypt - Cairo',
      remote: false,
      fullTime: true,
      startYear: 2021,
      startMonth: 2,
      endYear: 2021,
      endMonth: 12,
    },
    {
      title: 'Front End Developer',
      company: 'Harmony',
      summary:
        'Software Services, Built and maintained 15 high-traffic websites, managing content updates for over 100 pages each',
      location: 'Syria - Damascus',
      remote: false,
      fullTime: true,
      startYear: 2020,
      startMonth: 1,
      endYear: 2021,
      endMonth: 1,
    },
  ];
  let formattedData = [];
  experiencesList.map((item) => {
    formattedData.push({
      title: item.title,
      company: item.company,
      summary: item.summary,
      location: item.location,
      remote: false,
      fullTime: false,
      startMonth: parseInt(item.startMonth),
      startYear: parseInt(item.startYear),
      endMonth: parseInt(item.endMonth),
      endYear: parseInt(item.endYear),
    });
  });
  const [loading, setLoading] = useState(true);
  const [formMode, setFormMode] = useState('');
  const [experiences, setExperiences] = useState(formattedData);
  const [selectedForm, setSelectedForm] = useState({});

  const experienceFields = [
    {
      name: 'title',
      type: 'text',
      optional: false,
      label: 'Title',
    },
    {
      name: 'company',
      type: 'text',
      optional: false,
      label: 'Company',
    },
    {
      name: 'summary',
      type: 'text',
      optional: false,
      label: 'Summary',
    },
    {
      name: 'location',
      type: 'text',
      optional: false,
      label: 'Location',
    },
    // {
    //   name: 'remote',
    //   type: 'radio',
    //   optional: false,
    //   label: 'Remote',
    // },
    // {
    //   name: 'fullTime',
    //   type: 'radio',
    //   optional: false,
    //   label: 'Full-time',
    // },
    {
      name: 'startMonth',
      type: 'staticList',
      optional: false,
      label: 'Start Month',
      firstItem: 'Month',
      options: monthList,
    },
    {
      name: 'startYear',
      type: 'staticList',
      optional: false,
      label: 'Start Year',
      firstItem: 'Year',
      options: yearList,
    },
    {
      name: 'endMonth',
      type: 'staticList',
      optional: false,
      label: 'End Month',
      firstItem: 'Month',
      options: monthList,
    },
    {
      name: 'endYear',
      type: 'staticList',
      optional: false,
      label: 'End Year',
      firstItem: 'Year',
      options: yearList,
    },
  ];

  useEffect(() => {}, []);

  const editForm = (selectedItem) => {
    setSelectedForm(selectedItem);
    setFormMode('edit');
  };
  const renderItem = (item) => {
    let itemData;

    if (formMode === 'edit' && item.id === selectedForm.id) {
      itemData = (
        <FormComponent
          fields={experienceFields}
          formData={selectedForm}
          //saveSection={saveSection}
          next={null}
          userList={null}
          //saveSectionForm={saveSectionForm}
        />
      );
      //renderForm();
    } else {
      itemData = (
        <div className="data">
          <p>{item.title}</p>
          <p>{`${item.company} - ${
            item.fullTime ? 'Full-time' : 'Part-time'
          }`}</p>
          <p>{`(${item.startMonth} / ${item.startYear}) - (${item.endMonth} / ${item.endYear})`}</p>
        </div>
      );
    }

    return itemData;
  };

  const saveSectionForm = (data) => {
    if (formMode === 'new') {
      //sectionFormData.push(data);
      setExperiences([...experiences, data]);
      setFormMode('');
      //renderSection();
    } else {
      let updatedData = experiences?.map((item) => {
        if (item.tempId === selectedForm.tempId) {
          return data;
        } else return item;
      });
      let selectedObject = updatedData.find(
        (a) => a.tempId === selectedForm.tempId
      );

      selectedObject = { ...data };

      setExperiences(updatedData);
    }
  };

  const renderCard = () => {
    let formFields = {
      title: '',
      company: '',
      summary: '',
      location: '',
      remote: false,
      fullTime: false,
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
    };
    let addedForm = (
      <Card>
        <Card.Body>
          <FormComponent
            fields={experienceFields}
            formData={formFields}
            //saveSection={saveSection}
            next={null}
            userList={null}
            saveSectionForm={saveSectionForm}
            type={'new'}
          />
          {/* {renderForm('new')} */}
        </Card.Body>
      </Card>
    );
    return <>{addedForm}</>;
  };

  const renderListMode = () => {
    let list = [];
    experiences &&
      experiences.map((item) => {
        list.push(
          <ListGroup.Item className="data-list">
            <div className="row">
              <div className="col-10">{renderItem(item)}</div>

              <div className="col-2 action-section">
                <span
                  className="icon flaticon-edit custom-icon"
                  onClick={() => editForm(item)}
                ></span>
                <span
                  className="icon flaticon-delete custom-icon"
                  onClick={() => removeForm(item)}
                ></span>
              </div>
            </div>
          </ListGroup.Item>
        );
      });

    return <ListGroup>{list}</ListGroup>;
  };
  const addForm = () => {
    setFormMode('new');
  };
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
          <BreadCrumb title="Experiences" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          {/* <div className="row">
            <div className="col-lg-12">
              <div className="ls-widget pt-5">
                <div className="tabs-box"> */}
          <form action="#" className="default-form">
            <div className="row">
              <div className="form-group col-lg-11 col-md-11 m-auto custom-form-group">
                {/* <label>Skills</label> */}
                <span
                  className="icon flaticon-plus custom-icon"
                  onClick={() => addForm()}
                ></span>
              </div>

              {formMode === 'new' && renderCard()}
              {renderListMode()}

              <div className="form-group col-lg-11 col-md-11 mx-auto my-4 save-btn">
                <button type="submit" className="theme-btn btn-style-one">
                  Save
                </button>
              </div>
            </div>
          </form>
          {/* </div>
              </div>
            </div>
          </div> */}
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
