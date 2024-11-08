'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import candidatesMenuData from '../../data/candidatesMenuData';
import HeaderNavContent from './HeaderNavContent';
import { isActiveLink } from '../../utils/linkActiveChecker';
import { usePathname, useRouter } from 'next/navigation';

const DashboardCandidatesHeader = () => {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, []);

  return (
    // <!-- Main Header-->
    <header
      className={`main-header header-shaddow  ${navbar ? 'fixed-header ' : ''}`}
    >
      <div className="container-fluid">
        {/* <!-- Main box --> */}
        <div className="main-box">
          {/* <!--Nav Outer --> */}
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  <Image
                    alt="brand"
                    width={80}
                    height={50}
                    src="/images/bonzuttner-without-bg.png"
                    priority
                  />
                </Link>
              </div>
            </div>
            {/* End .logo-box */}

            {/* <HeaderNavContent /> */}
            {/* <!-- Main Menu End--> */}
          </div>
          {/* End .nav-outer */}

          <div className="outer-box">
            {typeof window !== 'undefined' ? (
              !localStorage.getItem('userId') ? (
                <>
                  <button className="menu-btn">
                    <span className="count">1</span>
                    <span className="icon la la-heart-o"></span>
                  </button>
                  {/* wishlisted menu */}

                  <button className="menu-btn">
                    <span className="icon la la-bell"></span>
                  </button>
                  {/* End notification-icon */}

                  {/* <!-- Dashboard Option --> */}
                  {/* <!-- Add Listing --> */}
                  {/* <Link href="/cv-manager" className="upload-cv">
            Upload your CV
          </Link> */}

                  {/* <!-- Login/Register --> */}

                  <div className="btn-box">
                    {/* <a
              href="#"
              className="theme-btn btn-style-three call-modal"
              data-bs-toggle="modal"
              data-bs-target="#uploadCVModal"
            >
              Upload your CV
            </a> */}
                    <a
                      href="/login"
                      // className="theme-btn btn-style-three call-modal"
                      // data-bs-toggle="modal"
                      // data-bs-target="#loginPopupModal"
                    >
                      Login / Register
                    </a>
                  </div>
                </>
              ) : (
                <div className="dropdown dashboard-option">
                  <a
                    className="dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Image
                      alt="avatar"
                      className="thumb"
                      src="/images/resource/candidate-1.png"
                      width={50}
                      height={50}
                    />
                    <span className="name">My Account</span>
                  </a>

                  {/* <ul className="dropdown-menu">
              {candidatesMenuData.map((item) => (
                <li
                  className={`${
                    isActiveLink(item.routePath, usePathname())
                      ? 'active'
                      : ''
                  } mb-1`}
                  key={item.id}
                >
                  <Link href={item.routePath}>
                    <i className={`la ${item.icon}`}></i> {item.name}
                  </Link>
                </li>
              ))}
            </ul> */}
                  <ul className="dropdown-menu">
                    <li
                      className={`${
                        isActiveLink('/profile', usePathname()) ? 'active' : ''
                      } mb-1`}
                      key={1}
                    >
                      <Link href={'/profile'}>
                        <i className={`la la-user-tie`}></i> {'Profile'}
                      </Link>
                    </li>
                    <li
                      className={`${
                        isActiveLink('/logout', usePathname()) ? 'active' : ''
                      } mb-1`}
                      onClick={() => {
                        if (typeof window !== 'undefined') localStorage.clear();
                        router.push('/');
                        //window.location.reload();
                      }}
                      style={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '10px 30px',
                        lineHeight: '30px',
                        fontWeight: '400',
                        fontSize: '15px',
                        color: '#696969',
                        textAlign: 'left',
                        textTransform: 'capitalize',
                        borderRadius: '8px',
                        transition: 'all 500ms ease',
                        cursor: 'pointer',
                      }}
                      key={2}
                    >
                      {/* <Link href={''}>
                    <i className={`la la-logout`}></i> {'Logout'}
                  </Link> */}
                      Logout
                    </li>
                  </ul>
                </div>
              )
            ) : null}
            {/* End dropdown */}
          </div>
          {/* End outer-box */}
        </div>
      </div>
    </header>
  );
};

export default DashboardCandidatesHeader;
