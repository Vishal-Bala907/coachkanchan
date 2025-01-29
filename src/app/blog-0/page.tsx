import BlogDetails from "@/components/inner-pages/blogs/blog-details";
import Wrapper from "@/layouts/Wrapper";
import React from "react";

export const metadata = {
  title:
    "Blog Details industril - Factory and Industrial React Next js Template",
};
const page = () => {
  return (
    <div>
      <Wrapper>
        <BlogDetails />
      </Wrapper>
    </div>
  );
};

export default page;
