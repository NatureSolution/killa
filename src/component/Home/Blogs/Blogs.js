import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    fetch("blogdata.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const array1 = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1>This is blog page</h1>

      <div>
        <Blog />
      </div>
    </div>
  );
};

export default Blogs;
