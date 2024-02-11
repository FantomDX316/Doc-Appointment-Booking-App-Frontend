// ----------------------------------------------------------------Imports----------------------------------------------------
import React from 'react';
import styles from "./MyBlogs.module.css";
import FilterCarousel from '../../Components/Carousel/FilterCarousel/FilterCarousel';
// ----------------------------------------------------------------------------------------------------------------------------

const MyBlogs = () => {
    return (
        <div className={`${styles.myBlogsContainer}`}>
            <div className="myBlogsFilter">
                <FilterCarousel />
            </div>
            <div className={`${styles.myBlogsContent}`}>

            </div>
        </div>
    )
}

export default MyBlogs
