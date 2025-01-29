"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import TestimonialForm from "@/components/forms/TestimonialForm";

interface DataType {
   id: number;
   avatar: string;
   name: string;
   designation: string;
   desc: JSX.Element;
}[];

const testi_data: DataType[] = [
   {
      id: 1,
      avatar: "/assets/img/testimonial/01.jpg",
      name: "Shikhon Haque",
      designation: "Web Designer",
      desc: (<>“ Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”</>),
   },
   {
      id: 2,
      avatar: "/assets/img/testimonial/02.jpg",
      name: "Abu Haider",
      designation: "Web Designer",
      desc: (<>“ Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”</>),
   },
   {
      id: 3,
      avatar: "/assets/img/testimonial/03.jpg",
      name: "ALex Rony",
      designation: "Web Designer",
      desc: (<>“ Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”</>),
   },
];

const setting = {
   speed: 1500,
   loop: true,
   centeredSlides: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   navigation: {
      nextEl: ".arry-prev",
      prevEl: ".arry-next",
   },
}

const Testimonial = () => {
   return (
      <section className="testimonial-sectioin fix section-padding">
         <div className="bg-shape" style={{ backgroundImage: `url(/assets/img/testimonial-bg-1.png)` }}></div>
         <div className="container">
            <div className="testimonial-area">
               <div className="row g-4">
                  <div className="col-lg-6">
                     <div className="booking-items">
                        <div className="section-title">
                           <span className="text-white">BOOK APPOINTMENT</span>
                           <h2>Industril Services Available</h2>
                        </div>
                        <TestimonialForm />
                     </div>
                  </div>

                  <div className="col-lg-6">
                     <div className="testimonial-content">
                        <div className="section-title">
                           <span>TESTIMONIALS</span>
                           <h2>Clients Feedback</h2>
                        </div>
                        <p className="mt-4 mt-md-0">
                           We have facility to produce advance work various industrial applications based on specially developed technol-ogy. We are also ready to developement by according to users
                        </p>
                        <Swiper {...setting} modules={[Navigation]} className="swiper testimonial-slider">
                           {testi_data.map((item) => (
                              <SwiperSlide key={item.id} className="swiper-slide">
                                 <div className="testimonial-items">
                                    <div className="icon">
                                       <i className="fas fa-quote-right"></i>
                                    </div>
                                    <div className="client-info">
                                       <div className="client-image bg-cover" style={{ backgroundImage: `url(${item.avatar})` }}></div>
                                       <div className="client-content">
                                          <h5>{item.name}</h5>
                                          <span>{item.designation}</span>
                                          <div className="star">
                                             <span className="fas fa-star"></span>
                                             <span className="fas fa-star"></span>
                                             <span className="fas fa-star"></span>
                                             <span className="fas fa-star"></span>
                                             <span className="fas fa-star"></span>
                                          </div>
                                       </div>
                                    </div>
                                    <p className="mt-30">{item.desc}</p>
                                 </div>
                              </SwiperSlide>
                           ))}
                           <div className="arry-button center">
                              <button className="arry-prev"><i className="fas fa-chevron-left"></i></button>
                              <button className="arry-next"><i className="fas fa-chevron-right"></i></button>
                           </div>
                        </Swiper>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Testimonial
