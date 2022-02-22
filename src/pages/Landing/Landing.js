import React, { useEffect, useState } from "react";
import Comment from "./components/Comment";
import { getPost } from "../../API/backend";

const Landing = () => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    getPost(1)
      .then((res) => {
        setBlog(res.data);
      })
      .catch((e) => {});
  }, []);

  return (
    <main className="container">
      <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 fst-italic">
            {blog && blog.title ? blog.title : "Loading..."}
          </h1>
          <p className="lead my-3">
            {blog && blog.content ? blog.content : "Loading..."}
          </p>
        </div>
      </div>

      <div className="row mb-2">
        <Comment comments={blog && blog.comments ? blog.comments : []} />
      </div>
    </main>
  );
};

export default Landing;
