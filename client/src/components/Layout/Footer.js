import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      className="footer "
      style={{ padding: "20px 0", backgroundColor: "black" }}
    >
      <h5 className="text-center p-0 m-0">
        &copy; All Right Reserved by Lyallpur Collections
      </h5>
      {/* <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p> */}
    </div>
  );
};

export default Footer;
