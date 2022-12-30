import React from "react";
import './Trending.css';

const Loader = () => {
  return (
    // <div className="loader">
    //   <i className="fas fa-spinner fa-4x fa-spin" />
    // </div>
    <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>
</div>
  );
};

export default Loader;
