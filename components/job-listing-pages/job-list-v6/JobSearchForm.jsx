import Categories from '../components/Categories';
import JobSelect from '../components/JobSelect';
import LocationBox from '../components/LocationBox';
import SearchBox from '../components/SearchBox';
import Multiselect from 'multiselect-react-dropdown';

const JobSearchForm = () => {
  return (
    <>
      <div className="job-search-form">
        <div className="row">
          <div className="form-group col-lg-4 col-md-12 col-sm-12">
            {/* <SearchBox /> */}
            <input
              type="text"
              name="listing-search"
              placeholder="Job title, keywords, or company"
              //value={getKeyWord}
              //onChange={keywordHandler}
            />
            <span className="icon flaticon-search-3"></span>
          </div>
          {/* <!-- Form Group --> */}

          <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
            {/* <LocationBox /> */}
            {/* <input
              type="text"
              name="listing-search"
              placeholder="City or postcode"
              //value={getLocation}
              //onChange={locationHandler}
            /> */}
            <Multiselect
              className={`skills-select shadow bg-white 
              `}
              options={[
                { id: 1, name: 'first' },
                { id: 2, name: 'second' },
                { id: 3, name: 'third' },
              ]}
              //   selectedValues={selectedSkills}
              //   onSelect={onSelect}
              //   onRemove={onRemove}
              placeholder={'Skills'}
              displayValue="name"
            />
            <span className="icon flaticon-briefcase"></span>
          </div>
          {/* <!-- Form Group --> */}

          <div className="form-group col-lg-3 col-md-12 col-sm-12 location">
            {/* <Categories /> */}
          </div>
          {/* <!-- Form Group --> */}

          <div className="form-group col-lg-2 col-md-12 col-sm-12 text-right">
            <button type="submit" className="theme-btn btn-style-one">
              Find Jobs
            </button>
          </div>
          {/* <!-- Form Group --> */}
        </div>
      </div>

      <JobSelect />
    </>
  );
};

export default JobSearchForm;
