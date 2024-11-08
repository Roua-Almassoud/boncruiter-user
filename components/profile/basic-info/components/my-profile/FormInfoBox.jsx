'use client';

import Select from 'react-select';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const FormInfoBox = () => {
  const catOptions = [
    { value: 'Banking', label: 'Banking' },
    { value: 'Digital & Creative', label: 'Digital & Creative' },
    { value: 'Retail', label: 'Retail' },
    { value: 'Human Resources', label: 'Human Resources' },
    { value: 'Managemnet', label: 'Managemnet' },
    { value: 'Accounting & Finance', label: 'Accounting & Finance' },
    { value: 'Digital', label: 'Digital' },
    { value: 'Creative Art', label: 'Creative Art' },
  ];

  return (
    <form action="#" className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>First Name</label>
          <input type="text" name="name" placeholder="" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Last Name</label>
          <input type="text" name="name" placeholder="" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Email address</label>
          <input type="text" name="name" placeholder="" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12 birth-date">
          <label>Birth Date</label>
          <DatePicker
            // selected={form[field.name]}
            // value={form[field.name]}
            // onChange={(date, e) => updateForm(e, field.name, date, 'date')}
            format={'yyyy-MM-dd'}
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Brief</label>
          <input type="text" name="name" placeholder="" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Github Main Page Url</label>
          <input type="text" name="name" placeholder="" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Linkedin Url</label>
          <input type="text" name="name" placeholder="" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Location</label>
          <input type="text" name="name" placeholder="" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Portfolio Website Url</label>
          <input type="text" name="name" placeholder="" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Notice Period</label>
          <input type="number" name="name" placeholder="" required />
        </div>

        {/* <!-- Search Select --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Desired Salary </label>
          <input type="number" name="name" placeholder="" required />
        </div>
        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormInfoBox;
