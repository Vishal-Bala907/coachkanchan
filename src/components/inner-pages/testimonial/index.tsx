import BreadCrumb from "@/components/common/BreadCrumb"
import TestimonialArea from "./TestimonialArea"
import FooterOne from "@/layouts/footers/FooterOne"
import TestimonialSection from "@/components/homes/home-one/Testimonial"
import HeaderOne from "@/layouts/headers/HeaderOne"

const Testimonial = () => {
   return (
      <>
         <HeaderOne headerTop={false} />
         <BreadCrumb title="Client Feedback" />
         <TestimonialArea />
         <TestimonialSection padding={true} />
         <FooterOne />
      </>
   )
}

export default Testimonial
