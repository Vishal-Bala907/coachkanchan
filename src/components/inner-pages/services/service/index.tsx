import BreadCrumb from "@/components/common/BreadCrumb";
import ServiceArea from "./ServiceArea";
import FooterOne from "@/layouts/footers/FooterOne";
import Project from "@/components/homes/home-one/Project";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Contact from "./Contact";

const Service = () => {
  return (
    <>
      <HeaderOne headerTop={false} />
      <BreadCrumb title="Services" />
      <ServiceArea />
      {/* <Project /> */}
      <Contact />
      <FooterOne />
    </>
  );
};

export default Service;
