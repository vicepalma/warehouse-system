import * as React from "react";
import * as PropTypes from "prop-types";

export const Footer = (props) => {
  return (
    <footer className="main-footer">
      <strong>
        Copyright ©
        All Rights Reserved&nbsp;
        <a href="https://aunablockchain.com/">Auna</a>
      </strong>
      <div className="float-right d-none d-sm-inline-block">
        <b>Version</b> 1.0
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";
Footer.propTypes = {
  page: PropTypes.string,
};
