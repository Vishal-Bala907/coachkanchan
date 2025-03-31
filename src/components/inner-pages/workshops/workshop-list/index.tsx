import BreadCrumb from "@/components/common/BreadCrumb";
import WorkshopArea from "./WorkshopArea";
import FooterOne from "@/layouts/footers/FooterOne";
import Project from "@/components/homes/home-one/Project";
import HeaderOne from "@/layouts/headers/HeaderOne";
import WorkshopContact from "./Contact";

const Workshop = () => {
  return (
    <>
      <HeaderOne headerTop={false} />
      <BreadCrumb title="Workshops" />
      <WorkshopArea />
      {/* <Project /> */}
      <WorkshopContact />
      <FooterOne />
    </>
  );
};

export default Workshop;
