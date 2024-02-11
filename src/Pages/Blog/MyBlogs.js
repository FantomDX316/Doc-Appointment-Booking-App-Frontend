// ----------------------------------------------------------------Imports----------------------------------------------------
import React from 'react';
import styles from "./MyBlogs.module.css";
import FilterCarousel from '../../Components/Carousel/FilterCarousel/FilterCarousel';
import MyBlogCard from '../../Components/Card/BlogCard/MyBlogCard';
// ----------------------------------------------------------------------------------------------------------------------------

const MyBlogs = () => {
    return (
        <div className={`${styles.myBlogsContainer}`}>
            <div className="myBlogsFilter">
                <FilterCarousel />
            </div>
            <div className={`${styles.myBlogsContent} p-3`}>
                <MyBlogCard />
            </div>
        </div>
    )
}

export default MyBlogs
