import Image from "next/image";

import project_details_thumb1 from "@/assets/img/project/details-2.jpg"
import project_details_thumb2 from "@/assets/img/project/details-1.jpg"
import project_details_thumb3 from "@/assets/img/project/details-3.jpg"

interface ContentType {
   title_1: string;
   title_2: string;
   title_3: string;
   desc_1: JSX.Element;
   desc_2: JSX.Element;
   list_1: JSX.Element[];
   list_2: {
      list: string[];
   }[];
}
const project_details_content: ContentType = {
   title_1: "Project Description",
   title_2: "Our Challenge",
   title_3: "Project Overview",
   desc_1: (<>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat.Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</>),
   desc_2: (<>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales.</>),
   list_1: [(<><span>Completed Date:</span> 23-2-2024</>), (<><span>Category:</span> Industril</>), (<><span>Client:</span> Robert Fox</>), (<><span>Location:</span> fot kde, USA</>)],
   list_2: [
      { list: ["Technology Consultancy", "Maintenance And Support"] },
      { list: ["We Provide best services", "Requirements Gathering"] },
      { list: ["Maintenance And Support", "Technology Consultancy"] },
   ]
};

const { title_1, title_2, title_3, desc_1, desc_2, list_1, list_2 } = project_details_content;

const ProjectDetailsArea = () => {
   return (
      <section className="details-area fix section-padding">
         <div className="container">
            <div className="project-details-wrapper">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="details-image">
                        <Image src={project_details_thumb1} alt="img" />
                     </div>
                     <div className="project-details-content">
                        <h2>{title_1}</h2>
                        <p className="mt-3">{desc_1}</p>
                        <ul className="project-date py-4 bor-top bor-bottom mt-5 mb-5">
                           {list_1.map((list, i) => (
                              <li key={i}>{list}</li>
                           ))}
                        </ul>
                        <h2>{title_2}</h2>
                        <p className="mt-3">{desc_1}</p>
                        <div className="project-challenge-list mt-5 mb-5">
                           {list_2.map((list_d, index) => (
                              <ul key={index} className="project-challenge">
                                 {list_d.list.map((list: any, i: any) => (
                                    <li key={i} className="mb-3"><i className="fa-solid fa-check"></i>{list}</li>
                                 ))}
                              </ul>
                           ))}
                        </div>
                        <h2>{title_3}</h2>
                        <p className="mt-3">{desc_2}</p>
                        <div className="row g-4 mt-2">
                           <div className="col-md-6">
                              <div className="image">
                                 <Image src={project_details_thumb2} alt="image" />
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="image">
                                 <Image src={project_details_thumb3} alt="image" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ProjectDetailsArea
