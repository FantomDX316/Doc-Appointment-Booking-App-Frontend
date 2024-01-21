// --------------------------------------------------------------Imports------------------------------------------------------------
import React from 'react';

// ------------------------------------------------------------------------------------------------------------------------------------

const CreateBlogForm = () => {
    return (

        <>
            <div className="section section-signup p-5" style={{ backgroundImage: "url('https://raw.githubusercontent.com/creativetimofficial/now-ui-kit/master/assets/img/bg4.jpg')", backgroundSize: "cover", backgroundPosition: "top center", minHeight: "700px" }} >
                <div className="container">
                    <div className="row">
                        <div className="card card-signup" data-background-color="orange">
                            <form className="form" method="" action="">
                                <div className="card-header text-center">
                                    <h3 className="card-title title-up">Create Blog</h3>
                                </div>
                                <div className="card-body">
                                    <div className="input-group no-border">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                Blog Title
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Title..." />
                                    </div>
                                    <div className="input-group no-border">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                Blog Description
                                            </span>
                                        </div>
                                        <input type="text" placeholder="Description..." className="form-control" />
                                    </div>
                                    <div className="input-group no-border">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                Blog Image
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Email..." />
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