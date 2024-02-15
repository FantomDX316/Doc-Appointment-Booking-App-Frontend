//----------------------------------------------Imports---------------------------------------------
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { counselorIntroductoryVideos } from "../../../Features/Actions/Counselor/counselorActions";
import { useNavigate } from "react-router-dom";
import { resetCounselorState } from "../../../Features/Slices/Counselor/counselorSlice";
// -------------------------------------------------------------------------------------------------

const VideoModal = ({}) => {
  //----------------------------------------------States---------------------------------------------
  const [videoData, setVideoData] = useState([]);
  //-------------------------------------------------------------------------------------------------
  //----------------------------------------------Hooks---------------------------------------------
  const dispatch = useDispatch();
  const { isCounselorLoading, isCounselorUpdated } = useSelector(
    (state) => state.counselor
  );
  const { isUserLoggedIn, loggedInUserData } = useSelector(
    (state) => state?.authentication
  );
  const closeRef = useRef();

  const navigate = useNavigate();
  // -------------------------------------------------------------------------------------------------
  // --------------------------------------------Functions---------------------------------------------
  // videoHandler -- handler to handle the change in the videos
  const videoHandler = (e) => {
    setVideoData(e.target.files);
  };

  // videoUploadHandler -- handler to upload the videos
  const videoUploadHandler = () => {
    const formData = new FormData();
    if (videoData.length === 0) {
      toast.error("Please Select Videos");
    } else {
      if (!loggedInUserData?.decodedData?.counselorId) {
        toast.error("Please Provide the Counselor ID");
        navigate("/");
      } else {
        formData.append("video", videoData);
        dispatch(
          counselorIntroductoryVideos({
            payload: formData,
            counselorId: loggedInUserData?.decodedData?.counselorId,
          })
        );
      }
    }
  };
  // -------------------------------------------------------------------------------------------------
  // ---------------------------------------------useEffects------------------------------------------
  useEffect(() => {
    if (isCounselorUpdated) {
      resetCounselorState(false);
      closeRef.current.click();
    }
  }, [isCounselorUpdated]);
  // -------------------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------------------
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ display: "none" }}
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog d-flex align-items-center"
          style={{ height: "80vh" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Videos
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {isCounselorLoading ? (
                <h1>Loading...</h1>
              ) : (
                <input
                  type="file"
                  accept="video/*"
                  multiple
                  onChange={videoHandler}
                />
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={closeRef}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={videoUploadHandler}
              >
                Upload Videos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
