import BreadCrumb from "@/components/common/BreadCrumb"
import ContactArea from "./ContactArea"
import FooterOne from "@/layouts/footers/FooterOne"
import FaqContact from "../faq/FaqContact"
import HeaderOne from "@/layouts/headers/HeaderOne"

const Contact = () => {
   return (
      <>
         <HeaderOne headerTop={false} />
         <BreadCrumb title="Contact Us" />
         <FaqContact padding={true} />
         <ContactArea />
         <FooterOne />
      </>
   )
}

export default Contact
