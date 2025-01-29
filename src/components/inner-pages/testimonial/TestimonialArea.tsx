import testimonial_data from "@/data/TestimonialData"
import Image from "next/image"

const TestimonialArea = () => {
   return (
      <section className="testimonial-section-2 fix section-padding">
         <div className="container">
            <div className="row">
               {testimonial_data.map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={item.data_wow_delay}>
                     <div className={`testimonial-card-items ${item.active_class}`}>
                        <div className="testimonial-content">
                           <div className="icon">
                              <i className="fa-solid fa-quote-right"></i>
                           </div>
                           <p className="text">{item.desc_1}</p>
                           <p className="text-2">{item.desc_2}</p>
                        </div>
                        <div className="client-info">
                           <div className="client-image">
                              <Image src={item.avatar} alt="client-img" />
                           </div>
                           <div className="client-content">
                              <h5>{item.name}</h5>
                              <p>{item.designation}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default TestimonialArea
