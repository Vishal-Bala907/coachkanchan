import BreadCrumb from "@/components/common/BreadCrumb"
import FaqArea from "./FaqArea"
import FooterOne from "@/layouts/footers/FooterOne"
import FaqContact from "./FaqContact"
import HeaderOne from "@/layouts/headers/HeaderOne"

const FAQ = () => {
   return (
      <>
         <HeaderOne headerTop={false} />
         <BreadCrumb title="Faq" />
         <FaqArea />
         <FaqContact padding={false} />
         <FooterOne />
      </>
   )
}

export default FAQ
