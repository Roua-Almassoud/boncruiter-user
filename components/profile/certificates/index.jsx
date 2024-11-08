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
  const certificatesList = [
    {
      title: 'Diploma in Full stack developer',
      link: null,
      institution: 'Intensive 16-wk programme, Egypt - Cairo',
      brief: null,
      year: null,
    },
    {
      title: 'Diploma in Professional Web design',
      link: null,
      institution: 'Intensive 12-wk programme, Syria - Damascus',
      brief: null,
      year: null,
    },
    {
      title: 'Diploma in Body language',
      link: null,
      institution: 'Intensive 8-wk programme, Syria - Damascus',
      brief: null,
      year: null,
    },
  ];
  let formattedData = [];
  certificatesList.map((item) => {
    formattedData.push({
      title: item.title,
      link: item.link,
      institution: item.institution,
      brief: item.brief,
      year: item.year,
    });
  });
  const [loading, setLoading] = useState(true);
  const [formMode, setFormMode] = useState('');
  const [certificates, setCertificates] = useState(formattedData);
  const [selectedForm, setSelectedForm] = useState({});

  const certificateFields = [
    {
      name: 'title',
      type: 'text',
      optional: false,
      label: 'Title',
    },
    {
      name: 'link',
      type: 'text',
      optional: false,
      label: 'Link',
      //regex: 'uri',
    },
    {
      name: 'institution',
      type: 'text',
      optional: false,
      label: 'Institution',
    },
    {
      name: 'brief',
      type: 'text',
      optional: false,
      label: 'Brief',
    },
    {
      name: 'year',
      type: 'staticList',
      optional: false,
      label: 'Year',
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
          fields={certificateFields}
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
          <p>{item.institution}</p>
          <p>{item.brief}</p>
          <p>{item.link}</p>
          <p>{item.year}</p>
        </div>
      );
    }

    return itemData;
  };

  const saveSectionForm = (data) => {
    if (formMode === 'new') {
      //sectionFormData.push(data);
      setCertificates([...certificates, data]);
      setFormMode('');
      //renderSection();
    } else {
      let updatedData = certificates?.map((item) => {
        if (item.tempId === selectedForm.tempId) {
          return data;
        } else return item;
      });
      let selectedObject = updatedData.find(
        (a) => a.tempId === selectedForm.tempId
      );

      selectedObject = { ...data };

      setCertificates(updatedData);
    }
  };

  const renderCard = () => {
    let formFields = {
      title: '',
      link: '',
      institution: '',
      brief: '',
      year: 0,
    };
    let addedForm = (
      <Card>
        <Card.Body>
          <FormComponent
            fields={certificateFields}
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
    certificates &&
      certificates.map((item) => {
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
          <BreadCrumb title="Certificates" />
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
