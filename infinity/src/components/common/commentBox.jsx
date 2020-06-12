import React from "react";
const CommentBox = ({ onComment }) => {
  return (
    <div className="container comment-container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card card-info">
            <div className="card-block">
              <textarea
                placeholder="Write your comment here!"
                className="comment-textarea"
              ></textarea>
              <form className="form-inline">
                <div className="btn-group">
                  <span className="fa fa-picture-o fa-lg m-1"></span>
                  <span className="fa fa-video-camera fa-lg m-1"></span>
                  <span className="fa fa-microphone fa-lg m-1"></span>
                  <span className="fa fa-music fa-lg m-1"></span>
                </div>
                <button
                  className="btn btn-primary float-xs-right"
                  type="button"
                  onClick={onComment}
                >
                  Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
