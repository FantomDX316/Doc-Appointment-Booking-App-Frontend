// -----------------------------------------------------------------Imports-------------------------------------------------------------
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BlogCard.module.css";
// -------------------------------------------------------------------------------------------------------------------------------------

const BlogCard = ({ blog }) => {
  // ------------------------------------------------------------------Hooks--------------------------------------------------------------
  const navigate = useNavigate();
  // -------------------------------------------------------------------------------------------------------------------------------------
  return (
    <div
      class={`${styles.blogCardContainer} d-flex col-md-10`}
      onClick={() => {
        navigate(`/blog-details`, { state: { blog } });
      }}
    >
      <div class={`${styles.blogCard} overflow-auto`}>
        <div class="card m-2">
          <div class="row g-0">
            <div
              class={`${styles.blogImageContainer} col-md-4 col-sm-12 col-12`}
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                class="img-fluid rounded-start"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{blog?.title || "N.A"}</h5>
                <p class="card-text">
                  {blog?.description.length > 50
                    ? blog?.description.slice(0, 50)
                    : blog?.description || "N.A"}
                  ...
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 minutes ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
