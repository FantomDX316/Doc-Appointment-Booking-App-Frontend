// -----------------------------------------------------------Imports---------------------------------------------------------
import React from 'react';
import BlogCard from '../../Components/Card/BlogCard/BlogCard';
import styles from "./Blogs.module.css";
// ----------------------------------------------------------------------------------------------------------------------------

const Blogs = () => {
  return (
    <div className={`${styles.blogsContainer} d-flex justify-content-center flex-wrap`}>
      <div className={`${styles.leftContainer} col-md-8 col-sm-8 col-12 border border-danger`}>
        <div className={`${styles.blogFilter} col-md-12 col-sm-12 col-12`}>
            blogs filter
        </div>
        <div className={`${styles.blogsWrapper} border border-success col-md-12 col-12 col-sm-12 p-5 d-flex justify-content-center align-items-center`}>
            <BlogCard/>
        </div>
      </div>
      <siv className={`${styles.rightContainer} col-md-4 col-sm-4 col-12 border border-success`}>

      </siv>
    </div>
  )
}

export default Blogs
