"use client"
import Image from "next/image"
import Link from "next/link"
import service_data from "@/data/ServiceData"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import service_shape from "@/assets/img/arrow-shape.png"

const setting = {
   loop: true,
   spaceBetween: 24,
   speed: 800,
   autoplay: {
      delay: 4000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".dot-3",
      clickable: true,
   },
   breakpoints: {
      1199: {
         slidesPerView: 3,
      },
      992: {
         slidesPerView: 2,
      },
      575: {
         slidesPerView: 1,
      },
      320: {
         slidesPerView: 1,
      },
   },
}

const Service = () => {
   return (
      <section className="service-section-2 fix section-padding pt-0">
         <div className="container">
            <div className="section-title-area">
               <div className="section-title">
                  <span className="wow fadeInUp">Our Services</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">Our Awesome Services For <br /> Industrial Company</h2>
               </div>
               <Link href="/service" className="theme-btn-2 wow fadeInUp" data-wow-delay=".5s">
                  View All Services
                  <span className="shape-img">
                     <Image src={service_shape} alt="shape-img" />
                  </span>
               </Link>
            </div>
            <Swiper {...setting} modules={[Pagination]} className="swiper service-slider-2">
               {service_data.filter((items) => items.page === "home_3").map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                     <div className="service-items-2">
                        <div className="service-image">
                           <Image src={item.icon} alt="service-img" />
                        </div>
                        <div className="service-content">
                           <h3>
                              <Link href="/service-details">{item.title}</Link>
                           </h3>
                           <p>{item.desc}</p>
                           <Link href="/service-details" className="theme-btn-2 padding-style mt-4">
                              Read More
                              <span className="shape-img">
                                 <Image src={service_shape} alt="shape-img" />
                              </span>
                           </Link>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
               <div className="swiper-dot pt-5 text-center">
                  <div className="dot-3"></div>
               </div>
            </Swiper>
         </div>
      </section >
   )
}

export default Service
