import team_data from "@/data/TeamData"
import Image from "next/image"
import Link from "next/link"

const TeamArea = () => {
   return (
      <section className="team-section fix section-padding">
         <div className="container">
            <div className="row g-4">
               {team_data.map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                     <div className="single-team-items">
                        <div className="team-image">
                           <Image src={item.thumb} alt="team-img" />
                           <div className="team-content">
                              <p>
                                 “Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit <br /> Ut et massa mi”
                              </p>
                              <div className="icon">
                                 <i className="fa-solid fa-phone-volume me-2"></i>
                                 <a href="tel:+912659302003">{item.number}</a>
                              </div>
                              <div className="content">
                                 <h4>{item.name}</h4>
                                 <span>{item.designation}</span>
                              </div>
                           </div>
                           <div className="social-icon">
                              <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                              <Link href="#"><i className="fab fa-twitter"></i></Link>
                              <Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section >
   )
}

export default TeamArea
