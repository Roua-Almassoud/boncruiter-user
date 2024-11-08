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

const index = () => {
  const languageList = [
    {
      id: null,
      languageId: '56c86b50-718a-4468-a032-7810470659c2',
      languageName: 'English',
      userId: null,
      createdAt: '2024-11-07T06:47:47.700Z',
      updatedAt: '2024-11-07T06:47:47.700Z',
      deletedAt: null,
    },
    {
      id: null,
      languageId: '33e36d54-896a-4c91-bf28-23075e06a5b6',
      languageName: 'Arabic',
      userId: null,
      createdAt: '2024-11-07T06:47:47.705Z',
      updatedAt: '2024-11-07T06:47:47.705Z',
      deletedAt: null,
    },
  ];
  let formattedData = [];
  languageList.map((userLanguage) => {
    formattedData.push({
      id: userLanguage.languageId,
      name: userLanguage.languageName,
      level: userLanguage.level || {
        id: 'none',
        name: 'None',
      },
      tempId: userLanguage.languageId,
    });
  });
  const [loading, setLoading] = useState(true);
  const [formMode, setFormMode] = useState('');
  const [languages, setLanguages] = useState(formattedData);
  const [selectedForm, setSelectedForm] = useState({});
  const [availableLanguages, setAvailableLanguages] = useState([]);
  const languageFields = [
    {
      name: 'language',
      type: 'list',
      optional: false,
      label: 'Languages',
      options: availableLanguages,
    },
    {
      name: 'level',
      type: 'list',
      optional: false,
      label: 'Levels',
      options: [
        {
          value: 'none',
          label: 'None',
        },
        {
          value: 'elementary',
          label: 'Elementary',
        },
        {
          value: 'limited',
          label: 'Limited',
        },
        {
          value: 'professional',
          label: 'Professional',
        },
        {
          value: 'bilingual',
          label: 'Bilingual',
        },
        {
          value: 'native',
          label: 'Native',
        },
      ],
    },
  ];

  const getAvailableLanguages = async () => {
    setLoading(true);
    const response = await Api.call({}, `/user/available-languages`, 'get', '');
    if (response.data) {
      let availableLanguagesList = response.data.data.list.map((language) => {
        return { value: language.id, label: language.name || 'None' };
      });
      console.log('response: ', availableLanguagesList);
      setAvailableLanguages(availableLanguagesList);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAvailableLanguages();
  }, []);

  const editForm = (selectedItem) => {
    setSelectedForm(selectedItem);
    setFormMode('edit');
  };
  const renderItem = (item) => {
    let itemData;

    if (formMode === 'edit' && item.id === selectedForm.id) {
      itemData = (
        <FormComponent
          fields={languageFields}
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
          <p>{item.name}</p>
          <p>Level</p>
        </div>
      );
    }

    return itemData;
  };

  const saveSectionForm = (data) => {
    if (formMode === 'new') {
      //sectionFormData.push(data);
      setLanguages([...languages, data]);
      setFormMode('');
      //renderSection();
    } else {
      let updatedData = languages?.map((item) => {
        if (item.tempId === selectedForm.tempId) {
          return data;
        } else return item;
      });
      let selectedObject = updatedData.find(
        (a) => a.tempId === selectedForm.tempId
      );

      selectedObject = { ...data };

      setLanguages(updatedData);
    }
  };

  const renderCard = () => {
    let formFields = {
      id: '',
      name: '',
      level: {
        id: 'none',
        name: 'None',
      },
      tempId: Utils.unique(),
    };
    let addedForm = (
      <Card>
        <Card.Body>
          <FormComponent
            fields={languageFields}
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
    languages &&
      languages.map((item) => {
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
          <BreadCrumb title="Languages" />
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
