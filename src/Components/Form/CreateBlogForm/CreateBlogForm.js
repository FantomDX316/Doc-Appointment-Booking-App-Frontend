// --------------------------------------------------------------Imports------------------------------------------------------------
import React from 'react';
import styles from "./CreateBlogForm.module.css";
// ------------------------------------------------------------------------------------------------------------------------------------

const CreateBlogForm = () => {
    return (

        <>
            <div className="section section-signup p-5 d-flex align-items-center" style={{ backgroundImage: "url('https://raw.githubusercontent.com/creativetimofficial/now-ui-kit/master/assets/img/bg4.jpg')", backgroundSize: "cover", backgroundPosition: "top center", minHeight: "700px" }} >
                <div className="container">
                    <div className="row">
                        <div className="card card-signup" data-background-color="orange">
                            <form className="form" method="" action="">
                                <div className="card-header text-center">
                                    <h3 className="card-title title-up">Create Blog</h3>
                                </div>


                                <div className="createBlogFormWrapper col-md-12 col-12 col-sm-12 d-flex p-5 flex-column justify-content-center align-items-center">
                                    <div className={`${styles.titleContent} col-md-12 col-12 col-sm-12 d-flex m-3`}>
                                        <div className="input-group-prepend col-md-4 col-sm-12 col-12 m-2">
                                            <span className="input-group-text">
                                                Blog Title
                                            </span>
                                        </div>
                                        <div className="input-group-prepend col-md-8 col-sm-12 col-12 m-2">
                                            <input type="text" className="form-control" placeholder="Title..." />
                                        </div>
                                    </div>
                                    <div className={`${styles.descriptionContent} col-md-12 col-12 col-sm-12 d-flex m-3`}>
                                        <div className="input-group-prepend col-md-4 m-2">
                                            <span className="input-group-text">
                                                Blog Description
                                            </span>
                                        </div>
                                        <div className="input-group-prepend  col-md-8 m-2">
                                            <textarea type="text" className="form-control" placeholder="Description..." />
                                        </div>
                                    </div>
                                    <div className={`${styles.blogImage} col-md-12 col-12 col-sm-12 d-flex m-3`}>
                                        <div className="input-group-prepend col-md-4 m-2">
                                            <span className="input-group-text">
                                                Blog Image
                                            </span>
                                        </div>
                                        <div className="input-group-prepend  col-md-8 m-2">
                                            <input type="file" className="form-control" accept='image/jpg' />
                                        </div>
                                    </div>
                                    <div className={`${styles.blogImage} col-md-12 col-12 col-sm-12 d-flex justify-content-center m-3`}>
                                        <div className="input-group-prepend col-md-4 m-2 d-flex justify-content-center">
                                            <input type="submit" className="input-group-text" value='Create Blog' />
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateBlogForm;