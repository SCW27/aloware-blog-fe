import moment from "moment";
import React, { useState } from "react";
import { v4 } from "uuid";
import Modal from "./Modal";

const Comment = ({ comments, callback }) => {
  const [showModal, setShowModal] = useState(false);
  const [parentId, setParentId] = useState(null);

  return (
    <div className="col-md-12 ">
      <Modal
        show={showModal}
        title="Add Comment"
        callback={callback}
        callbackShow={setShowModal}
        parentId={parentId}
      />
      <div className="row">
        <div className="col-md-12">
          <ul className="m-0">
            {comments.map((layer1) => {
              return (
                <li
                  className="g-0 border p-2 rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                  key={v4()}
                >
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-subtitle text-muted">
                        {layer1.name} -{" "}
                        {new moment(layer1.created_at).format(
                          "MMM DD, Y HH:mm A"
                        )}
                      </h6>
                      <p className="card-text">{layer1.comment}</p>
                    </div>
                    <div className="card-footer">
                      <button
                        type="button"
                        className="btn btn-info text-white font-weight-bold"
                        onClick={() => {
                          setParentId(layer1.id);
                          setShowModal(true);
                        }}
                      >
                        Reply
                      </button>
                    </div>
                  </div>
                  {layer1 && layer1.comments && layer1.comments.length !== 0 ? (
                    layer1.comments.map((layer2) => {
                      return (
                        <ul className="mt-2" key={v4()}>
                          <li style={{ listStyle: "none" }}>
                            <div className="card">
                              <div className="card-body">
                                <h6 className="card-subtitle text-muted">
                                  {layer2.name}-{" "}
                                  {new moment(layer2.created_at).format(
                                    "MMM DD, Y HH:mm A"
                                  )}
                                </h6>
                                <p className="card-text">{layer2.comment}</p>
                              </div>
                              <div className="card-footer">
                                <button
                                  type="button"
                                  className="btn btn-info text-white font-weight-bold"
                                  onClick={() => {
                                    setParentId(layer2.id);
                                    setShowModal(true);
                                  }}
                                >
                                  Reply
                                </button>
                              </div>
                            </div>
                            {layer2 &&
                            layer2.comments &&
                            layer2.comments.length !== 0 ? (
                              layer2.comments.map((layer3) => {
                                return (
                                  <ul className="mt-2" key={v4()}>
                                    <li style={{ listStyle: "none" }}>
                                      <div className="card">
                                        <div className="card-body">
                                          <h6 className="card-subtitle text-muted">
                                            {layer3.name}-{" "}
                                            {new moment(
                                              layer3.created_at
                                            ).format("MMM DD, Y HH:mm A")}
                                          </h6>
                                          <p className="card-text">
                                            {layer3.comment}
                                          </p>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                );
                              })
                            ) : (
                              <></>
                            )}
                          </li>
                        </ul>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Comment;
