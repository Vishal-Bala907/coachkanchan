"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import VideoPopup from "@/modals/VideoPopup";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";

import hero_mask from "@/assets/img/hero/mask-shape-2.png";
import hero_thumb from "@/assets/img/hero/hero.png";

interface DataType {
   id: number;
   hero_bg: string;
   mask: StaticImageData;
   sub_title: string;
   title: string;
   desc: JSX.Element;
   thumb: StaticImageData;
}[];

const hero_data: DataType[] = [
   {
      id: 1,
      hero_bg: "assets/img/hero/hero-bg.jpg",
      mask: hero_mask,
      sub_title: "Special industrial",
      title: "Quality Leads With Industrial",
      desc: (
         <>fonsectetur adipiscing elit Aenean scelerisque augue vitae <br /> consequat Quisque eget congue!</>
      ),
      thumb: hero_thumb,
   },
   {
      id: 2,
      hero_bg: "assets/img/hero/hero-bg.jpg",
      mask: hero_mask,
      sub_title: "Special industrial",
      title: "Quality Leads With Industrial",
      desc: (
         <>fonsectetur adipiscing elit Aenean scelerisque augue vitae <br /> consequat Quisque eget congue!</>
      ),
      thumb: hero_thumb,
   },
   {
      id: 3,
      hero_bg: "assets/img/hero/hero-bg.jpg",
      mask: hero_mask,
      sub_title: "Special industrial",
      title: "Quality Leads With Industrial",
      desc: (
         <>fonsectetur adipiscing elit Aenean scelerisque augue vitae <br /> consequat Quisque eget congue!</>
      ),
      thumb: hero_thumb,
   },
];

const setting = {
   loop: true,
   slidesPerView: 1,
   effect: "fade",
   speed: 2000,
   autoplay: {
      delay: 4000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".dot",
      clickable: true,
   },
};

const Hero = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <section className="hero-section-3">
            <div className="swiper-dot">
               <div className="dot"></div>
            </div>
            <Swiper {...setting} modules={[Pagination, Navigation, EffectFade, Autoplay]} className="swiper hero-slider">
               {hero_data.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                     <div className="hero-3 bg-cover" style={{ backgroundImage: `url(${item.hero_bg})` }}>
                        <div className="mask-shape" data-animation="fadeInRight" data-delay="2.1s">
                           <Image src={item.mask} alt="shape-img" />
                        </div>
                        <div className="container">
                           <div className="row">
                              <div className="col-xl-8 col-lg-8">
                                 <div className="hero-content">
                                    <h5 data-animation="fadeInUp" data-delay="1.3s">{item.sub_title}</h5>
                                    <h1 data-animation="fadeInUp" data-delay="1.5s">{item.title}</h1>
                                    <p data-animation="fadeInUp" data-delay="1.7s">{item.desc}</p>
                                    <div className="hero-button">
                                       <Link href="/about" data-animation="fadeInUp" data-delay="1.9s" className="theme-btn">
                                          Explore More
                                       </Link>
                                       <span className="button-text">
                                          <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-btn ripple video-popup" data-animation="fadeInUp" data-delay="1.9s">
                                             <i className="fa-solid fa-play"></i>
                                          </a>
                                          <span data-animation="fadeInUp" data-delay="1.9s" className="ms-4 d-line">Play Video</span>
                                       </span>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-4 col-lg-4 mt-4 mt-lg-0">
                                 <div className="hero-image" data-animation="fadeInUp" data-delay="1.4s">
                                    <Image src={item.thumb} alt="hero-img" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </section>
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"Ml4XCF-JS0k"}
         />
      </>
   );
};

export default Hero;
