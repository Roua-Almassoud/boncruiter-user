import React, { useState } from 'react';
import Utils from '../../../../components/utils/utils';
import Api from '../../../../api/Api';
const FormContent = () => {
  const [alertError, setAlertError] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    image: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [selectedCountry, setCountry] = useState({});
  const isPhoneValid = (phone) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
      return false;
    }
  };
  const validate = (field = '', value = '', country = '') => {
    let errorsList = errors;
    // if (field) {
    //   if (value) {
    //     if (field === 'phone' && !Utils.isEmpty(user[field])) {
    //       // if (!Utils.validatePhoneNumber(user[field]))
    //       //   errorsList = { ...errorsList, phone: 'Invalid Phone Number!' };
    //       //if (!Utils.regexCheck(user[field], 'phone'))

    //       if (selectedCountry) {
    //         if (
    //           `+${selectedCountry.country.dialCode}` !==
    //           selectedCountry.inputValue?.trim()
    //         ) {
    //           if (!isPhoneValid(value))
    //             errorsList = {
    //               ...errorsList,
    //               phone: 'Invalid Phone Number!',
    //             };
    //         }
    //       }
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
    //         if (selectedCountry) {
    //           if (
    //             `+${selectedCountry.country.dialCode}` !==
    //             selectedCountry.inputValue?.trim()
    //           )
    //             if (!isPhoneValid(user[item]))
    //               errorsList = {
    //                 ...errorsList,
    //                 phone: 'Invalid Phone Number!',
    //               };
    //         } else delete errorsList[field];
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
      const response = await Api.call(user, `/user/auth/register`, 'post', '');
      if (response?.data?.code === '200') {
        setLoading(false);
        const userId = response.data?.data?.User?.id;
        setAlertError('');
        //navigate('/verify-account', { state: user.email });
      } else {
        setLoading(false);
        setAlertError(
          response?.data?.message || 'Something went wrong, please try again!'
        );
      }
    } else {
      setLoading(false);
      setAlertError('');
    }
  };
  const handleChange = (value, field, country = '') => {
    setUser({ ...user, [field]: value });
    setCountry(country);
    //validate(field, value, country);
  };
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="first Name"
          required
          value={user?.firstName}
          onChange={(event) => handleChange(event.target.value, 'firstName')}
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          value={user?.lastName}
          onChange={(event) => handleChange(event.target.value, 'lastName')}
        />
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="username"
          placeholder="Email Address"
          required
          value={user?.email}
          onChange={(event) => handleChange(event.target.value, 'email')}
        />
      </div>
      {/* name */}

      <div className="form-group">
        <label>Password</label>
        <input
          id="password-field"
          type="password"
          name="password"
          placeholder="Password"
          value={user?.password}
          onChange={(event) => handleChange(event.target.value, 'password')}
        />
      </div>
      {/* password */}

      <div className="form-group">
        <button className="theme-btn btn-style-one" onClick={handleSubmit}>
          Register
        </button>
      </div>
      {/* login */}
    </form>
  );
};

export default FormContent;
