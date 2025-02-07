"use client";
import Faq from "@/components/common/Faq";
import VideoPopup from "@/modals/VideoPopup";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import details_thumb1 from "@/assets/img/service/details-1.jpg";
import details_thumb2 from "@/assets/img/service/details-2.jpg";
import { courses } from "@/data/Courses";
import style from "./Service.module.css";
import { toast } from "react-toastify";

const ServiceDetailsArea = ({ id }: any) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <main className={`${style.mainArea}`}>
        <section
          className={`${style.primarySection} justify-content-center  justify-content-lg-between`}
        >
          <Image
            src={courses[id].image}
            className={`${style.image}`}
            width={300}
            height={200}
            alt=""
          />
          <div className={`${style.side}`}>
            <h3>{courses[id].title}</h3>
            <p>
              <b>{courses[id].shortDec}</b>
            </p>
            <div>
              <p style={{ margin: "25px 0px" }}>
                Actual Price
                {" : "}
                <em
                  style={{
                    textDecoration: "line-through",
                    color: "#ffe000",
                  }}
                >
                  &#8377; {courses[id].price}
                </em>{" "}
              </p>
              <p style={{ margin: "25px 0px" }}>
                {" "}
                Offer Price{" : "}
                <strong
                  style={{
                    color: "#14b2f1",
                  }}
                >
                  &#8377; {courses[id].offerPrice}
                </strong>
              </p>
            </div>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </section>
        <article style={{ margin: "20px 30px" }}>{courses[id].longDec}</article>
      </main>
    </>
  );
};

export default ServiceDetailsArea;
