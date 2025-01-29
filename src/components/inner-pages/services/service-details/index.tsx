import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceDetailsArea from "./ServiceDetailsArea"

const SericeDetails = () => {
  return (
    <>
      <HeaderOne headerTop={false} />
      <BreadCrumb title="Services Details" />
      <ServiceDetailsArea />
      <FooterOne />
    </>
  )
}

export default SericeDetails
