import Workshop from "@/components/inner-pages/workshops/workshop-list"; // Ensure this path is correct
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Dr. Kanchan | Workshops",
};

const WorkshopPage = () => {
  return (
    <Wrapper>
      <Workshop />
    </Wrapper>
  );
};

export default WorkshopPage;
