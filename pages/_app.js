import React from "react";
import "antd/dist/antd.css";
import Head from "next/head";
import PropTypes from "prop-types";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <div>공통 메뉴</div>
      <Component />
    </>
  );
};

NodeBird.prototype = {
  Component: PropTypes.elementType.isRequired,
};

export default NodeBird;
