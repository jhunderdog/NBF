import React from "react";
import "antd/dist/antd.css";
import Head from "next/head";
import PropTypes from "prop-types";

import wrapper from "../store/configureStore";
const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.prototype = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
