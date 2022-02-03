import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar fixed-top navbar-expand-lg navbar-dark bg "
          style={{ backgroundColor: "#000000" }}
        >
          -
          <div className="container-fluid  ">
            <span style={{ color: "#0000FF", fontSize: "40px" }}>D</span>
            <span style={{ color: "white", fontSize: "25px" }}>aily</span>
            <span style={{ color: "red", fontSize: "40px" }}>N</span>
            <span
              style={{ color: "white", fontSize: "25px", marginRight: "50px" }}
            >
              ews
            </span>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div 
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav me-auto mb-2 mb-lg-0  "
                style={{ fontSize: "20px" ,marginLeft:"20%",}}
              >
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
