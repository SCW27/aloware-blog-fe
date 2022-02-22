import React from "react";

const CommentBox = () => {
  return (
    <div className="row g-0 border rounded overflow-hidden shadow-sm h-md-250 position-relative">
      <div className="col m-2">
        <div class="mb-1">
          <textarea
            placeholder="Comment here..."
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
