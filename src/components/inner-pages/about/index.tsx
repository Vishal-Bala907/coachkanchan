import BreadCrumb from "@/components/common/BreadCrumb";
import AboutArea from "./AboutArea";
import FooterOne from "@/layouts/footers/FooterOne";
import Counter from "@/components/common/Counter";
import Video from "@/components/homes/home-two/Video";
import Testimonial from "@/components/homes/home-three/Testimonial";
import HeaderOne from "@/layouts/headers/HeaderOne";
import AboutTwo from "./AboutTwo";

const About = () => {
  return (
    <>
      <HeaderOne headerTop={false} />
      <BreadCrumb title="About Us" />
      <AboutArea />
      {/* <Counter padding={false} /> */}
      {/* <Video /> */}
      <AboutTwo />
      <Testimonial padding={false} />
      <FooterOne />
    </>
  );
};

export default About;
