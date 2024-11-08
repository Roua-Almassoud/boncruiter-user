'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SearchForm5 = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = () => {
    //router.push('/job-list-v6', { state: searchValue });
    router.push('/job-list-v6', { query: { name: searchValue } });
    //Router.push({ pathname: '/job-list-v6',query: { searchValue },});
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    //<form onClick={handleSubmit}>
    <div className="row justify-content-center justify-content-md-between">
      {/* <!-- Form Group --> */}
      <div className="form-group col-lg-9">
        <span className="icon flaticon-search-1"></span>
        <input
          value={searchValue}
          onChange={(e) => handleChange(e)}
          type="text"
          name="field_name"
          placeholder="Job title, keywords, or company"
        />
      </div>

      {/* <!-- Form Group --> */}
      <div className="form-group col-auto">
        {/* <Link>
          href={{ pathname: '/job-list-v6', query: searchValue }}
          <button
            type="submit"
            className="theme-btn btn-style-two"
            onClick={() => handleSearch()}
          >
            Find Jobs
          </button>
        </Link> */}
        <Link
          className="theme-btn btn-style-two"
          href={{
            pathname: '/job-list-v6',
            query: {
              search: searchValue,
            },
          }}
          //passHref={true}
          //as="/job-list-v6"
        >
          Find Jobs
        </Link>
      </div>
    </div>
    // </form>
  );
};

export default SearchForm5;
