"use client"
import Faq from "@/components/common/Faq";
import VideoPopup from "@/modals/VideoPopup";
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

import details_thumb1 from "@/assets/img/service/details-1.jpg"
import details_thumb2 from "@/assets/img/service/details-2.jpg"

const ServiceDetailsArea = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <section className="service-details fix section-padding">
            <div className="container">
               <div className="services-details-wrapper">
                  <div className="row g-5">
                     <div className="col-12 col-lg-8">
                        <div className="details-image">
                           <Image src={details_thumb1} alt="img" />
                           <div className="video-box">
                              <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-btn ripple video-popup">
                                 <i className="fa-solid fa-play"></i>
                              </a>
                           </div>
                        </div>
                        <div className="details-content">
                           <h2>Petroleum Refinery</h2>
                           <p className="mt-3">
                              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat.
                           </p>
                           <p className="mt-3">
                              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
                           </p>
                           <div className="row g-5 mt-4 mb-5 align-items-center">
                              <div className="col-lg-5">
                                 <h5 className="mb-4">Benefits With Our Service</h5>

                                 <ul>
                                    <li className="mb-3"><i className="fa-solid fa-check"></i>Technology Consultancy</li>
                                    <li className="mb-3"><i className="fa-solid fa-check"></i>Maintenance And Support</li>
                                    <li className="mb-3"><i className="fa-solid fa-check"></i>We Provide best services</li>
                                    <li className="mb-3"><i className="fa-solid fa-check"></i>Requirements Gathering</li>
                                    <li className="mb-3"><i className="fa-solid fa-check"></i>Business Growth</li>
                                 </ul>
                              </div>
                              <div className="col-lg-7">
                                 <div className="image">
                                    <Image src={details_thumb2} alt="image" />
                                 </div>
                              </div>
                           </div>
                           <p className="mb-5">
                              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
                           </p>
                           <h2>Most Comment Question?</h2>
                           <p className="mt-3">
                              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat.
                           </p>
                           <div className="faq-content mt-5">
                              <div className="faq-accordion">
                                 <div className="accordion" id="accordion">
                                    <Faq style={true} />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="col-12 col-lg-4">
                        <div className="main-sidebar">
                           <div className="single-sidebar-widget">
                              <div className="wid-title">
                                 <h5>Categories</h5>
                              </div>
                              <div className="widget-categories">
                                 <ul>
                                    <li><Link href="/news"><span className="text"><i className="fa-solid fa-arrow-right-long"></i>Consultant</span> <span>(5)</span></Link></li>
                                    <li><Link href="/news"><span className="text"><i className="fa-solid fa-arrow-right-long"></i>Constructions</span> <span>(3)</span></Link></li>
                                    <li><Link href="/news"><span className="text"><i className="fa-solid fa-arrow-right-long"></i>High Technology </span> <span>(6)</span></Link></li>
                                    <li><Link href="/news"><span className="text"><i className="fa-solid fa-arrow-right-long"></i>Industrial Factory </span> <span>(2)</span></Link></li>
                                    <li><Link href="/news"><span className="text"><i className="fa-solid fa-arrow-right-long"></i>Heavy Shipping</span> <span>(4)</span></Link></li>
                                    <li><Link href="/news"><span className="text"><i className="fa-solid fa-arrow-right-long"></i>Construct Lon</span> <span>(7)</span></Link></li>
                                 </ul>
                              </div>
                           </div>

                           <div className="single-sidebar-widget">
                              <div className="wid-title">
                                 <h5>Opening Hours</h5>
                              </div>
                              <ul className="opening-category">
                                 <li className="secondary-color justify-content-start gap-3">
                                    <i className="fa-regular fa-clock"></i>
                                    Mon - Sat: 10.00 AM - 4.00 PM
                                 </li>
                                 <li className="secondary-color justify-content-start gap-3">
                                    <i className="fa-regular fa-clock"></i>
                                    Sun: 09.00 AM - 4.00 PM
                                 </li>
                                 <li className="secondary-color justify-content-start gap-3">
                                    <i className="fa-regular fa-clock"></i>
                                    Friday: Closed
                                 </li>
                                 <li className="secondary-color justify-content-start gap-3">
                                    <i className="fa-regular fa-clock"></i>
                                    Emergency: 24 hours
                                 </li>
                              </ul>
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
   )
}

export default ServiceDetailsArea
