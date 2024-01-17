import React from 'react'

const BlogCard = () => {
    return (
        <div>
            <div class="d-flex">
                <div class="overflow-auto" style={{height:"400px"}}>
                    <div class="card m-2" style={{maxWidth:"540px"}}>
                        <div class="row g-0">
                            <div class="col-md-4">
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

        </div>
    )
}

export default BlogCard
