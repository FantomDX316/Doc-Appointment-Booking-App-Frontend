// -----------------------------------------------------------------Imports---------------------------------------------------------------
import React from 'react'
import styles from "./Profile.module.css"
// ---------------------------------------------------------------------------------------------------------------------------------------


const Profile = () => {
    // ------------------------------------------------------------------States----------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------Hooks----------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------Functions----------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------useEffects---------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------
    return (
        <div className={`${styles.profileContainer} d-flex justify-content-center`}>
            <div className={`${styles.profileWrapper} d-flex flex-column align-items-center`}>
                <div className={`${styles.profileTopContent} col-md-12 col-12 col-sm-12 d-flex flex-column align-items-center p-2`}>
                    <div className={`${styles.profileImageContainer}`}>
                    </div>
                    <div className={`${styles.profileUserDetailsContainer} col-md-12 col-12 col-sm-12 d-flex flex-column align-items-center p-2`}>
                        <p className={`${styles.profileUserName}`}>Saksham Kothari</p>
                        <h3 className={`${styles.profileUserSpecialization}`}>Full Stack Developer</h3>
                    </div>
                    <div className={`${styles.profileUserBioContainer} col-md-9 col-9 col-sm-9 d-flex flex-column align-items-center p-2 text-center`}>
                        <p className={`${styles.profileUserBio}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fuga quibusdam nam tenetur dolor enim, laudantium eveniet quaerat obcaecati in deserunt autem ab unde ipsa dolores assumenda, error laboriosam veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto error molestias officiis rem perferendis velit amet laudantium eligendi iusto. Dicta.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
