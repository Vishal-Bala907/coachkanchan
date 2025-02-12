"use client";
import React from "react";
import { Discuss } from "react-loader-spinner";
const DiscussSpinner = () => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Discuss
        visible={true}
        height="80"
        width="80"
        ariaLabel="discuss-loading"
        wrapperStyle={{}}
        wrapperClass="discuss-wrapper"
        // color="#fff"
        // backgroundColor="#F4442E"
      />
    </div>
  );
};

export default DiscussSpinner;
