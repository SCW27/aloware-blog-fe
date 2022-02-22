import React, { useEffect, useState } from "react";
import Comment from "./components/Comment";
import { getPost, addComment } from "../../API/backend";
import Swal from "sweetalert2";

const Landing = () => {
  const [blog, setBlog] = useState(null);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    callback();
  }, []);

  const callback = () => {
    getPost(1)
      .then((res) => {
        setBlog(res.data);
      })
      .catch((e) => {});
  };

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
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="mb-1">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Please enter your name..."
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <label htmlFor="comment" className="form-label mt-2">
                  Comment
                </label>
                <textarea
                  value={comment}
                  className="form-control"
                  id="comment"
                  rows="2"
                  placeholder="Please end your comments here..."
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                ></textarea>
              </div>
              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={() => {
                  Swal.fire({
                    title: "Comment",
                    icon: "info",
                    text: "Adding Comment...",
                    showCancelButton: false,
                    showConfirmButton: false,
                  });
                  addComment(name, comment, 0, 1).then((res) => {
                    Swal.fire({
                      title: "Comment",
                      icon: "info",
                      text: "Comment Added",
                    })
                      .then(() => {
                        setComment("");
                        setName("");
                        getPost(1)
                          .then((res) => {
                            setBlog(res.data);
                          })
                          .catch((e) => {});
                      })
                      .catch((e) => {
                        Swal.fire({
                          title: "Comment",
                          icon: "error",
                          text: "Saving comment failed",
                        });
                      });
                  });
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <Comment
          comments={blog && blog.comments ? blog.comments : []}
          callback={callback}
        />
      </div>
    </main>
  );
};

export default Landing;
