import BreadCrumb from "@/components/common/BreadCrumb"
import BlogArea from "./BlogArea"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"

const BlogOne = () => {
   return (
      <>
         <HeaderOne headerTop={false} />
         <BreadCrumb title="Blog Grid" />
         <BlogArea />
         <FooterOne />
      </>
   )
}

export default BlogOne
