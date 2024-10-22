'use client';
import Link from 'next/link';
//import LoginWithSocial from "./LoginWithSocial";
import React, { useState } from 'react';
import Api from '../../../../api/Api';
import Utils from '../../../../components/utils/utils';

const FormContent = () => {
  const [alertError, setAlertError] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const validate = (field = '', value = '') => {
    let errorsList = errors;
    // if (field) {
    //   if (value) {
    //     if (field === 'phone' && !Utils.isEmpty(user[field])) {
    //       // if (!Utils.validatePhoneNumber(user[field]))
    //       //   errorsList = { ...errorsList, phone: 'Invalid Phone Number!' };
    //     } else {
    //       delete errorsList[field];
    //     }
    //     delete errorsList[field];
    //   } else if (field !== 'phone')
    //     errorsList = { ...errorsList, [field]: 'Field is Required!' };
    // } else {
    //   Object.keys(user).map((item) => {
    //     if (item !== 'phone' && item !== 'image') {
    //       if (!user[item]) {
    //         errorsList = { ...errorsList, [item]: 'Field is Required!' };
    //       } else {
    //         if (item === 'email') {
    //           if (!Utils.validateEmail(user[item]))
    //             errorsList = { ...errorsList, email: 'Invalid Email Address!' };
    //         }
    //       }
    //     } else {
    //       errorsList = { ...errorsList };

    //       if (item === 'phone' && !Utils.isEmpty(user[item])) {
    //         if (!Utils.regexCheck(user[item], 'phone'))
    //           errorsList = {
    //             ...errorsList,
    //             phone: 'Invalid Phone Number!',
    //           };
    //         else delete errorsList[field];
    //       }
    //     }
    //   });
    // }
    setErrors(errorsList);
    return errorsList;
  };
  const handleSubmit = async () => {
    const errorsList = validate();
    setLoading(true);
    if (Utils.isEmptyObject(errorsList)) {
      const response = await Api.call(user, `/user/auth/login`, 'post', '');
      if (response.data.code === '200') {
        setLoading(false);
        const userId = response.data?.data?.accessToken;
        localStorage.setItem('userId', userId);
        setAlertError('');
        navigate('/profile');
      } else {
        setLoading(false);
        setAlertError(
          response.data.message || 'Something went wrong, please try again!'
        );
      }
    } else {
      setLoading(false);
      setAlertError('');
    }
  };
  const handleChange = (value, field) => {
    validate(field, value);
    setUser({ ...user, [field]: value });
  };
  return (
    <div className="form-inner">
      <h3>Login to Bonzuttner</h3>

      {/* <!--Login Form--> */}
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={user?.email}
            onChange={(event) => handleChange(event.target.value, 'email')}
          />
        </div>
        {/* name */}

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={user?.password}
            onChange={(event) => handleChange(event.target.value, 'password')}
          />
        </div>
        {/* password */}

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input type="checkbox" name="remember-me" id="remember" />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Remember me
              </label>
            </div>
            {/* <a href="#" className="pwd">
              Forgot password?
            </a> */}
          </div>
        </div>
        {/* forgot password */}

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            onClick={() => handleSubmit()}
            name="log-in"
          >
            Log In
          </button>
        </div>
        {/* login */}
        {alertError && (
          <div class="alert alert-danger profile-alert" role="alert">
            {alertError}
          </div>
        )}
      </form>
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
          Don&apos;t have an account?{' '}
          <Link
            href="#"
            className="call-modal signup"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            Signup
          </Link>
        </div>

        {/* <div className="divider">
          <span>or</span>
        </div>

        <LoginWithSocial /> */}
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent;
