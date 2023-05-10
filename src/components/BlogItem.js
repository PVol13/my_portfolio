import React from "react";
//import { useNavigate } from "react-router-dom";

function BlogItem({ image, name, url }) {
  //const navigate = useNavigate();
  return (
    <a style={{textDecoration: 'none'}} href= {url}>
    <div
      className="projectItem"
      
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1 > {name} </h1>
    </div>
    </a>
  );
}

export default BlogItem;