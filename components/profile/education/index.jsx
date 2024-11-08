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
  const educationList = [
    {
      degree:
        "Bachelor's Degree Information engineering, specialization Artiﬁcial intelligence",
      institution: 'Damascus University',
      brief: "Obtain a bachelor's degree in informatics engineering",
      fromYear: 2017,
      toYear: 2023,
    },
  ];
  let formattedData = [];
  educationList.map((item) => {
    formattedData.push({
      ...item,
      tempId: Utils.unique(),
    });
  });
  const [loading, setLoading] = useState(true);
  const [formMode, setFormMode] = useState('');
  const [education, setEducation] = useState(formattedData);
  const [selectedForm, setSelectedForm] = useState({});

  const educationFields = [
    {
      name: 'degree',
      type: 'text',
      optional: false,
      label: 'Degree',
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
      name: 'fromYear',
      type: 'staticList',
      optional: false,
      label: 'From Year',
      firstItem: 'Year',
      options: yearList,
    },
    {
      name: 'toYear',
      type: 'staticList',
      optional: false,
      label: 'To Year',
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
          fields={educationFields}
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
          <p>{item.institution}</p>
          <p>{item.degree}</p>
          <p>{`${item.fromYear} - ${item.toYear || 'PRESENT'}`}</p>
          <p>{item.brief}</p>
        </div>
      );
    }

    return itemData;
  };

  const saveSectionForm = (data) => {
    if (formMode === 'new') {
      //sectionFormData.push(data);
      setEducation([...education, data]);
      setFormMode('');
      //renderSection();
    } else {
      let updatedData = education?.map((item) => {
        if (item.tempId === selectedForm.tempId) {
          return data;
        } else return item;
      });
      let selectedObject = updatedData.find(
        (a) => a.tempId === selectedForm.tempId
      );

      selectedObject = { ...data };

      setEducation(updatedData);
    }
  };

  const renderCard = () => {
    let formFields = {
      degree: '',
      institution: '',
      brief: '',
      fromYear: 0,
      toYear: 0,
    };
    let addedForm = (
      <Card>
        <Card.Body>
          <FormComponent
            fields={educationFields}
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
    education &&
      education.map((item) => {
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
          <BreadCrumb title="Education" />
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
