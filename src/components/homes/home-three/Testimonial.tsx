"use client";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import avatar_1 from "@/assets/img/testimonial/bbc.jpeg";
import avatar_2 from "@/assets/img/testimonial/2.jpeg";
import avatar_3 from "@/assets/img/testimonial/3.jpeg";
import avatar_4 from "@/assets/img/testimonial/4.jpeg";
import avatar_5 from "@/assets/img/testimonial/5.jpeg";

interface DataType {
  id: number;
  desc_1: JSX.Element;
  desc_2: JSX.Element;
  avatar: StaticImageData;
  // name: string;
  // designation: string;
}
[];

const testi_data: DataType[] = [
  {
    id: 1,
    desc_1: (
      <>
        I am a Teacher Educator, and through my experience with trainees from
        diverse age groups and educational backgrounds, I&apos;ve observed a
        significant prevalence of anxiety and stress regarding their careers and
        professional development.
      </>
    ),
    desc_2: (
      <>
        It is clear that they need effective guidance and counseling to manage
        these challenges. Implementing life coaching can be a transformative
        strategy to empower all teacher trainees and enhance their mindset for
        success
      </>
    ),
    avatar: avatar_1,
  },
  {
    id: 2,
    desc_1: (
      <>
        I remember being a just above average student who was actually stuck at
        some point.. am talking about February 2024. This was the time when I
        had board practicals as well as prepration for a competitive exam..
        Ideally I was scoring well but some point of time I messed up and got
        hanged in between.. Not able to increase my scores and even upon trying
        everything, NOTHING seemed to be working..
      </>
    ),
    desc_2: (
      <>
        That is when I had a talk Kanchan Ma&apos;am. I still remember that 45
        minutes call entirely changed my path and way of thinking.. The self
        believe came back in me and I knew that I can do what we call the
        best... She indeed improved me from average to brilliant student.. I am
        really grateful to have had a mentor and family like her during my
        journey. Believe in her and all will be smooth as better... Trusting and
        having her back brought me all the strength to overcome the hardships
        during my preparation. She is the God Gifted present for me. Will always
        be Grateful
      </>
    ),
    avatar: avatar_2,
  },
  {
    id: 3,
    desc_1: (
      <>
        I still remember it was Aug 2023 and I was a usual aspirant struggling
        hard to overcome my fear. By the word fear I don&apos;t mean maths or
        any subject fear but my perceptive on different things right at that
        time I got to know about kanchan mam.
      </>
    ),
    desc_2: (
      <>
        I had 3 lectures and believe me it was a great transformation like
        atleast I wasn&apos;t having self doubt and fear of getting low marks
        it&apos;s on destiny at the end what you need to do was to believe in
        your self and get to know what&apos;s exactly wrong and this was
        recognised by her also having some live sessions helped a lot.I wont
        ever want someone suffering the same so for this you have to believe in
        her.
      </>
    ),
    avatar: avatar_3,
  },
  {
    id: 4,
    desc_1: (
      <>
        As a 18 year old I was struggling with anxiety and academic pressure .I
        couldn&apos;t understand why my efficiency and my concentration lacking
        number of times a day despite trying to study for hours but this also
        requires too struggle than earlier. My school counsellor recommended
        this transformative journey with
      </>
    ),
    desc_2: (
      <>
        {" "}
        Coach Kanchan kabra...... Her mindset techniques helped me understand
        that my worth isn&apos;t tied to my grades. Through her guidance, I
        learned to manage stress, developed effective study habits, and improved
        my self-confidence. Some of the techniques for this were writing small
        goals and accomplish them daily ,journalizing ,deep breathing ,self talk
        ,proven methods of study ,etc ..My grades improved naturally as my
        mental health got better. This book is a must-read for parents and
        teachers who might not realize that behind every &apos;lazy&apos; or
        &apos;unmotivated&apos; student, there could be unaddressed emotional
        challenges. If you&apos;re a student feeling overwhelmed or a parent
        wanting to support your child better, this book provides the
        understanding and tools that traditional academic advice often misses.
      </>
    ),
    avatar: avatar_4,
  },
  {
    id: 6,
    desc_1: (
      <>
        Being a &apos;gifted kid&apos; I turned into a struggling medical
        student and it was a huge blow to my identity. Traditional study tips
        weren&apos;t helping me because my issues ran deeper. Through this
        coaching journey, I learned that mental wellness is the foundation of
        academic success and I also discovered the real me
      </>
    ),
    desc_2: (
      <>
        And above all I am grateful to my coach who was there for me in this
        journey and showed faith in me that every single thing is possible and I
        can do it all. This book fills the gap between traditional academic
        guidance and mental health support . It&apos;s not about studying more;
        it&apos;s about healing the relationship with learning itself
      </>
    ),
    avatar: avatar_5,
  },
];

const setting = {
  spaceBetween: 30,
  speed: 1500,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".dot-2",
    clickable: true,
  },
  breakpoints: {
    1199: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

const Testimonial = ({ padding }: any) => {
  return (
    <section
      className={`testimonial-section-2 fix ${
        padding ? "" : "section-padding pt-0"
      }`}
      style={{ marginTop: "80px" }}
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="wow fadeInUp">PUBLIC TESTIMONIAL</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            public feedback about Dr. Kanchan Ji Ma&apos;m
          </h2>
        </div>
        <Swiper
          {...setting}
          modules={[Pagination, Autoplay]}
          className="swiper testimonial-slider-2"
        >
          {testi_data.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div className="testimonial-card-items">
                <div className="testimonial-content">
                  <div className="icon">
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
                  <p className="text">{item.desc_1}</p>
                  <p className="text-2">{item.desc_2}</p>
                </div>
                <div className="client-info">
                  <div className="client-image">
                    <Image
                      src={item.avatar}
                      style={{
                        height: "100px",
                        width: "auto",
                        borderRadius: "50%",
                      }}
                      alt="client-img"
                    />
                  </div>
                  <div className="client-content"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-dot pt-5 text-center">
            <div className="dot-2"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
