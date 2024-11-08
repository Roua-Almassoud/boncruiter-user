import Link from 'next/link';
import Api from '../../../api/Api';
import { useRouter } from 'next/navigation';

const ApplyJobModalContent = ({ jobId }) => {
  const router = useRouter();
  const handleApply = async () => {
    if (!localStorage.getItem('userId')) {
      router.push('/login');
    } else {
      //setLoading(true);
      const response = await Api.call(
        { jobId: jobId },
        `/job/apply`,
        'post',
        ''
      );
      if (response.data.code === '200') {
        window.location.reload();
      }
    }
  };
  return (
    <form
      className="default-form job-apply-form"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <div className="uploading-outer apply-cv-outer">
            {/* <div className="uploadButton">
              <input
                className="uploadButton-input"
                type="file"
                name="attachments[]"
                accept="image/*, application/pdf"
                id="upload"
                multiple=""
                required
              />
              <label
                className="uploadButton-button ripple-effect"
                htmlFor="upload"
              >
                Upload CV (doc, docx, pdf)
              </label>
            </div> */}
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <textarea
            className="darma"
            name="message"
            placeholder="Message"
          ></textarea>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <div className="input-group checkboxes square">
            <input type="checkbox" name="remember-me" id="rememberMe" />
            <label htmlFor="rememberMe" className="remember">
              <span className="custom-checkbox"></span> You accept our{' '}
              <span data-bs-dismiss="modal">
                <Link href="/terms">
                  Terms and Conditions and Privacy Policy
                </Link>
              </span>
            </label>
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <button
            className="theme-btn btn-style-one w-100"
            //type="submit"
            onClick={() => handleApply()}
            name="submit-form"
          >
            Apply Job
          </button>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default ApplyJobModalContent;
