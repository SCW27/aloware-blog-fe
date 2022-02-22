import moment from "moment";
import React from "react";
import { v4 } from "uuid";

const Comment = ({ comments }) => {
  return (
    <div className="col-md-12 ">
      <div className="row">
        <div className="col-md-12">
          <ul>
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
