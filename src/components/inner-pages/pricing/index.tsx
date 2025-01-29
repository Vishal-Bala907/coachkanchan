import BreadCrumb from "@/components/common/BreadCrumb"
import PricingArea from "./PricingArea"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"

const Pricing = () => {
   return (
      <>
         <HeaderOne headerTop={false} />
         <BreadCrumb title="Pricing Plan" />
         <PricingArea />
         <FooterOne />
      </>
   )
}

export default Pricing
