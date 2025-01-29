import FooterOne from "@/layouts/footers/FooterOne"
import Blog from "../home-one/Blog"
import About from "./About3"
import Hero from "./Hero"
import MarqueSection from "./MarqueSection"
import Project from "./Project"
import Service from "./Service"
import Testimonial from "./Testimonial"
import Video from "./Video"
import HeaderTwo from "@/layouts/headers/HeaderTwo"
import CounterTwo from "@/components/common/CounterTwo"

const HomeTwo = () => {
  return (
    <>
      <HeaderTwo />
      <Hero />
      <Service />
      <MarqueSection />
      <About />
      <CounterTwo />
      <Project />
      <Testimonial />
      <Video />
      <Blog />
      <FooterOne />
    </>
  )
}

export default HomeTwo
