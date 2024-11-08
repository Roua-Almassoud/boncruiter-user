'use client';
import React, { useState } from 'react';
import Api from '../../../../api/Api';
import Utils from '../../../../components/utils/utils';
import { useRouter } from 'next/navigation';
const FormContent2 = () => {
  const router = useRouter();
  const [alertError, setAlertError] = useState('');
  const [form, setForm] = useState({
    email: localStorage.getItem('email'),
    code: '1234',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const validate = (field = '', value = '') => {
    let errorsList = errors;
    if (field) {
      if (value) {
        if (field === 'phone' && !Utils.isEmpty(form[field])) {
          if (!Utils.validatePhoneNumber(form[field]))
            errorsList = { ...errorsList, phone: 'Invalid Phone Number!' };
        } else {
          delete errorsList[field];
        }
        delete errorsList[field];
      } else if (field !== 'phone')
        errorsList = { ...errorsList, [field]: 'Field is Required!' };
    } else {
      Object.keys(form).map((item) => {
        if (item !== 'phone' && item !== 'image') {
          if (!form[item]) {
            errorsList = { ...errorsList, [item]: 'Field is Required!' };
          } else {
            if (item === 'email') {
              if (!Utils.validateEmail(form[item]))
                errorsList = { ...errorsList, email: 'Invalid Email Address!' };
            }
          }
        } else {
          errorsList = { ...errorsList };

          if (item === 'phone' && !Utils.isEmpty(form[item])) {
            if (!Utils.validatePhoneNumber(form[item]))
              errorsList = { ...errorsList, phone: 'Invalid Phone Number!' };
          }
        }
      });
    }
    setErrors(errorsList);
    return errorsList;
  };
  const handleSubmit = async () => {
    const errorsList = validate();
    setLoading(true);
    if (Utils.isEmptyObject(errorsList)) {
      const response = await Api.call(
        form,
        `/user/auth/verifyAccount`,
        'post',
        ''
      );
      if (response.data.code === '200') {
        setLoading(false);
        const userId = response.data?.data?.accessToken;
        localStorage.setItem('userId', userId);
        setAlertError('');
        router.push('/');
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
    setForm({ ...form, [field]: value });
  };
  return (
    <div className="form-inner">
      <h3>Verify Account</h3>

      {/* <!--Login Form--> */}
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form?.email}
            readOnly
            disabled
          />
        </div>
        {/* name */}

        <div className="form-group">
          <label>Code</label>
          <input
            type="number"
            className="form-control"
            id="code"
            value={form?.code}
            onChange={(event) => handleChange(event.target.value, 'code')}
          />
        </div>

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
            onClick={() => handleSubmit()}
          >
            Verify
          </button>
        </div>
        {/* login */}
      </form>
    </div>
  );
};

export default FormContent2;
