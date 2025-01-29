"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Import Pagination module
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import img1 from "@/assets/img/gallery/01.jpg";
import img2 from "@/assets/img/gallery/02.jpg";
import img3 from "@/assets/img/gallery/03.jpg";
import img4 from "@/assets/img/gallery/04.jpg";
import img6 from "@/assets/img/gallery/04.jpg";
import img5 from "@/assets/img/gallery/05.jpg";
import "./Cerificate.css";

function Certificate() {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null
  );

  const images: StaticImageData[] = [img1, img2, img3, img4, img5, img6];

  const handleImageClick = (image: StaticImageData) => {
    setSelectedImage(image);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <h1 className="certificate-container">Certificates</h1>
      <div className="swipe-container">
        <Swiper
          modules={[Autoplay, Pagination]} // Add Pagination module
          spaceBetween={0}
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
        >
          {images.map((image, index) => (
            <div key={index}>
              <SwiperSlide
                className={"sliding-images-container"}
                style={{ width: "fit-content !important" }}
                onClick={() => handleImageClick(image)}
              >
                <Image
                  src={image}
                  alt={`Certificate ${index + 1}`}
                  className="swiper-slide img"
                />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>

      {selectedImage && (
        <div className="overlay">
          <div>
            <Image
              className="overlay-image"
              src={selectedImage}
              alt="Selected Certificate"
            />
          </div>
          <button onClick={handleCloseImage} className="close-button">
            X
          </button>
        </div>
      )}
    </div>
  );
}

export default Certificate;
