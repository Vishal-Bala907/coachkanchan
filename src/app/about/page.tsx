import About from "@/components/inner-pages/about";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Dr. Kanchan ji",
};
const index = () => {
   return (
      <Wrapper>
         <About />
      </Wrapper>
   )
}

export default index