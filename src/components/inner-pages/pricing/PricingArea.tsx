import Image from "next/image";
import Link from "next/link";
import arrow from "@/assets/img/arrow-shape.png"

interface DataType {
   id: number;
   tag: string;
   data_wow_delay: string;
   price: number;
   desc: JSX.Element;
   list: string[];
   active_class?: string;
}[];

const pricing_data: DataType[] = [
   {
      id: 1,
      tag: "Silver",
      data_wow_delay: ".3s",
      price: 200,
      desc: (<>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid</>),
      list: ["Ut enim ad minima veniam", "adipiscing elit Ut et massa mi.", "vitae mattis tellus.", "vitae mattis tellus."],
   },
   {
      id: 2,
      tag: "Gold",
      data_wow_delay: ".5s",
      price: 300,
      desc: (<>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid</>),
      list: ["Ut enim ad minima veniam", "adipiscing elit Ut et massa mi.", "vitae mattis tellus.", "vitae mattis tellus."],
      active_class: "active",
   },
   {
      id: 3,
      tag: "Premium",
      data_wow_delay: ".7s",
      price: 400,
      desc: (<>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid</>),
      list: ["Ut enim ad minima veniam", "adipiscing elit Ut et massa mi.", "vitae mattis tellus.", "vitae mattis tellus."],
   },
];
const PricingArea = () => {
   return (
      <section className="pricing-section fix section-padding">
         <div className="container">
            <div className="row g-4">
               {pricing_data.map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                     <div className={`pricing-items ${item.active_class}`}>
                        <div className="pricing-header">
                           <span>{item.tag}</span>
                           <h2>
                              ${item.price}
                              <sub style={{marginLeft:"4px"}}>/month</sub>
                           </h2>
                           <p className="mt-3">{item.desc}</p>
                        </div>
                        <ul className="pricing-list">
                           {item.list.map((list, i) => (
                              <li key={i}>{list}</li>
                           ))}
                        </ul>
                        <div className="pricing-button">
                           <Link href="/contact" className="theme-btn-2 padding-style">
                              Chose Package
                              <span className="shape-img">
                                 <Image src={arrow} alt="shape-img" />
                              </span>
                           </Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default PricingArea
