/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ maxWidth: "18rem" }}>
          <span
            style={{ zIndex: "1", left: "90%" }}
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://bitsofco.de/content/images/2018/12/broken-1.png"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} at{" "}
                {new Date(publishedAt).toGMTString()} mins ago
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
