import React, { useState } from "react";
import Swal from "sweetalert2";
import { addComment } from "../../../API/backend";

const Modal = ({ show, title, callback, callbackShow, parentId }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  return (
    <>
      <div
        className={`modal fade ${show ? "show" : ""}`}
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: show ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {title}
              </h5>
            </div>
            <div className="modal-body">
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
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  Swal.fire({
                    title: "Comment",
                    icon: "info",
                    text: "Adding Comment...",
                    showCancelButton: false,
                    showConfirmButton: false,
                  });
                  addComment(name, comment, parentId, 0)
                    .then((res) => {
                      Swal.fire({
                        title: "Comment",
                        icon: "info",
                        text: "Comment Added",
                      }).then(() => {
                        setComment("");
                        setName("");
                        callback();
                        callbackShow(false);
                      });
                    })
                    .catch((e) => {
                      Swal.fire({
                        title: "Comment",
                        icon: "error",
                        text: "Saving comment failed",
                      });
                    });
                }}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => {
                  callbackShow(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
