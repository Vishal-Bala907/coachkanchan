import BreadCrumb from "@/components/common/BreadCrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import WorkshopDetailsArea from "./WorkshopDetailsArea";

const WorkshopDetails = ({ id }: any) => {
  console.log("worksop id", id);

  return (
    <>
      <HeaderOne headerTop={false} />
      <BreadCrumb title="Workshop Details" />
      <WorkshopDetailsArea id={id} />
      <FooterOne />
    </>
  );
};

export default WorkshopDetails;
