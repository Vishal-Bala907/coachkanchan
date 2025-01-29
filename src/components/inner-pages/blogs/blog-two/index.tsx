import BreadCrumb from "@/components/common/BreadCrumb"
import BlogTwoArea from "./BlogTwoArea"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"

const BlogTwo = () => {
   return (
      <>
         <HeaderOne headerTop={false} />
         <BreadCrumb title="Blog with Sidebar" />
         <BlogTwoArea />
         <FooterOne />
      </>
   )
}

export default BlogTwo
