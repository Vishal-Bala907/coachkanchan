"use client"
import Image from 'next/image'
import { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";

import video_circle from "@/assets/img/circle-2.png"

const Video = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="video-section bg-cover" style={{ backgroundImage: `url(/assets/img/video-bg.jpg)` }}>
            <div className="container">
               <div className="video-wrapper-box text-center">
                  <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-btn video-popup">
                     <Image src={video_circle} alt="img" className="text-circle" />
                     <span>Play Reel</span>
                  </a>
               </div>
            </div>
         </div>
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"Ml4XCF-JS0k"}
         />
      </>
   )
}

export default Video;
