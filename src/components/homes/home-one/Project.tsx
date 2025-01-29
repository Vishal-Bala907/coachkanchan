"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import project_data from "@/data/ProjectData";
import Link from "next/link";
import Image from "next/image";

import shape_1 from "@/assets/img/arrow-shape.png";

const setting = {
  spaceBetween: 30,
  speed: 1300,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
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
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

const Project = () => {
  return (
    <section className="project-section fix section-padding pb-0 mt-30">
      <div className="container">
        <div className="line-area">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="project-wrapper pb-0">
          <div className="swiper-dot-2">
            <div className="dot-3"></div>
          </div>
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-6">
              <div className="section-title">
                <span className="wow fadeInUp" data-wow-delay=".3s">
                  OUR COMPLETED PROJECTS
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".5s">
                  Successfully completed projects for our clients
                </h2>
              </div>
            </div>

            <div className="col-xl-8 mt-3 mt-xl-0">
              <div className="project-header">
                <div className="row">
                  <div className="col-md-8">
                    <p className="wow fadeInUp" data-wow-delay=".3s">
                      With manufacturing facilities in Ankleshwar and Panoli, we
                      specialize in providing custom-made and industry-standard
                      packaging solutions for Agrochemicals, Pesticides,
                      Fungicides, Bio-nutrients, Farm Chemicals, and more.
                    </p>
                  </div>
                  <div
                    className="col-md-4 text-end ps-0 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <Link href="/project" className="theme-btn-2">
                      View All Projects
                      <span className="shape-img">
                        <Image src={shape_1} alt="shape-img" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <Swiper
                {...setting}
                modules={[Pagination, Autoplay]}
                className="swiper project-slider"
              >
                {project_data
                  .filter((items) => items.page === "home_1")
                  .map((item) => (
                    <SwiperSlide key={item.id} className="swiper-slide">
                      <div
                        className="project-image bg-cover"
                        style={{ backgroundImage: `url(${item.thumb})` }}
                      >
                        <Link href="/project-details" className="post-box">
                          <i className="fa-solid fa-location-arrow"></i>
                        </Link>
                        <div className="project-content">
                          <h4>
                            <Link href="/project-details">{item.title}</Link>
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
