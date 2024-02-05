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
          Experienced dev
          <ul className="col-md-12 col-12 col-sm-12">
            <li>Experience</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
          </ul>
        </p>
        <a href="#" className="button" style={{ color: "blue" }}>
          Book Now -
        </a>
      </div>
    </div>
  );
};

export default CounselorCard;
