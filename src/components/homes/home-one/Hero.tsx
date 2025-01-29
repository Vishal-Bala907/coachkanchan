"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";

import hero_shape_1 from "@/assets/img/hero/mask-shape.png";
import hero_shape_2 from "@/assets/img/arrow-shape.png";

interface DataType {
  id: number;
  bg_img: string;
  sub_title: string;
  title: string;
}
[];

const hero_data: DataType[] = [
  {
    id: 1,
    bg_img: "/assets/img/gallery/coaching-ethik-DCA.jpg",
    sub_title: "Special industrial",
    title: "Industrial Manufacturing Forging The future",
  },
  {
    id: 2,
    // bg_img: "/assets/img/hero/hero-2.jpg",
    bg_img: "/assets/img/gallery/mindset-3455748_1920.jpg",
    sub_title: "Special industrial",
    title: "Industrial Manufacturing Forging The future",
  },
  {
    id: 3,
    bg_img: "/assets/img/gallery/monk-6113501_1920.png",
    sub_title: "Special industrial",
    title: "Industrial Manufacturing Forging The future",
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
      <section className="hero-section">
        <ul className="hero-social">
          <li>
            <Link href="#0">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
          </li>
          <li>
            <Link href="#0" className="active">
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link href="#0">
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </li>
          <li>
            <Link href="#0">
              <i className="fa-brands fa-youtube"></i>
            </Link>
          </li>
        </ul>

        <div className="swiper-dot">
          <div className="dot"></div>
        </div>
        <Swiper
          {...setting}
          modules={[Pagination, EffectFade, Autoplay]}
          className="swiper hero-slider"
          effect="fade"
        >
          {hero_data.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div
                className="hero-1 bg-cover"
                style={{ backgroundImage: `url(${item.bg_img})` }}
              >
                <div
                  className="shape-image"
                  data-animation="fadeInLeft"
                  data-delay="2.2s"
                >
                  <Image src={hero_shape_1} alt="shape-img" />
                </div>
                <div className="container">
                  <div className="row g-4 align-items-center justify-content-between">
                    <div className="col-xl-9">
                      <div className="hero-content">
                        <h2 data-animation="fadeInUp" data-delay="1.3s">
                          {/* Welcome to{" "} */}
                          Kanchan The &nbsp;
                          <span style={{ color: "#ffe000" }}>
                            Mindset Coach
                          </span>
                        </h2>
                        <h2 data-animation="fadeInUp" data-delay="1.5s">
                          Unlock Your Potential with Kanchan <br />- Transform
                          Your Mind <br /> - Transform Your Life!
                        </h2>
                        <p style={{ color: "white", whiteSpace: "none" }}>
                          Take Charge of Your Mindset & Growth!
                        </p>
                        <div className="hero-button">
                          <Link
                            href="/about"
                            data-animation="fadeInUp"
                            data-delay="1.7s"
                            className="theme-btn"
                            style={{
                              backgroundColor: "#00394f",
                            }}
                          >
                            Explore More
                          </Link>
                          <Link
                            href="/about"
                            data-animation="fadeInUp"
                            data-delay="1.7s"
                            className="theme-btn-2 white-border"
                          >
                            Our Services
                            <span className="shape-img">
                              <Image src={hero_shape_2} alt="shape-img" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-xl-2">
                      <div className="video-box">
                        <a
                          onClick={() => setIsVideoOpen(true)}
                          style={{ cursor: "pointer" }}
                          className="video-btn ripple video-popup"
                          data-animation="fadeInUp"
                          data-delay="1.4s"
                        >
                          <i className="fa-solid fa-play"></i>
                        </a>
                      </div>
                    </div> */}
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
