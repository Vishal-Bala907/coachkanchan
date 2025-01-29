import FooterOne from "@/layouts/footers/FooterOne"
import Blog from "../home-one/Blog"
import Project from "../home-two/Project"
import About from "./About2"
import Hero from "./Hero"
import Service from "./Service"
import Testimonial from "./Testimonial"
import HeaderThree from "@/layouts/headers/HeaderThree"
import CounterTwo from "@/components/common/CounterTwo"

const HomeThree = () => {
   return (
      <>
         <HeaderThree />
         <Hero />
         <About />
         <CounterTwo />
         <Service />
         <Project />
         <Testimonial padding={true} />
         <Blog />
         <FooterOne />
      </>
   )
}

export default HomeThree
