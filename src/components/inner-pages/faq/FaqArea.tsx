import faq_img from "@/assets/img/WhatsApp Image 2025-02-09 at 10.52.34 AM.jpeg";
import Faq from "@/components/common/Faq";
import Image from "next/image";

const FaqArea = () => {
  return (
    <section className="faq-section fix section-padding">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="faq-image">
              <Image src={faq_img} alt="img" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-content">
              <div className="faq-accordion">
                <div className="accordion" id="accordion">
                  <Faq style={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqArea;
