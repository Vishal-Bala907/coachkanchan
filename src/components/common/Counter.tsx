"use client"
import Count from "@/components/common/Count";
import Image from "next/image"

import counter_thumb from "@/assets/img/indastri.png"

interface DataType {
   id: number;
   title: string;
   count: number;
   data_wow_delay: string;
};

const counter_data: DataType[] = [
   {
      id: 1,
      title: "EXPERT EMPLOYED",
      count: 989,
      data_wow_delay: "0.3s",
   },
   {
      id: 2,
      title: "ROJECT COMPLITED",
      count: 1500,
      data_wow_delay: "0.5s",
   },
   {
      id: 3,
      title: "AWARDS WINNG",
      count: 650,
      data_wow_delay: "0.7s",
   },
   {
      id: 4,
      title: "HAPPY CLIENT",
      count: 25,
      data_wow_delay: "0.9s",
   },
];

const Counter = ({ padding }: any) => {
   return (
      <section className={`Counter-section fix section-padding ${padding ? "" : "pt-0"}`}>
         <div className="container">
            <div className="counter-wrapper">
               <div className="industril-image text-center wow fadeInUp" data-wow-delay=".3s">
                  <Image src={counter_thumb} alt="img" />
               </div>
               <div className="counter-main-items bg-cover" style={{ backgroundImage: `url(/assets/img/counter-bg.jpg)` }}>
                  {counter_data.map((item) => (
                     <div key={item.id} className="counter-items wow fadeInUp" data-wow-delay={item.data_wow_delay}>
                        <h2><span className="count"><Count number={item.count} /></span>+</h2>
                        <p>{item.title}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Counter
