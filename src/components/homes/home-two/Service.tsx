"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

import service_shape from "@/assets/img/arrow-shape.png"

interface DataType {
   id: number;
   thumb: string;
   title: JSX.Element;
}[];

const service_data: DataType[] = [
   {
      id: 1,
      thumb: "/assets/img/service/01.jpg",
      title: (<>Construction & <br />Engineering</>),
   },
   {
      id: 2,
      thumb: "/assets/img/service/02.jpg",
      title: (<>Construction & <br />Engineering</>),
   },
   {
      id: 3,
      thumb: "/assets/img/service/03.jpg",
      title: (<>Construction & <br />Engineering</>),
   },
   {
      id: 4,
      thumb: "/assets/img/service/04.jpg",
      title: (<>Construction & <br />Engineering</>),
   },
   {
      id: 5,
      thumb: "/assets/img/service/02.jpg",
      title: (<>Construction & <br />Engineering</>),
   },
];

const setting = {
   loop: true,
   spaceBetween: 24,
   speed: 800,
   autoplay: {
      delay: 4000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".dot",
      clickable: true,
   },
   breakpoints: {
      1440: {
         slidesPerView: 4,
      },
      992: {
         slidesPerView: 3,
      },
      575: {
         slidesPerView: 2,
      },
      320: {
         slidesPerView: 1,
      },
   },
}

const Service = () => {
   return (
      <section className="service-section fix section-padding">
         <div className="container">
            <div className="section-title-area">
               <div className="section-title">
                  <span className="wow fadeInUp">Our Services</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                     Our Awesome Services For <br />Industrial Company
                  </h2>
               </div>
               <Link href="/service" className="theme-btn-2 wow fadeInUp" data-wow-delay=".5s">
                  View All Services
                  <span className="shape-img">
                     <Image src={service_shape} alt="shape-img" />
                  </span>
               </Link>
            </div>
            <div className="service-wrapper">
               <Swiper {...setting} className="swiper service-slider">
                  {service_data.map((item) => (
                     <SwiperSlide key={item.id} className="swiper-slide">
                        <div className="single-service-items">
                           <div className="service-image bg-cover" style={{ backgroundImage: `url(${item.thumb})` }}>
                              <Link href="/service-details" className="post-box">
                                 <i className="fa-solid fa-location-arrow"></i>
                              </Link>
                              <div className="service-content">
                                 <h3>
                                    <Link href="/service-details">{item.title}</Link>
                                 </h3>
                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </section>
   )
}

export default Service
