"use client";
import VideoPopup from "@/modals/VideoPopup";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Count from "@/components/common/Count";

import about_img1 from "@/assets/img/about/about.jpg";
import about_img2 from "@/assets/img/about/border-shape.png";
import about_img3 from "@/assets/img/about/video.jpg";
import about_img4 from "@/assets/img/arrow-shape.png";
import about_img5 from "@/assets/img/fac1.jpeg";
import about_img6 from "@/assets/img/fac1R.jpeg";
import about_img7 from "@/assets/img/image4.jpeg";
import about_img8 from "@/assets/img/WhatsApp Image 2025-02-09 at 10.52.35 AM.jpeg";

interface DataType {
  sub_title: string;
  title: JSX.Element;
  desc: string;
  about_list: string[];
}

const about_data: DataType = {
  sub_title: "ABOUT TO Industril",
  title: (
    <>
      Take Charge of Your Mindset & Growth!
      {/* <span style={{ color: "#ffe000" }}> Since 1984 </span> */}
    </>
  ),
  desc: "Whether you’re striving for personal growth, professional success, or a balanced life, Kanchan Ma’am is here to guide you with proven techniques and strategies. Through *seminars, webinars, and personalized coaching*, she has transformed the lives of thousands.",
  about_list: [
    "Join now and embark on a journey toward *self-mastery and success!",
  ],
};

const { sub_title, title, desc, about_list } = about_data;

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="about-section fix section-padding section-bg">
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div
                className="col-xl-6 col-lg-8 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div
                  className="about-image"
                  style={{
                    border: "4px solid white",
                    borderRadius: "10px",
                  }}
                >
                  <Image
                    src={about_img8}
                    alt="img"
                    style={{
                      border: "4px solid white",
                      borderRadius: "10px",
                      // objectFit: "fill",
                      height: "100%",
                    }}
                  />
                  <div
                    className="border-shape"
                    // style={{ backgroundColor: "#ffe000" }}
                  >
                    {/* <Image src={about_img2} alt="shape-img" /> */}
                  </div>
                  <div className="video-image">
                    {/* <Image src={about_img3} alt="img" /> */}
                    <div className="video-box">
                      <a
                        onClick={() => setIsVideoOpen(true)}
                        style={{ cursor: "pointer" }}
                        className="video-btn ripple video-popup"
                      >
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                  </div>
                  <div className="working-area float-bob-y">
                    <div className="inner">
                      <div className="icon-box">
                        <i className="fa-solid fa-medal"></i>
                        <h3>
                          <span className="count">
                            {/* <Count number={25} /> */}
                            20+
                          </span>{" "}
                          Years of
                        </h3>
                        <p
                          style={{
                            textAlign: "center",
                          }}
                        >
                          Experience of
                        </p>
                        <p
                          style={{
                            textAlign: "left",
                          }}
                        >
                          training and mentoring <br /> students for academic{" "}
                          <br /> & career growth
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-8 mt-5 mt-xl-0">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">Dr. Kanchan</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      {title}
                    </h2>
                  </div>
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Whether you&apos;re striving for personal growth,
                    professional success, or a balanced life, Kanchan Ma&apos;am
                    is here to guide you with proven techniques and strategies.
                    Through <b>seminars, webinars, and personalized coaching</b>
                    , she has transformed the lives of thousands.
                  </p>
                  <ul className="wow fadeInUp" data-wow-delay=".7s">
                    {about_list.map((list, i) => (
                      <li key={i}>
                        <i
                          className="fa-solid fa-circle-check"
                          style={{ color: "#14b2f1" }}
                        ></i>
                        {list}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="about-info-items wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <Link href="/about" className="theme-btn-2">
                      know More About us
                      <span className="shape-img">
                        <Image src={about_img4} alt="shape-img" />
                      </span>
                    </Link>
                    <div className="call-area">
                      <span>or Call us</span>
                      <div className="icon">
                        <i className="fa-solid fa-phone-volume"></i>
                        <h6>
                          <Link
                            href="tel:+91-90962 07767"
                            style={{ color: "#ffe000" }}
                          >
                            +91 90962 07767
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Ml4XCF-JS0k"}
      />
    </>
  );
};

export default About;
