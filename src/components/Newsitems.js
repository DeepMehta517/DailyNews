import React, { Component } from "react";

export class Newsitems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, releasedate, author, source } =
      this.props;

    return (
      <div>
        <div className="card" style={{ height: "550px" }}>
          <div style={{display:'flex',justifyConent:'flex-end',position:'absolute',right:'0'}}>
            <span className=" badge rounded-pill bg-danger end ">{source}</span>
          </div>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "250px", fit: "contain" }}
          />
          <div className="card-body">
            <h5
              className="card-title "
              style={{ height: "80px", fontWeight: "bold" }}
            >
              {title}{" "}
            </h5>
            <p className="card-text " style={{ height: "80px" }}>
              {description}{" "}
            </p>
            <p
              className="publishedat text-end"
              style={{ height: "30px", fontWeight: "bold", color: "gray" }}
            >
              Published by {author} on {releasedate}
            </p>
            <a
              href={newsUrl}
              className="btn btn-sm btn-primary"
              style={{ width: "100%" }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitems;
