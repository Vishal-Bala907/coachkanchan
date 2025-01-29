"use client";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";

import hero_shape from "@/assets/img/arrow-shape.png";

interface DataType {
    id: number;
    bg_img: string;
    sub_title: string;
    title: JSX.Element;
}

const hero_data: DataType[] = [
    {
        id: 1,
        bg_img: "/assets/img/hero/hero-4.jpg",
        sub_title: "WORLD TOP OIL INDUSTRY",
        title: (<>Industrial <span>manufacturing</span> <br /> Forging the Future</>),
    },
    {
        id: 2,
        bg_img: "/assets/img/hero/hero-5.jpg",
        sub_title: "WORLD TOP OIL INDUSTRY",
        title: (<>Industrial <span>manufacturing</span> <br /> Forging the Future</>),
    },
    {
        id: 3,
        bg_img: "/assets/img/hero/hero-6.jpg",
        sub_title: "WORLD TOP OIL INDUSTRY",
        title: (<>Industrial <span>manufacturing</span> <br /> Forging the Future</>),
    },
    {
        id: 4,
        bg_img: "/assets/img/hero/hero-5.jpg",
        sub_title: "WORLD TOP OIL INDUSTRY",
        title: (<>Industrial <span>manufacturing</span> <br /> Forging the Future</>),
    },
]

const setting = {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    speed: 3000,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".arry-prev",
        prevEl: ".arry-next",
    },
    pagination: {
        el: ".dot",
        clickable: true,
    },
}

const Hero = () => {

    useEffect(() => {
        const animateSlides = () => {
            const animatedElements = document.querySelectorAll("[data-animation]");

            animatedElements.forEach((el) => {
                const anim = el.getAttribute("data-animation");
                const delay = el.getAttribute("data-delay");
                const duration = el.getAttribute("data-duration");

                // Remove the previous animation classes
                if (anim) {
                    el.classList.remove(anim);
                    el.classList.remove("animated");
                }

                // Add the new animation classes
                if (anim) {
                    el.classList.add(anim);
                    el.classList.add("animated");
                }

                (el as HTMLElement).style.animationDelay = delay || "";
                (el as HTMLElement).style.animationDuration = duration || "";

                el.addEventListener("animationend", () => {
                    if (anim) {
                        el.classList.remove(anim);
                        el.classList.remove("animated");
                    }
                });
            });
        };

        animateSlides();

        const swiperEl = document.querySelector(".hero-slider-2");
        if (swiperEl) {
            swiperEl.addEventListener("slideChange", () => {
                document.querySelectorAll("[data-animation]").forEach((el) => {
                    el.classList.remove("animated");
                });
                animateSlides();
            });
        }
    }, []);

    return (
        <section className="hero-section-2 hero-2">
            <div className="arry-button">
                <button className="arry-prev"><i className="fa-solid fa-arrow-left"></i></button>
                <button className="arry-next"><i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="swiper-dot">
                <div className="dot"></div>
            </div>
            <Swiper {...setting} modules={[Pagination, Navigation, EffectFade, Autoplay]} className="swiper hero-slider-2" effect="fade">
                {hero_data.map((item) => (
                    <SwiperSlide key={item.id} className="swiper-slide">
                        <div className="hero-image bg-cover" style={{ backgroundImage: `url(${item.bg_img})` }}></div>
                        <div className="container">
                            <div className="row g-4 align-items-center justify-content-between">
                                <div className="col-xl-12">
                                    <div className="hero-content">
                                        <h5 data-animation="fadeInUp" data-delay="1.3s">{item.sub_title}</h5>
                                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                                            {item.title}
                                        </h1>
                                        <div className="hero-button">
                                            <Link href="/about" data-animation="fadeInUp" data-delay="1.7s" className="theme-btn">
                                                Explore More
                                            </Link>
                                            <Link href="/service-details" data-animation="fadeInUp" data-delay="1.7s" className="theme-btn-2 white-border">
                                                Our Services
                                                <span className="shape-img">
                                                    <Image src={hero_shape} alt="shape-img" />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;
