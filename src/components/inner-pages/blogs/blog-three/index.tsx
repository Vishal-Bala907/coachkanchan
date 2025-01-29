import BreadCrumb from "@/components/common/BreadCrumb"
import BlogThreeArea from "./BlogThreeArea"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"

const BlogThree = () => {
   return (
      <>
         <HeaderOne headerTop={false} />
         <BreadCrumb title="Blog Standard" />
         <BlogThreeArea />
         <FooterOne />
      </>
   )
}

export default BlogThree
