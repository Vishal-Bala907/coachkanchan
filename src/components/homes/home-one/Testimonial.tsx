"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Controller, Autoplay } from "swiper/modules";
import { useRef, useEffect } from "react";

interface DataType {
  id: number;
  desc: string;
  name: string;
  designation: string;
  tempData: string;
}
[];

const testi_data: DataType[] = [
  {
    id: 1,
    desc: "Our journey began in 1984 with a vision to revolutionize the packaging industry. With dedication and innovation, we’ve built a legacy of trust, quality, and customer satisfaction that continues to guide us today",
    name: "Suresh Nahar Ji",
    designation: "Founder’s Message",
    tempData: "- Founder",
  },
  {
    id: 2,
    desc: "At Shri Navkar Blowpack, we strive for excellence by blending cutting-edge technology with customer-centric solutions. Together, we aim to deliver packaging that sets industry benchmarks and fosters long-term partnership.",
    name: "Deepak Nahar Ji",
    designation: "MD’s Message",
    tempData: "- Managing Director",
  },
  // {
  //    id: 3,
  //    desc: "posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu. Aenean non odio porttitor, convallis erat sit amet, facilisis velit. Nulla ornare convallis malesuada. Phasellus molestie, ipsum ac fringilla.",
  //    name: "Daniel Smith",
  //    designation: "Senior engineer"
  // },
];

const testi_thumb: string[] = [
  "/assets/img/NAVKARSOCIALMEDIAPOST1.png",
  "/assets/img/NAVKARSOCIALMEDIAPOST2NF.png",
  "/assets/img/testimonial/03.jpg",
];

const Testimonial = ({ padding }: any) => {
  const swiper1Ref = useRef<any>(null);
  const swiper2Ref = useRef<any>(null);

  const setting_1 = {
    speed: 1000,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".dot-2",
      clickable: true,
    },
  };

  const setting_2 = {
    speed: 1000,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".dot-2",
      clickable: true,
    },
  };

  useEffect(() => {
    if (swiper1Ref.current && swiper2Ref.current) {
      swiper1Ref.current.controller.control = swiper2Ref.current;
      swiper2Ref.current.controller.control = swiper1Ref.current;
    }
  }, []);

  return (
    <>
      <section
        className={`testimonial-sectioin fix section-padding ${
          padding ? "pt-0" : "pb-0"
        }`}
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <div className="container">
          {/* <div className="section-title text-center">
            <span className="wow fadeInUp">PUBLIC TESTIMONIAL</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
            public feedback about Industril
            </h2>
            </div> */}
          <div
            className="section-title"
            style={{
              margin: 0,
              padding: 0,
            }}
          >
            {/* <span className="wow fadeInUp"> NEWS & BLOG</span> */}
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Meet Our Visionary Leaders
            </h2>
          </div>
          <div
            className={`testimonial-wrapper ${
              padding ? "border-none" : "section-padding pt-0"
            }`}
          >
            <div className="row">
              <div className="col-xl-4 col-lg-5 col-md-5">
                <div className="testimonial-image-items">
                  <span></span>
                  <Swiper
                    {...setting_1}
                    modules={[Pagination, Controller, Autoplay]}
                    onSwiper={(swiper) => {
                      swiper1Ref.current = swiper;
                    }}
                    className="swiper testimonial-image-slider"
                  >
                    {/* {testi_thumb.map((bg_img, i) => ( */}
                    <SwiperSlide className="swiper-slide">
                      <div
                        className="testimonial-image bg-cover"
                        style={{ backgroundImage: `url(${testi_thumb[0]})` }}
                      ></div>
                    </SwiperSlide>
                    {/* ))} */}
                  </Swiper>
                </div>
              </div>

              <div className="col-xl-7 col-lg-7 col-md-7">
                <Swiper
                  {...setting_2}
                  modules={[Pagination, Controller, Autoplay]}
                  onSwiper={(swiper) => {
                    swiper2Ref.current = swiper;
                  }}
                  className="swiper testimonial-content-slider"
                >
                  {/* {testi_data.map((item) => ( */}
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-content">
                      <div className="icon">
                        <i
                          className="fa-solid fa-quote-right"
                          style={{ color: "#ffe000 " }}
                        ></i>
                        <p style={{ fontSize: "small", color: "#14b2f1 " }}>
                          {testi_data[0].designation}
                        </p>
                      </div>
                      <h4>{testi_data[0].desc}</h4>
                      <div className="client-info">
                        <h5>{testi_data[0].name}</h5>
                        {/* <p>{testi_data[0].designation}</p> */}
                        <p style={{ color: "#ffe000 " }}>
                          {testi_data[0].tempData}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* ))} */}
                </Swiper>
              </div>

              <div className="col-xl-1">
                <div className="swiper-dot">
                  <div className="dot-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`testimonial-sectioin fix section-padding ${
          padding ? "pt-0" : "pb-0"
        }`}
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <div className="container">
          {/* <div className="section-title text-center">
            <span className="wow fadeInUp">PUBLIC TESTIMONIAL</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              public feedback about Industril
            </h2>
          </div> */}
          <div
            className={`testimonial-wrapper ${
              padding ? "border-none" : "section-padding pt-0"
            }`}
          >
            <div className="row">
              <div className="col-xl-4 col-lg-5 col-md-5">
                <div className="testimonial-image-items">
                  <span></span>
                  <Swiper
                    {...setting_1}
                    modules={[Pagination, Controller, Autoplay]}
                    onSwiper={(swiper) => {
                      swiper1Ref.current = swiper;
                    }}
                    className="swiper testimonial-image-slider"
                  >
                    {/* {testi_thumb.map((bg_img, i) => ( */}
                    <SwiperSlide className="swiper-slide">
                      <div
                        className="testimonial-image bg-cover"
                        style={{ backgroundImage: `url(${testi_thumb[1]})` }}
                      ></div>
                    </SwiperSlide>
                    {/* ))} */}
                  </Swiper>
                </div>
              </div>

              <div className="col-xl-7 col-lg-7 col-md-7">
                <Swiper
                  {...setting_2}
                  modules={[Pagination, Controller, Autoplay]}
                  onSwiper={(swiper) => {
                    swiper2Ref.current = swiper;
                  }}
                  className="swiper testimonial-content-slider"
                >
                  {/* {testi_data.map((item) => ( */}
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-content">
                      <div className="icon">
                        <i
                          className="fa-solid fa-quote-right"
                          style={{ color: "#ffe000 " }}
                        ></i>
                        <p style={{ fontSize: "small", color: "#14b2f1 " }}>
                          {testi_data[1].designation}
                        </p>
                      </div>
                      <h4>{testi_data[1].desc}</h4>
                      <div className="client-info">
                        <h5>{testi_data[1].name}</h5>
                        {/* <p>{testi_data[1].designation}</p> */}
                        <p style={{ color: "#ffe000 " }}>
                          {testi_data[1].tempData}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* ))} */}
                </Swiper>
              </div>

              <div className="col-xl-1">
                <div className="swiper-dot">
                  <div className="dot-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
