import React from "react";
import styles from "./CounselorCard.module.css";

const CounselorCard = () => {
  return (
    <div className={`${styles.card}`}>
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
      />
      <div className="card-content">
        <h2 className={`${styles.counselorCardTitle}`}>Shubham Sharma</h2>
        <p style={{ color: "black" }}>
          Lorem ipsum dolor sit amet consectetur Lorem, ipsum....
          <div className="col-md-12 col-sm-12 col-12 d-flex flex-wrap mt-3">
            <>
              <div className="col-md-5 col-sm-5 col-5">Experience</div>
              <div className="col-md-1 col-sm-1 col-1">:</div>
              <div className="col-md-6 col-sm-6 col-6 text-danger">7 years</div>
            </>
            <>
              <div className="col-md-5 col-sm-5 col-5">Language</div>
              <div className="col-md-1 col-sm-1 col-1">:</div>
              <div className="col-md-6 col-sm-6 col-6 text-danger">English</div>
            </>
            <>
              <div className="col-md-5 col-sm-5 col-5">Specialization</div>
              <div className="col-md-1 col-sm-1 col-1">:</div>
              <div className="col-md-6 col-sm-6 col-6 text-danger">Cancer</div>
            </>
          </div>
        </p>
        <div className={`${styles.bookBtn} text-center`} style={{ color: "blue" }}>
          Book Now -
        </div>
      </div>
    </div>
  );
};

export default CounselorCard;
