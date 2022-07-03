import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState("");

  useEffect(() => {
    fetch("blogdata.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h1>This is blog page {blogs.length}</h1>
      <Blog />
    </div>
  );
};

export default Blogs;
