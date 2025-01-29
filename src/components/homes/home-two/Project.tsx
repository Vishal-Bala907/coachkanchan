"use client";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Controller, Autoplay } from "swiper/modules";
import { Swiper as SwiperCore, PaginationOptions } from "swiper/types";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import project_shape from "@/assets/img/arrow-shape.png";
import project_thumb1 from "@/assets/img/project/04.jpg";
import project_thumb2 from "@/assets/img/project/05.jpg";
import project_thumb3 from "@/assets/img/project/06.jpg";
import project_thumb4 from "@/assets/img/project/07.jpg";
import project_thumb5 from "@/assets/img/project/08.jpg";

interface DataType {
   id: number;
   title: string;
   desc: JSX.Element;
}

const project_data1: DataType[] = [
   {
      id: 1,
      title: "Road map Engineering",
      desc: (<>Industrial gases are everywhere. They are an <br /> integral part of modern manufacturing processes and play an essential role in many areas.</>),
   },
   {
      id: 2,
      title: "Road map Engineering",
      desc: (<>Industrial gases are everywhere. They are an <br /> integral part of modern manufacturing processes and play an essential role in many areas.</>),
   },
   {
      id: 3,
      title: "Road map Engineering",
      desc: (<>Industrial gases are everywhere. They are an <br /> integral part of modern manufacturing processes and play an essential role in many areas.</>),
   },
   {
      id: 4,
      title: "Road map Engineering",
      desc: (<>Industrial gases are everywhere. They are an <br /> integral part of modern manufacturing processes and play an essential role in many areas.</>),
   },
   {
      id: 5,
      title: "Road map Engineering",
      desc: (<>Industrial gases are everywhere. They are an <br /> integral part of modern manufacturing processes and play an essential role in many areas.</>),
   },
];

const thumb_data: StaticImageData[] = [project_thumb1, project_thumb2, project_thumb3, project_thumb4, project_thumb5];

const Project = () => {
   const contentSwiperRef = useRef<SwiperCore | null>(null);
   const imageSwiperRef = useRef<SwiperCore | null>(null);

   useEffect(() => {
      if (contentSwiperRef.current && imageSwiperRef.current) {
         contentSwiperRef.current.controller.control = imageSwiperRef.current;
         imageSwiperRef.current.controller.control = contentSwiperRef.current;
      }
   }, []);

   const setting = {
      speed: 1000,
      loop: true,
      centeredSlides: true,
      autoplay: {
         delay: 2000,
         disableOnInteraction: false,
      },
      pagination: {
         el: ".pegi-number",
         type: "fraction",
      } as PaginationOptions,
      navigation: {
         nextEl: ".arry-prev",
         prevEl: ".arry-next",
      },
   };

   return (
      <section className="project-section-2 fix section-bg section-padding">
         <div className="container">
            <div className="section-title-area">
               <div className="section-title">
                  <span className="wow fadeInUp">OUR COMPLETED PROJECTS</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">Successfully completed <br /> projects for our clients</h2>
               </div>
               <div className="news-button wow fadeInUp" data-wow-delay=".5s">
                  <Link href="/project" className="theme-btn-2">
                     View All Projects
                     <span className="shape-img">
                        <Image src={project_shape} alt="shape-img" />
                     </span>
                  </Link>
               </div>
            </div>

            <div className="project-wrapper-2">
               <div className="row">
                  <div className="col-xl-6 col-lg-6">
                     <div className="project-content-area">
                        <p className="wow fadeInUp" data-wow-delay=".4s">
                           We have facility to produce advance work various industrial <br /> applications based on specially developed technol-ogy.
                        </p>
                        <div className="row g-3">
                           <div className="col-sm-4">
                              <div className="pegi-wrp">
                                 <div className="pegi-number">
                                 </div>
                              </div>
                           </div>

                           <div className="col-sm-8">
                              <Swiper {...setting}
                                 modules={[Pagination, Navigation, Controller, Autoplay]}
                                 className="swiper project-content-slider"
                                 onSwiper={(swiper) => (contentSwiperRef.current = swiper)}>
                                 {project_data1.map((item) => (
                                    <SwiperSlide key={item.id} className="swiper-slide">
                                       <div className="project-content">
                                          <h4>{item.title}</h4>
                                          <p>{item.desc}</p>
                                       </div>
                                    </SwiperSlide>
                                 ))}
                              </Swiper>
                           </div>
                        </div>
                        <div className="arry-button center">
                           <button className="arry-prev"><i className="fas fa-chevron-left"></i></button>
                           <button className="arry-next"><i className="fas fa-chevron-right"></i></button>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-6 col-lg-6">
                     <Swiper
                        {...setting}
                        modules={[Pagination, Navigation, Controller, Autoplay]}
                        className="swiper project-image-slider"
                        onSwiper={(swiper) => (imageSwiperRef.current = swiper)}
                     >
                        {thumb_data.map((thumb, i) => (
                           <SwiperSlide key={i} className="swiper-slide">
                              <div className="project-image">
                                 <Image src={thumb} alt="project-image" />
                              </div>
                           </SwiperSlide>
                        ))}
                     </Swiper>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Project;
