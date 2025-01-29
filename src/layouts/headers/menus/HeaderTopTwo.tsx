import Link from "next/link"

const HeaderTopTwo = () => {
   return (
      <div className="top-header">
         <div className="container">
            <div className="top-header-wrapper style-2">
               <ul>
                  <li>
                     <i className="fas fa-paper-plane me-2"></i>
                     <Link href="mailto:info@example.com" className="link">info@example.com</Link>
                  </li>
                  <li>
                     <i className="fas fa-map-marker-alt me-2"></i>
                     85 Ketch Harbour RoadBensalem, PA 19020
                  </li>
               </ul>
               <div className="social-icon d-flex align-items-center">
                  <Link href="#"><i className="fab fa-facebook-f"></i></Link>

                  <Link href="#"><i className="fab fa-twitter"></i></Link>

                  <Link href="#"><i className="fab fa-youtube"></i></Link>

                  <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderTopTwo
