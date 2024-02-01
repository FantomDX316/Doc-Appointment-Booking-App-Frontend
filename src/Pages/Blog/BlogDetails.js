// ------------------------------------------------------------Imports------------------------------------------------------
import React from 'react';
import styles from "./BlogDetails.module.css";
import bgImg from "../../Assets/Images/bgImg.jpg"
import profileImg from "../../Assets/Images/defaultProfileImage.jpg"
// --------------------------------------------------------------------------------------------------------------------------

const BlogDetails = () => {
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className={`${styles.blogTitle} col-md-12 col-12 col-sm-12 text-center`}>
                    <h1>Blog Title</h1>
                </div>
                <div className="blogCreatorDetails col-md-12 col-12 col-sm-12">
                    <div className={`${styles.blogCreatorDetailsWrapper} d-flex align-items-center justify-content-start col-md-12 col-12 col-sm-12`}>
                        <div className={`${styles.blogCreatorImageWrapper} col-md-2`}>
                            <div className={`${styles.blogCreatorImage}`} style={{ backgroundImage: `url(${profileImg})` }}>

                            </div>
                        </div>
                        <div className={`${styles.blogCreatorDetail} d-flex align-items-center justify-content-start col-md-10`}>
                            <h5>Creator name</h5>
                        </div>
                    </div>
                </div>
                <div className={`${styles.blogImage} col-md-12 col-12 col-sm-12`}>
                    <img src={bgImg} />
                </div>
                <div className="blogDescription col-md-12 col-12 col-sm-12 mt-3">
                    <div className={`${styles.blogDescWrapper} col-md-12 col-sm-12 col-12 d-flex justify-content-center p-3`}>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse natus magnam recusandae veritatis omnis praesentium quae sint saepe dolorum perspiciatis quis suscipit, fugit tempora iure quam inventore vitae mollitia animi vel nesciunt incidunt! Natus ipsa voluptatem a! Esse blanditiis a eius et ipsam illo possimus totam debitis enim dolorum? Facere?</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
