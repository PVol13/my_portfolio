import React from "react";
import { BlogList } from "../helpers/BlogList";
import BlogItem from "../components/BlogItem";
import "../styles/Projects.css";

function Blogs() {
  return (
    <div className="projects">
      <h1> My Blogs</h1>
      <div className="projectList">
        {BlogList.map((blog, idx) => {
          return (
            <BlogItem id={idx} name={blog.name} image={blog.image} url={blog.url} />
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;