import Link from "next/link"

const Categories = () => {
   return (
      <div className="single-sidebar-widget">
         <div className="wid-title">
            <h5>Categories</h5>
         </div>
         <div className="widget-categories">
            <ul>
               <li><Link href="/news"><span className="text"><i className="fa-solid fa-arrow-right-long"></i>Consultant</span> <span>(5)</span></Link></li>
               <li><Link href="/news"><span className="text"><i className="fa-solid fa-arrow-right-long"></i>Constructions</span> <span>(3)</span></Link></li>
               <li><Link href="/news"><span className="text"><i className="fa-solid fa-arrow-right-long"></i>High Technology </span> <span>(6)</span></Link></li>
               <li><Link href="/news"><span className="text"><i className="fa-solid fa-arrow-right-long"></i>Industrial Factory </span> <span>(2)</span></Link></li>
               <li><Link href="/news"><span className="text"><i className="fa-solid fa-arrow-right-long"></i>Heavy Shipping</span> <span>(4)</span></Link></li>
               <li><Link href="/news"><span className="text"><i className="fa-solid fa-arrow-right-long"></i>Construct Lon</span> <span>(7)</span></Link></li>
            </ul>
         </div>
      </div>
   )
}

export default Categories
