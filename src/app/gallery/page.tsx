import Gallery from "@/components/inner-pages/gallery";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Dr. Kanchan",
};
const index = () => {
  return (
    <Wrapper>
      <Gallery />
    </Wrapper>
  );
};

export default index;
