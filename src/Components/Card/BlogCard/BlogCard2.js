// ------------------------------------------------------------Imports-----------------------------------------------------------------
import React from 'react';
import { useNavigate } from 'react-router-dom';

// -------------------------------------------------------------------------------------------------------------------------------------



const BlogCard2 = () => {

    // --------------------------------------------------------------Hooks------------------------------------------------------------------
    const navigate = useNavigate()
    // -------------------------------------------------------------------------------------------------------------------------------------
    return (
        <div>
            <div class="card" style={{ width: "18rem", margin: "10px", cursor: "pointer" }} onClick={() => { navigate("/blog-details") }}>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp" class="card-img-top" height="200px" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard2
