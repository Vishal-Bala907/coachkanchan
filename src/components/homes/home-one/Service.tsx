import service_data from "@/data/ServiceData";
import Image from "next/image";
import Link from "next/link";

const Service = () => {
  return (
    <section className="service-section fix section-padding">
      <div className="container">
        <div className="section-title text-center mb-4 mt-md-0">
          <span className="wow fadeInUp">Our Services & Programs</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            provides the best service for <br /> sustainable progress
          </h2>
        </div>
        <div className="row g-4">
          {service_data
            .filter((items) => items.page === "home_1")
            .map((item) => (
              <div
                key={item.id}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={item.data_wow_delay}
                style={{
                  width: "300px",
                }}
              >
                <div className="service-box-items">
                  <div className="icon">
                    <Image src={item.icon} alt="icon-img" />
                  </div>
                  <div className="content">
                    <h6>
                      <span>{item.title} </span>
                    </h6>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
