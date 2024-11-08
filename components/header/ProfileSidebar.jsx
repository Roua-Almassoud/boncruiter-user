'use client';

import Link from 'next/link';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import profileMenuData from '../../data/profileMenuData';
import { isActiveLink } from '../../utils/linkActiveChecker';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { menuToggle } from '../../features/toggle/toggleSlice';
import { usePathname } from 'next/navigation';
import Api from '../../api/Api';

const ProfileSidebar = () => {
  const { menu } = useSelector((state) => state.toggle);
  const percentage = 30;

  const dispatch = useDispatch();
  // menu togggle handler
  const menuToggleHandler = () => {
    dispatch(menuToggle());
  };

  const getFullProfile = async () => {
    //setLoading(true);
    const response = await Api.call({}, `/user/full`, 'get', '');
    console.log('rresponse: ', response);
    if (response.data) {
      let fullData = response.data.data;
      let updatedInfo = userSections;
      updatedInfo.basicInfo = fullData.basicInfo;
      updatedInfo.skills = fullData.skills;
      updatedInfo.languages = fullData.languages;
      updatedInfo.education = fullData.education;
      updatedInfo.certificates = fullData.certificates;
      // updatedInfo.projects = fullData.projects?.map((project) => {
      //   return { tempId: Utils.unique(), ...project };
      // });
      updatedInfo.projects = fullData.projects;

      updatedInfo.experiences = fullData.experiences;
      localStorage.setItem('info', updatedInfo);
      // setUserSections(updatedInfo);
      // setLoading(false);
    } else {
      // setLoading(false);
    }
  };

  useEffect(() => {
    //getFullProfile();
  }, []);

  return (
    <div className={`user-sidebar ${menu ? 'sidebar_open' : ''}`}>
      {/* Start sidebar close icon */}
      <div className="pro-header text-end pb-0 mb-0 show-1023">
        <div className="fix-icon" onClick={menuToggleHandler}>
          <span className="flaticon-close"></span>
        </div>
      </div>
      {/* End sidebar close icon */}

      <div className="sidebar-inner">
        <ul className="navigation">
          {profileMenuData.map((item) => (
            <li
              className={`${
                isActiveLink(item.routePath, usePathname()) ? 'active' : ''
              } mb-1`}
              key={item.id}
              onClick={menuToggleHandler}
            >
              <Link href={item.routePath}>
                <i className={`la ${item.icon}`}></i> {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* End navigation */}

        {/* <div className="skills-percentage">
          <h4>Skills Percentage</h4>
          <p>
            `Put value for <strong>Cover Image</strong> field to increase your
            skill up to <strong>85%</strong>`
          </p>
          <div style={{ width: 200, height: 200, margin: "auto" }}>
            <CircularProgressbar
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#7367F0",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
              value={percentage}
              text={`${percentage}%`}
            />
          </div>{" "}
        </div> */}
      </div>
    </div>
  );
};

export default ProfileSidebar;
