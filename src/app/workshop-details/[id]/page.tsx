import SericeDetails from "@/components/inner-pages/services/service-details";
import WorkshopDetails from "@/components/inner-pages/workshops/workshop-details";
import WorkshopDetailsArea from "@/components/inner-pages/workshops/workshop-details/WorkshopDetailsArea";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "",
};
const index = async ({ params }: { params: { id: any } }) => {
  const { id } = await params;
  return (
    <Wrapper>
      <WorkshopDetails id={id} />
    </Wrapper>
  );
};

export default index;
