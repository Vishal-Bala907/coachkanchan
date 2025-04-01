"use client";
import React, { useEffect, useState, useRef } from "react";
import Glide from "@glidejs/glide";
import { getAllVideos } from "../server/admin/blog";
import { MdDeleteOutline } from "react-icons/md";

const VideoGlider = () => {
  const [videos, setVideos] = useState([]);
  const [videoCount, setVideoCount] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    getAllVideos()
      .then((res) => {
        setVideos(res);
        setVideoCount(res.length);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (videos.length === 0) return;

    const glideElement = document.querySelector(".glide");
    if (!glideElement) return;

    const glide = new Glide(".glide", {
      type: "carousel",
      perView: 4,
      focusAt: "center",
      breakpoints: {
        800: {
          perView: 2,
        },
        480: {
          perView: 1,
        },
      },
    });
    glide.mount();

    return () => glide.destroy();
  }, [videos]);

  const handleVideoTouch = (e: React.TouchEvent) => {
    // Check if the event is a touch event
    if (e.touches.length > 0) {
      const video = e.currentTarget as HTMLVideoElement;
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <div className="my-5">
      <h2 className="text-center text-white mb-4 ">Workshop Feedback</h2>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {videos.map((video: any) => (
              <li key={video._id} className="glide__slide md:mx-5">
                <div className="d-flex flex-column justify-content-center align-items-center gap-3">
                  <div
                    className="d-flex flex-row justify-content-center mx-4"
                    style={{ width: "500px", height: "auto" }}
                  >
                    <span style={{ color: "white" }}>{video.title}</span>
                    {/* <MdDeleteOutline
                      style={{
                        color: "red",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                      }}
                    /> */}
                  </div>
                  <video
                    ref={videoRef}
                    controls
                    autoPlay
                    loop
                    style={{ width: "500px", height: "500px" }}
                    onTouchStart={handleVideoTouch}
                  >
                    <source src={video.url} />
                  </video>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="glide__bullets" data-glide-el="controls[nav]">
          {videos.map((_, index) => (
            <button
              key={index}
              className="glide__bullet"
              data-glide-dir={`=${index}`}
            ></button>
          ))}
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            prev
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            next
          </button>
        </div>
      </div>
      <div data-glide-el="controls">
        <button data-glide-dir="<<">Start</button>
        <button data-glide-dir=">>">End</button>
      </div>
    </div>
  );
};

export default VideoGlider;