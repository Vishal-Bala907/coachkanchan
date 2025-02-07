import BreadCrumb from "@/components/common/BreadCrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import ServiceDetailsArea from "./ServiceDetailsArea";

const SericeDetails = ({ id }: any) => {
  return (
    <>
      <HeaderOne headerTop={false} />
      <BreadCrumb title="Course Details" />
      <ServiceDetailsArea id={id} />
      <FooterOne />
    </>
  );
};

export default SericeDetails;
