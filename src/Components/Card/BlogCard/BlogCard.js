// -----------------------------------------------------------------Imports-------------------------------------------------------------
import React from 'react'
import styles from "./BlogCard.module.css"
// -------------------------------------------------------------------------------------------------------------------------------------

const BlogCard = () => {
    return (
            <div class={`${styles.blogCardContainer} d-flex col-md-10`}>
                <div class={`${styles.blogCard} overflow-auto`}>
                    <div class="card m-2" >
                        <div class="row g-0">
                            <div class={`${styles.blogImageContainer} col-md-4 col-sm-12 col-12`}>
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp" class="img-fluid rounded-start" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">
                                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                    </p>
                                    <p class="card-text">
                                        <small class="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default BlogCard
