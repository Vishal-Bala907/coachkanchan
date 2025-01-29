import BreadCrumb from "@/components/common/BreadCrumb"
import ProjectDetailsArea from "./ProjectDetailsArea"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"

const ProjectDetails = () => {
  return (
    <>
      <HeaderOne headerTop={false} />
      <BreadCrumb title="Projects Details" />
      <ProjectDetailsArea />
      <FooterOne />
    </>
  )
}

export default ProjectDetails
