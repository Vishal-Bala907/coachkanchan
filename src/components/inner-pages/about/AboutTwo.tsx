import Image from "next/image";
import Link from "next/link";

import about_img1 from "@/assets/img/arrow-shape.png";
import about_img2 from "@/assets/img/placeholder/665 x 732.png";

const AboutTwo = () => {
  return (
    <section className="about-section fix section-padding">
      <div className="container">
        <div className="about-wrapper-2 style-2">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Her Journey & Mission</h3>
                  {/* <h3>Our Missoin</h3> */}
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".3s">
                    Kanchan Ma’am’s journey started with a passion for
                    understanding human potential. After studying various
                    self-improvement methodologies, she realized that the right
                    mindset is the key to success in every area of life. Over
                    the years, she has worked with business leaders, corporate
                    professionals, students, and individuals to help them
                    overcome fear, self-doubt, and limiting beliefs.
                  </p>
                </div>
                <h3>Her mission is simple:</h3>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  💡 To inspire, educate, and empower people to create a
                  success-driven mindset and live a fulfilling life.
                </p>
                {/* <ul className="wow fadeInUp" data-wow-delay=".7s">
                  <li>
                    We have a combination of skilled and experienced workforce
                    to look after the production of high end products.
                  </li>
                  <li>We untiringly strive for zero defects</li>
                  <li>
                    All our employees share responsibility to continuously
                    improve our products
                  </li>
                </ul> */}

                <h3
                  style={{ margin: "50px 0px 20px 0px ! important" }}
                  className="mt-4 mt-md-0 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  Transformations & Success Stories
                </h3>
                <div
                  className="wow fadeInUp"
                  data-wow-delay=".7s"
                  style={{ margin: "16px 0px" }}
                >
                  <p>
                    Kanchan Ma’am has helped countless individuals achieve
                    breakthroughs in their personal and professional lives. From
                    entrepreneurs growing successful businesses to professionals
                    advancing in their careers—her coaching has changed lives.
                  </p>
                  <p>
                    Her real-life success stories speak for themselves, proving
                    that anyone can achieve greatness with the right mindset,
                    strategy, and guidance.
                  </p>
                </div>
                <Link
                  href="/about"
                  className="theme-btn-2 mt-5 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  know More About us
                  <span className="shape-img">
                    <Image src={about_img1} alt="shape-img" />
                  </span>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 mt-5 mt-lg-0 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="about-image">
                <Image src={about_img2} alt="about-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{}}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            gap: "20px",
            flexWrap: "wrap",
            margin: "180px  10px 0px 10px",
          }}
        >
          <div className="about-image" style={{ maxWidth: "40%" }}>
            <Image
              src={about_img2}
              alt="about-img"
              style={{ width: "60%", height: "auto" }}
            />
          </div>
          <div style={{ maxWidth: "40%" }}>
            <h2 style={{ margin: "30px 0px", textAlign: "center" }}>
              Coaching & Programs
            </h2>
            <b
              className="mt-4 mt-md-0 wow fadeInUp"
              data-wow-delay=".5s"
              style={{ margin: "0px 30px", display: "block" }}
            >
              Kanchan Ma’am offers customized coaching programs designed to help
              individuals achieve personal and professional growth. Her
              expertise includes:
            </b>
            <ol
              className=""
              data-wow-delay=".7s"
              style={{ alignSelf: "start", margin: "0px 15px" }}
            >
              <li>
                Mindset Mastery & Personal Development – Build confidence,
                clarity, and resilience.
              </li>
              <li>
                Success & Business Coaching – Learn strategies to excel in your
                career or business.
              </li>
              <li>
                Emotional Intelligence & Stress Management – Master emotions for
                a balanced life.s
              </li>
              <li>
                Goal Setting & Productivity – Develop focus, discipline, and
                high performance.
              </li>
              <li>
                Corporate Training & Team Building – Strengthen leadership and
                teamwork.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
