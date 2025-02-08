import BreadCrumb from "@/components/common/BreadCrumb";
import BlogDetailsArea from "./BlogDetailsArea";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";

const BlogDetails = ({ id }: any) => {
  return (
    <>
      <HeaderOne headerTop={false} />
      <BreadCrumb title="Sustainable Packaging" />
      <BlogDetailsArea id={id} />
      <FooterOne />
    </>
  );
};

export default BlogDetails;
