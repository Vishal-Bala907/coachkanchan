import NotFound from "@/components/inner-pages/error";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "404 || industril - Factory and Industrial React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <NotFound />
      </Wrapper>
   )
}

export default index