import BreadCrumb from "@/components/common/BreadCrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import BlogDetailsArea2 from "../blog2/BlogDetails2";
import FooterOne from "@/layouts/footers/FooterOne";
import BlogContent3 from "./BlogContent3";

const Blog3 = () => {
  return (
    <div>
      <HeaderOne headerTop={false} />
      <BreadCrumb title="Packaging Innovations for Pharmaceuticals" />
      <BlogContent3 />
      <FooterOne />
    </div>
  );
};

export default Blog3;
