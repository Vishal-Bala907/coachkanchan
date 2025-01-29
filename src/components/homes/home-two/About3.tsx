"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";

import about_arrow1 from "@/assets/img/arrow.png";
import about_arrow2 from "@/assets/img/arrow-shape.png";
import about_thumb from "@/assets/img/about/about-2.jpg";
import about_circle from "@/assets/img/circle.png";

interface ContentType {
  sub_title: string;
  title: string;
  desc_1: JSX.Element;
  desc_2: JSX.Element;
  list: JSX.Element[];
}

const about_content: ContentType = {
  sub_title: "ABOUT TO industry",
  title: "We Are Here to Increase Your Knowledge With Experience",
  desc_1: <>We Are Here to Increase Your Knowledge With Experience</>,
  desc_2: (
    <>
      We have facility to produce advance work various industrial applications
      based on specially developed technol-ogy. We are also ready to
      developement by according to users changing needs. Infrastructure related
      installation projects.
    </>
  ),
  list: [
    <>
      Greate <br /> Technology
    </>,
    <>
      Delivery <br /> Ontime
    </>,
    <>
      Certified <br /> Engineers
    </>,
    <>
      Best <br /> Branding
    </>,
  ],
};

const { sub_title, title, desc_1, desc_2, list } = about_content;

const About3 = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="about-section fix section-padding">
        <div className="arrow-shape">
          <Image src={about_arrow1} alt="shape-img" />
        </div>
        <div className="container">
          <div className="about-wrapper-2">
            <div className="row">
              <div
                className="col-xl-6 col-lg-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="about-image">
                  <Image src={about_thumb} alt="about-img" />
                  <h4 className="title-text">25 Years Experieance</h4>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 mt-5 mt-lg-0">
                <div className="about-content">
                  <div className="video-box">
                    <div className="circle-shape wow fadeInUp">
                      <Image
                        src={about_circle}
                        alt="img"
                        className="text-circle"
                      />
                      <a
                        onClick={() => setIsVideoOpen(true)}
                        style={{ cursor: "pointer" }}
                        className="video-btn video-popup"
                      >
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                  </div>
                  <div className="section-title">
                    <span className="wow fadeInUp" data-wow-delay=".3s">
                      {sub_title}
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".5s">
                      {title}
                    </h2>
                  </div>
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".7s">
                    {desc_1}
                  </p>
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".8s">
                    {desc_2}
                  </p>
                  <ul className="wow fadeInUp" data-wow-delay=".4s">
                    {list.map((list, i) => (
                      <li key={i}>{list}</li>
                    ))}
                  </ul>
                  <div className="about-info-items">
                    <Link
                      href="/about"
                      className="theme-btn-2 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      know More About us
                      <span className="shape-img">
                        <Image src={about_arrow2} alt="shape-img" />
                      </span>
                    </Link>
                    <div
                      className="call-area wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <span>or Call us</span>
                      <div className="icon">
                        <i className="fa-solid fa-phone-volume"></i>
                        <h6>
                          <Link href="tel:+91-26594-302-003">
                            +91 2659 302 003
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

export default About3;
