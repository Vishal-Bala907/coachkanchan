import service_data from "@/data/ServiceData";
import Image from "next/image";
import Link from "next/link";

import arrow from "@/assets/img/placeholder/418 x 235.png";

const ServiceArea = () => {
  return (
    <section className="service-section-2 fix section-padding">
      <div className="container">
        <div className="row">
          {service_data
            .filter((items) => items.page === "inner_page")
            .map((item) => (
              <div
                key={item.id}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={item.data_wow_delay}
              >
                <div className="service-items-2">
                  <div className="service-image">
                    <Image src={arrow} alt="service-img" />
                  </div>
                  <div className="service-content">
                    <h3>
                      <span>{item.title}</span>
                      {/* <Link href="/service-details">{item.title}</Link> */}
                    </h3>
                    <p>{item.desc}</p>
                    {/* <Link href="/news-details" className="theme-btn-2 padding-style mt-4">
                              Read More
                              <span className="shape-img">
                                 <Image src={arrow} alt="shape-img" />
                              </span>
                           </Link> */}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
