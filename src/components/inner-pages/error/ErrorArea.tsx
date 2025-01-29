import Image from "next/image"
import Link from "next/link"

import error_img from "@/assets/img/404.png"
import error_shape from "@/assets/img/arrow-shape.png"

const ErrorArea = () => {
   return (
      <section className="error-section section-padding fix">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xxl-8">
                  <div className="error-content text-center">
                     <div className="error-image wow fadeInUp" data-wow-delay=".3s">
                        <Image src={error_img} alt="img" />
                     </div>
                     <h2 className="wow fadeInUp" data-wow-delay=".5s">Page Not Found</h2>
                     <p className="wow fadeInUp mt-4" data-wow-delay=".7s">
                        We have facility to produce advance work various industrial applications based on <br /> specially developed technol-ogy. We are also ready
                     </p>
                     <Link href="/" className="theme-btn-2 mt-5 padding-style wow fadeInUp" data-wow-delay=".9s">
                        Go Back Home
                        <span className="shape-img">
                           <Image src={error_shape} alt="shape-img" />
                        </span>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ErrorArea
