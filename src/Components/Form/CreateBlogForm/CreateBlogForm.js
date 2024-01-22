// --------------------------------------------------------------Imports------------------------------------------------------------
import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createBlog } from '../../../Features/Actions/Blog/blogActions';
import { resetBlogState } from '../../../Features/Slices/Blog/blogSlice';
import styles from "./CreateBlogForm.module.css";
// ------------------------------------------------------------------------------------------------------------------------------------

const CreateBlogForm = () => {

    // ----------------------------------------------------------------States---------------------------------------------------------------

    // -------------------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------Hooks---------------------------------------------------------------
    const {
        register,
        reset,
        formState: { errors },
        handleSubmit
    } = useForm()

    const navigate = useNavigate();


    // dispatch -- hook to dispatch the actions
    const dispatch = useDispatch();


    const { isBlogCreated } = useSelector((state) => state.blog)
    // -------------------------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------Functions--------------------------------------------------------------

    // createBlogHandler -- handler to call the create blog api
    const createBlogHandler = (data) => {
        try {

            const { blogTitle, blogDescription, blogImage } = data;

            dispatch(createBlog({ title: blogTitle, description: blogDescription, image: blogImage[0] }));


        } catch (error) {
            toast.error(error.message)
        }
    }


    // -------------------------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------useEffects-----------------------------------------------------------

    useEffect(() => {
        if (isBlogCreated) {
            reset();
            navigate("/my-blogs")
            dispatch(resetBlogState(false));
        }
    }, [isBlogCreated])
    // -------------------------------------------------------------------------------------------------------------------------------------
    return (

        <>
            <div className="section section-signup p-5 d-flex align-items-center" style={{ backgroundImage: "url('https://raw.githubusercontent.com/creativetimofficial/now-ui-kit/master/assets/img/bg4.jpg')", backgroundSize: "cover", backgroundPosition: "top center", minHeight: "700px" }} >
                <div className="container">
                    <div className="row">
                        <div className="card card-signup" data-background-color="orange">
                            <form className="form" onSubmit={handleSubmit(createBlogHandler)}>
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
                                            <input type="text" className="form-control" placeholder="Title..." {...register("blogTitle", {
                                                required: {
                                                    value: true,
                                                    message: "Blog Title is a required field"
                                                }
                                            })} />
                                        </div>
                                    </div>
                                    {errors.blogTitle && errors.blogTitle.type === "required" && (
                                        <p className={`${styles.nameFieldError} col-md-11`}>Blog Title is required.</p>
                                    )}
                                    <div className={`${styles.descriptionContent} col-md-12 col-12 col-sm-12 d-flex m-3`}>
                                        <div className="input-group-prepend col-md-4 col-sm-12 col-12 m-2">
                                            <span className="input-group-text">
                                                Blog Description
                                            </span>
                                        </div>
                                        <div className="input-group-prepend  col-md-8 col-sm-12 col-12 m-2">
                                            <textarea type="text" className="form-control" placeholder="Description..." {...register("blogDescription", {
                                                required: {
                                                    value: true,
                                                    message: "Blog Description is a required field"
                                                }
                                            })} />
                                        </div>
                                    </div>
                                    {errors.blogDescription && errors.blogDescription.type === "required" && (
                                        <p className={`${styles.nameFieldError} col-md-11`}>Blog Description is required.</p>
                                    )}

                                    <div className={`${styles.blogImage} col-md-12 col-12 col-sm-12 d-flex m-3`}>
                                        <div className="input-group-prepend col-md-4 col-sm-12 col-12 m-2">
                                            <span className="input-group-text">
                                                Blog Image
                                            </span>
                                        </div>
                                        <div className="input-group-prepend  col-md-8 col-sm-12 col-12 m-2">
                                            <input type="file" className="form-control" accept='image/jpg' {...register("blogImage", {
                                                required: {
                                                    value: true,
                                                    message: "Blog Image is a required field"
                                                }
                                            })} />
                                        </div>
                                    </div>
                                    {errors.blogImage && errors.blogImage.type === "required" && (
                                        <p className={`${styles.nameFieldError} col-md-11`}>Blog Image is required.</p>
                                    )}
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