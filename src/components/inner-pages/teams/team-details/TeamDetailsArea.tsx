import Image from "next/image"
import team_thumb from "@/assets/img/team/03.jpg"

const TeamDetailsArea = () => {
   return (
      <section className="team-details-section fix section-padding">
         <div className="container">
            <div className="team-details-wrapper">
               <div className="row g-4">
                  <div className="col-lg-4">
                     <div className="team-details-image">
                        <Image src={team_thumb} alt="team-img" />
                     </div>
                  </div>
                  <div className="col-lg-8">
                     <div className="team-details-content">
                        <div className="details-info">
                           <h4>Shikhon Islam</h4>
                           <span>Web Designer</span>
                        </div>
                        <h4>About Me</h4>
                        <p className="mt-3">
                           This good man possesses qualities that inspire us all. He is selfless, always putting the needs of others before his own. Whether it&apos;s helping a neighbor in distress, volunteering at local charities, or simply lending.
                        </p>
                        <p className="mt-3">
                           This good man is a source of unwavering support and encouragement to those around him. He is a pillar of strength in times of adversity.
                        </p>
                        <div className="progress-area mt-3">
                           <div className="progress-wrap">
                              <div className="pro-items">
                                 <div className="pro-head">
                                    <h6 className="title">
                                       Web Development
                                    </h6>
                                    <span className="point">
                                       90%
                                    </span>
                                 </div>
                                 <div className="progress">
                                    <div className="progress-value"></div>
                                 </div>
                              </div>
                              <div className="pro-items">
                                 <div className="pro-head">
                                    <h6 className="title">
                                       Business Solution
                                    </h6>
                                    <span className="point">
                                       50%
                                    </span>
                                 </div>
                                 <div className="progress">
                                    <div className="progress-value style-two"></div>
                                 </div>
                              </div>
                              <div className="pro-items">
                                 <div className="pro-head">
                                    <h6 className="title">
                                       Digital Marketing
                                    </h6>
                                    <span className="point">
                                       80%
                                    </span>
                                 </div>
                                 <div className="progress">
                                    <div className="progress-value style-three"></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="team-single-history mt-5">
                  <div className="title">
                     <h4>Education Background</h4>
                  </div>
                  <h5 className="mt-4">Bachelor&apos;s Degree, 2010</h5>
                  <p className="mt-3">
                     Proin ultricies ultricies est vitae cursus. Nulla sit amet suscipit tortor. Maecenas dui erat, ornare eget tristique vitae, rutrum pretium justo. Phasellus vitae consequat nisi, quis luctus nisl. Praesent faucibus sem id massa semper ornare. Nam eu magna at mi pellentesque mattis. Morbi at condimentum velit. Phasellus aliquet, leo auctor volutpat ultrices, metus dolor dictum enim, sed convallis lacus urna nec erat.
                  </p>
                  <h5 className="mt-5">Master&apos;s Degree In Design, 2015</h5>
                  <p className="mt-3">
                     Proin ultricies ultricies est vitae cursus. Nulla sit amet suscipit tortor. Maecenas dui erat, ornare eget tristique vitae, rutrum pretium justo. Phasellus vitae consequat nisi, quis luctus nisl. Praesent faucibus sem id massa semper ornare. Nam eu magna at mi pellentesque mattis. Morbi at condimentum velit. Phasellus aliquet, leo auctor volutpat ultrices, metus dolor dictum enim, sed convallis lacus urna nec erat.
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default TeamDetailsArea
