import BreadCrumb from "@/components/common/BreadCrumb"
import TeamArea from "./TeamArea"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"

const Team = () => {
  return (
    <>
      <HeaderOne headerTop={false} />
      <BreadCrumb title="Team" />
      <TeamArea />
      <FooterOne />
    </>
  )
}

export default Team
