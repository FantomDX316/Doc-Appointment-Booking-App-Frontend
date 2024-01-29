// ------------------------------------------------------------Imports------------------------------------------------------
import React from 'react';
import styles from "./BlogDetails.module.css";
// --------------------------------------------------------------------------------------------------------------------------

const BlogDetails = () => {
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className={`${styles.blogTitle} col-md-12 col-12 col-sm-12 text-center`}>
                    <h1>Blog Title</h1>
                </div>
                <div className="blogCreatorDetails col-md-12 col-12 col-sm-12">
                    blogCreatorDetails
                </div>
                <div className="blogImage col-md-12 col-12 col-sm-12">
                    blogImage
                </div>
                <div className="blogDescription col-md-12 col-12 col-sm-12">
                    blogDescription
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
