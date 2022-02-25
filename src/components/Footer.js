import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer pt-5">
        <div className="row p-2 pb-5 mx-lg-5">
          <div className="col-md-4 mt-5 p-0">
            <h4 className="text-center text-white">Contents</h4>
            <div className="d-flex align-items-center justify-content-center flex-column">
              <NavLink className="nav-link text-white" to="/">
                About
              </NavLink>
              <NavLink className="nav-link text-white" to="/">
                Sponsers
              </NavLink>
              <NavLink className="nav-link text-white" to="/">
                Why us ?
              </NavLink>
              <NavLink className="nav-link text-white" to="/">
                Our Team
              </NavLink>
            </div>
          </div>
          <div className="col-md-4 mt-5 p-0 align-items-center social">
            <p className="text-center text-white">Social Media Handles</p>
            <div className="d-flex justify-content-center align-items-center">
              <NavLink className="nav-link text-white" to="/">
                <img
                  src="/assets/twitter.png"
                  alt="Twitter"
                  srcSet=""
                  className="img-fluid"
                />
              </NavLink>
              <NavLink className="nav-link text-white" to="/">
                <img
                  src="/assets/linkedin.png"
                  alt="linkedin"
                  className="img-fluid"
                />
              </NavLink>
              <NavLink className="nav-link text-white" to="/">
                <img
                  src="/assets/instagram.png"
                  alt="instagram"
                  className="img-fluid"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;