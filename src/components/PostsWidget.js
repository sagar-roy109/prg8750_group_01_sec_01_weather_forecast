import React from "react";

function PostsWidget() {
  return (
    <>
      <div className="post-widget">
        <ul>
          <li>
            <div className="post-image">
              <a href="#">
                <img
                  src="https://www.littlethings.info/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg"
                  className="img-fluid"
                  alt="post image"
                />
              </a>
            </div>
            <h6 className="post-title">
              {" "}
              <a href="#">Dummy Post Title</a>{" "}
            </h6>
          </li>
          <li>
            <div className="post-image">
              <a href="#">
                <img
                  src="https://www.littlethings.info/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg"
                  className="img-fluid"
                  alt="post image"
                />
              </a>
            </div>
            <h6 className="post-title">
              {" "}
              <a href="#">Dummy Post Title</a>{" "}
            </h6>
          </li>
          <li>
            <div className="post-image">
              <a href="#">
                <img
                  src="https://www.littlethings.info/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg"
                  className="img-fluid"
                  alt="post image"
                />
              </a>
            </div>
            <h6 className="post-title">
              {" "}
              <a href="#">Dummy Post Title</a>{" "}
            </h6>
          </li>
          <li>
            <div className="post-image">
              <a href="#">
                <img
                  src="https://www.littlethings.info/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg"
                  className="img-fluid"
                  alt="post image"
                />
              </a>
            </div>
            <h6 className="post-title">
              {" "}
              <a href="#">Dummy Post Title</a>{" "}
            </h6>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PostsWidget;
