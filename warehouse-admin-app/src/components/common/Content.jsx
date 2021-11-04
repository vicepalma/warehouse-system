import * as React from "react";
import * as PropTypes from "prop-types";

import { Routes, Route } from "react-router-dom";

import Profile from '../profile/Profile';
import Home from "./Home";

export const Content = (props) => {
  return (
    <div className="content-wrapper">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

Content.displayName = "Content";
Content.propTypes = {
  page: PropTypes.string,
};
