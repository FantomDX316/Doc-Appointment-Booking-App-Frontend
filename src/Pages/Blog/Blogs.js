// ---------------------------------------------------------Imports----------------------------------------------------------------
import React from 'react';
import styles from "./Blogs.module.css";
// ----------------------------------------------------------------------------------------------------------------------------------

const Blogs = () => {
  return (
    <div className={`${styles.blogsContainer} d-flex flex-wrap`}>
      <blogs className={`${styles.topContent} col-md-12 col-sm-12 col-12`}>
        top Content
      </blogs>
      <blogs className={`${styles.leftContent} col-md-8 col-sm-12 col-12 d-flex align-items-center flex-column`}>
        <div className={`${styles.leftBlogsCard} col-md-11 col-sm-11 col-11`}>
          <div className={`${styles.leftBlogsCardTopContent} col-md-12 col-12 col-sm-12`}>
            top
          </div>
          <div className={`${styles.leftBlogsCardMain} col-md-12 col-12 col-sm-12 d-flex justify-content-center align-items-center`}>
            <div className={`${styles.leftBlogsCardMainContent} col-md-8 col-8 col-sm-8`}>
              <div className={`${styles.leftBlogsCardMainContentTitle} col-md-12 col-12 col-sm-12`}>
                  <h4>Lorem ipsum dolor sit amet consectetur.</h4>
              </div>
              <div className={`${styles.leftBlogsCardMainContentDescription} col-md-12 col-12 col-sm-12`}>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate dignissimos eveniet atque molestias aspernatur, vel eaque autem, laborum id libero tenetur reiciendis impedit. Expedita accusamus aspernatur quis rerum illo accusantium molestias, voluptates iure provident nemo ratione totam itaque? Explicabo, doloremque soluta? Voluptatibus dolor assumenda soluta possimus neque similique sint itaque?</p>
              </div>
            </div>
            <div className={`${styles.leftBlogsCardMainContentImage} col-md-4 col-4 col-sm-4`}>

            </div>
          </div>
        </div>
      </blogs>
      <blogs className={`${styles.rightContent} col-md-4`}>
        right content
      </blogs>
    </div>
  )
}

export default Blogs
