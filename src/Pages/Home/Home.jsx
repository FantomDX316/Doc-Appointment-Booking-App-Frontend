// ---------------------------------------------------------------Imports------------------------------------------------------------
import React from 'react'
import styles from "./Home.module.css";
import docImg from "../../Assets/Images/homeDocImg.jpg"
// -----------------------------------------------------------------------------------------------------------------------------------

const Home = () => {
  return (
    <div className={`${styles.homeContainer}`}>
      <div className={`${styles.homeWrapper} row p-4`}>
        <div className={`${styles.homeContent} col-md-6 col-sm-6 col-12 p-4`}>
          <div className={`${styles.homeContentWrapper}`}>
            <h1>Book Appointment and Trust us with that</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis similique nulla necessitatibus dignissimos doloribus quis quam dolor fuga corrupti vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos perspiciatis at reprehenderit id exercitationem earum numquam, ipsam ad dolorum itaque rem repellat neque blanditiis pariatur possimus iure consequuntur voluptatem ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, voluptatum. Ipsum voluptatum ut cupiditate accusantium, et aliquam,</p>
            <div className={`${styles.seeMoreBtn} col-md-12 col-sm-12 col-12 text-center`}>
              <input type="button" name="See More" value="See More"/>
            </div>
          </div>
        </div>
        <div className={`${styles.homeImage} col-md-6 col-sm-6 col-12`}>
          <div className={`${styles.homeImageWrapper}`}>
            <img src={docImg} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
