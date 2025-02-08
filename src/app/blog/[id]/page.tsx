import BlogDetails from "@/components/inner-pages/blogs/blog-details";
import Wrapper from "@/layouts/Wrapper";
import React from "react";

export const metadata = {
  title:
    "Blog Details kanchan -",
};
const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div>
      <Wrapper>
        <BlogDetails id={id} />
      </Wrapper>
    </div>
  );
};

export default page;
