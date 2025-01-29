import BreadCrumb from "@/components/common/BreadCrumb"
import ErrorArea from "./ErrorArea"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"

const NotFound = () => {
   return (
      <>
         <HeaderOne headerTop={false} />
         <BreadCrumb title="Error Page" />
         <ErrorArea />
         <FooterOne />
      </>
   )
}

export default NotFound
