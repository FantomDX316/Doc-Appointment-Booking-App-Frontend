// -----------------------------------------------------------Imports---------------------------------------------------------
import React from 'react';
import CreateBlogForm from '../../Components/Form/CreateBlogForm/CreateBlogForm';
import styles from "./CreateBlog.module.css";
// ----------------------------------------------------------------------------------------------------------------------------

const CreateBlog = () => {
  return (
    <div className={`${styles.CreateBlogContainer}`}>
      <CreateBlogForm />
    </div>
  )
}

export default CreateBlog
