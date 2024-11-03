
'use client'

import { useState } from "react";
import Api from "@/api/Api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CvUploader = () => {
    const [cv, setCV] = useState(null);
    const [getError, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    // validation chaching
    function checkFileTypes(file) {
        const allowedTypes = [
            "application/pdf"
        ];
        if (!allowedTypes.includes(file.type)) {
            return false;
        }
        return true;
    }

    const cvManagerHandler = (e) => {
        const file = e.target.files[0]
        setError("")
        setCV(file)
    }

    const handleDrop = (event) => {
        event.preventDefault();
        setError("");
        setCV(null)

        const droppedFile = event.dataTransfer.files[0];
        console.log(droppedFile);

        if (droppedFile) {
            if (checkFileTypes(droppedFile)) {
                setCV(droppedFile)
            }
            else {
                setError("Only accept  (.pdf) file");
            }
        }
    };

    const handleSubmitCV = async () => {

        setLoading(true);
        let formData = new FormData();
        formData.append('file', cv);
        setError("");

        const response = await Api.call(
            formData,
            `/files/upload_cv`,
            'post',
            '',
            true
        );

        const cvData = response.data;
        console.log(cvData);

        setLoading(false);
        if (cvData.code === '200') {
            toast.success("uploading CV succsessfully")
            router.push("/profile")
            localStorage.setItem('cvData', JSON.stringify(cvData.data));

            // navigate('/profile', {
            //     state: {
            //         data: cvData.data
            //     }
            // });

            setCV(null)

        } else {
            setLoading(false);
            setError(cvData.message || 'Something went wrong, please try again!')
        }

    }

    return (
        <>
            {/* Start Upload resule */}
            <div className="uploading-resume"
                onDrop={handleDrop}
                onDragOver={(event) => event.preventDefault()}
            >
                <div className="uploadButton">
                    <input
                        className="uploadButton-input"
                        type="file"
                        name="attachments[]"
                        accept="application/pdf"
                        id="upload"
                        onChange={cvManagerHandler}
                    />
                    <label className="cv-uploadButton h-100" htmlFor="upload">
                        <span className="title">Drop files here to upload</span>
                        <span className="text">
                            To upload file size is (Max 5Mb) and allowed file
                            types are (.pdf)
                        </span>
                        {cv &&
                            <>
                                <img src="/images/pdf-icon.png" style={{ width: "40px" }} alt={cv.name} />
                                <span className="uploadButton-file-name">{cv.name}</span>
                            </>
                        }

                        <span className="theme-btn btn-style-one">
                            Upload Resume
                        </span>
                        {getError !== "" ? (
                            <p className="ui-danger mb-0">{getError}</p>
                        ) : null}
                    </label>
                    <span className="uploadButton-file-name"></span>
                </div>
            </div>
            {/* End upload-resume */}

            {/* Start resume Preview  */}
            <div className="files-outer">
                <button onClick={handleSubmitCV} disabled={!cv} className="d-block w-100 theme-btn btn-style-one">
                    Submit
                    {loading && (
                        <span
                            className="spinner-border spinner-border-sm mx-2"
                            role="status"
                            aria-live="polite"
                        ></span>
                    )}
                </button>
            </div>
        </>
    );
};

export default CvUploader;
