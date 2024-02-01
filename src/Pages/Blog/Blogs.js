// -----------------------------------------------------------Imports---------------------------------------------------------
import React from "react";
import BlogCard from "../../Components/Card/BlogCard/BlogCard";
import BlogCard2 from "../../Components/Card/BlogCard/BlogCard2";
import styles from "./Blogs.module.css";
import { useSelector } from "react-redux";
// -------------------------------------------------------------------------------------------------------------

const Blogs = () => {
  // ----------------------------------------------------Hooks---------------------------------------------------
  const blogData = useSelector((state) => state?.blog?.blogData?.Blogs);
  // -------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------Functions------------------------------------------------
  // -------------------------------------------------------------------------------------------------------------
  return (
    <div
      className={`${styles.blogsContainer} d-flex justify-content-center flex-wrap`}
    >
      <div className={`${styles.leftContainer} col-md-8 col-sm-8 col-12 `}>
        <div
          className={`${styles.blogFilter} col-md-11 col-sm-11 col-11 d-flex align-items-center gap-3`}
        >
          {Array(10)
            .fill(0)
            .map((_, index) => {
              return <h6>{`Filter ${index + 1}`}</h6>;
            })}
        </div>
        <div
          className={`${styles.blogsWrapper}  col-md-11 col-11 col-sm-11 p-5 d-flex flex-column justify-content-center align-items-center`}
        >
          {Array.isArray(blogData) &&
            blogData.length > 0 &&
            blogData.map((blog) => {
              return <BlogCard blog={blog} />;
            })}
        </div>
      </div>
      <div className={`${styles.rightContainer} col-md-4 col-sm-4 col-12 `}>
        <div
          className={`${styles.rightContainerTitle} col-md-12 col-sm-12 col-12 `}
        >
          Top Picks
        </div>
        <div
          className={`${styles.rightContainerBlog} col-md-12 col-12 col-sm-12 d-flex flex-column align-items-center `}
        >
          {Array.isArray(blogData) &&
            blogData.length > 0 &&
            blogData.map((blog) => {
              return <BlogCard2 blog={blog} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
