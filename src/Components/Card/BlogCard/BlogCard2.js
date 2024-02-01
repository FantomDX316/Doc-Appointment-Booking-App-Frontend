// ------------------------------------------------------------Imports-----------------------------------------------------------------
import React from "react";
import { useNavigate } from "react-router-dom";

// -------------------------------------------------------------------------------------------------------------------------------------

const BlogCard2 = ({ blog }) => {
  // --------------------------------------------------------------Hooks------------------------------------------------------------------
  const navigate = useNavigate();
  // -------------------------------------------------------------------------------------------------------------------------------------
  return (
    <div>
      <div
        class="card"
        style={{ width: "18rem", margin: "10px", cursor: "pointer" }}
        onClick={() => {
          navigate("/blog-details", { state: { blog } });
        }}
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
          class="card-img-top"
          height="200px"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{blog?.title || "N.A"}</h5>
          <p class="card-text">{blog?.description || "N.A"}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard2;
