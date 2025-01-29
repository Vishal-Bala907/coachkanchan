import ContactForm from "@/components/forms/ContactForm";

const ContactArea = () => {
  return (
    <section className="contact-section fix section-padding pt-0">
      <div className="container">
        <div className="row g-5">
          <div
            className="col-lg-6 wow fadeInUp"
            style={{
              width: "100%",
            }}
            data-wow-delay=".3s"
          >
            <div className="map-items">
              <div className="googpemap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57783.48478781258!2d75.84175719999999!3d25.1536776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1738150951726!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="contact-form-items">
              <h2>Leave A Message</h2>
              <ContactForm />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
