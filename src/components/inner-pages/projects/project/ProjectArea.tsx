"use client"
import inner_project_data from "@/data/InnerProjectData"
import Link from "next/link"
import { useState } from "react";
import ReactPaginate from "react-paginate";

const ProjectArea = () => {

   const project = inner_project_data;

   const itemsPerPage = 6;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = project.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(project.length / itemsPerPage);
   // click to request another page.
   const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % project.length;
      setItemOffset(newOffset);
   };

   return (
      <section className="project-section-2 fix section-padding">
         <div className="container">
            <div className="project-wrapper pb-0 pt-0">
               <div className="row g-4">
                  {currentItems.map((item) => (
                     <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="project-image style-2 bg-cover" style={{ backgroundImage: `url(${item.thumb})` }}>
                           <Link href="/project-details" className="post-box">
                              <i className="fa-solid fa-location-arrow"></i>
                           </Link>
                           <div className="project-content">
                              <h4>
                                 <Link href="/project-details">Road map Engineering </Link>
                              </h4>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="page-nav-wrap pt-5 text-center wow fadeInUp" data-wow-delay=".3s">
                  <ul>
                     <ReactPaginate
                        breakLabel="..."
                        nextLabel={<i className="fa-solid fa-chevron-right"></i>}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        previousLabel=""
                        renderOnZeroPageCount={null}
                     />
                  </ul>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ProjectArea
