// --------------------------------------------------Imports-------------------------------------------
import React from "react";
import styles from "./CounselorProfile.module.css";
import { FaHome, FaVideo } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import CounselorProfileCarousel from "../../Components/Carousel/CounselorProfileCarousel/CounselorProfileCarousel";
// -----------------------------------------------------------------------------------------------------

const CounselorProfile = () => {
  return (
    <div class="row py-2 px-1">
      <div class="col-md-10 mx-auto">
        <div class="bg-white shadow rounded overflow-hidden">
          <div class={`${styles.cover} px-4 pt-0 pb-4 `}>
            <div class={`${styles.profileHead} media align-items-end`}>
              <div class="profile mr-3">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="..."
                  width="130"
                  class="rounded mb-2 img-thumbnail"
                />
              </div>
              <div class="media-body mb-5 text-white">
                <h4 class="mt-0 mb-0">Shubham Sharma</h4>
                <p class="small mb-4">
                  <i class="fas fa-map-marker-alt mr-2"></i> Dehradun
                </p>
              </div>
            </div>
          </div>
          <div class="px-4 py-3">
            <h5 class="mb-0">About</h5>
            <div class="p-4 rounded shadow-sm bg-light">
              <p class="font-italic mb-0">Web Developer</p>
              <p class="font-italic mb-0">Lives in New York</p>
              <p class="font-italic mb-0">Photographer</p>
            </div>
          </div>
          <div class="px-4 py-3">
            <h5 class="mb-0">Bio</h5>
            <div class="p-4 rounded shadow-sm bg-light">
              <p class="font-italic mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                rerum id veniam harum expedita quis suscipit non. Velit dolores
                libero minima? Eligendi amet ipsum aliquid illum, architecto ab
                facere molestias. Nesciunt dolorum voluptatum consectetur minus
                dolor, natus rerum ratione quia in aspernatur atque libero
                tempore incidunt. Quidem ipsam id minus?
              </p>
            </div>
          </div>
          <div class={`${styles.appointmentContainer} py-4 px-4`}>
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h5 class="mb-0 text-center col-md-12">Book an Appointment</h5>
            </div>
            <div class="row">
              <div className="col-md-12 col-sm-12 col-12">
                <div className="callOptions col-md-12 col-12 col-sm-12 d-flex gap-5 justify-content-center">
                  <div
                    className={`${styles.callCard} col-md-2 col-sm-2 col-2 d-flex flex-column align-items-center`}
                  >
                    <div className="callCardLogo col-md-12 col-sm-12 col-12 d-flex align-items-center justify-content-center">
                      <FaHome size={"50%"} />
                    </div>
                    <div className="callCardTitle col-md-12 col-sm-12 col-12 p-3 d-flex justify-content-center align-items-center">
                      <h5>In Person</h5>
                    </div>
                  </div>
                  <div
                    className={`${styles.callCard} col-md-2 col-sm-2 col-2 d-flex flex-column align-items-center`}
                  >
                    <div className="callCardLogo col-md-12 col-sm-12 col-12 d-flex align-items-center justify-content-center">
                      <FaVideo size={"50%"} />
                    </div>
                    <div className="callCardTitle col-md-12 col-sm-12 col-12 p-3 d-flex justify-content-center align-items-center">
                      <h5>Video</h5>
                    </div>
                  </div>
                  <div
                    className={`${styles.callCard} col-md-2 col-sm-2 col-2 d-flex flex-column align-items-center`}
                  >
                    <div className="callCardLogo col-md-12 col-sm-12 col-12 d-flex align-items-center justify-content-center">
                      <IoCallSharp size={"50%"} />
                    </div>
                    <div className="callCardTitle col-md-12 col-sm-12 col-12 p-3 d-flex justify-content-center align-items-center">
                      <h5>Call</h5>
                    </div>
                  </div>
                </div>
                <div className="counselorLocation col-md-12 col-12 col-sm-12 text-center mt-4">
                  <h4>Demo Health Center</h4>
                  <h5>601, Notan Heights, 18A, Gurunanak Rd, Mumbai</h5>
                  <h6>Mumbai centre +912071171501</h6>
                </div>
                <div className="locationCarousel col-md-12 col-12 col-sm-12">
                  <CounselorProfileCarousel />
                </div>
                <div className="sessionDuration"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounselorProfile;
