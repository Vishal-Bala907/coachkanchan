import BreadCrumb from "@/components/common/BreadCrumb"
import ProjectArea from "./ProjectArea"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"

const Project = () => {
  return (
    <>
      <HeaderOne headerTop={false} />
      <BreadCrumb title="Projects" />
      <ProjectArea />
      <FooterOne />
    </>
  )
}

export default Project
