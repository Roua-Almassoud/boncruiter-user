'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import HeaderNavContent from './HeaderNavContent';
import Image from 'next/image';
import { isActiveLink } from '../../utils/linkActiveChecker';
import { useRouter } from 'next/navigation';

import { usePathname } from 'next/navigation';
const DefaulHeader2 = () => {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
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
      className={`main-header  ${
        navbar ? 'fixed-header animated slideInDown' : ''
      }`}
    >
      {/* <!-- Main box --> */}
      <div className="main-box">
        {/* <!--Nav Outer --> */}
        <div className="nav-outer">
          <div className="logo-box">
            <div className="logo">
              <Link href="/">
                <Image
                  width={80}
                  height={50}
                  src="/images/bonzuttner-without-bg.png"
                  alt="brand"
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
          {/* <!-- Add Listing --> */}
          {/* <Link href="/cv-manager" className="upload-cv">
            Upload your CV
          </Link> */}

          {/* <!-- Login/Register --> */}
          {!localStorage.getItem('userId') ? (
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
                    localStorage.clear();
                    router.push('/');
                    window.location.reload();
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
                    cursor:'pointer',
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
          )}
        </div>
      </div>
    </header>
  );
};

export default DefaulHeader2;
