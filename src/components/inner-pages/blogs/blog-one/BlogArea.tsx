"use client"
import blog_data from "@/data/BlogData"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import ReactPaginate from "react-paginate"

import arrow from "@/assets/img/arrow-shape.png"

const BlogArea = () => {

   const blog = blog_data.filter(items => items.page === "blog_1");

   const itemsPerPage = 9;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = blog.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(blog.length / itemsPerPage);
   // click to request another page.
   const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % blog.length;
      setItemOffset(newOffset);
   };

   return (
      <section className="news-section fix section-padding">
         <div className="container">
            <div className="row g-4">
               {currentItems.filter((items) => items.page === "blog_1").map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={item.data_wow_delay}>
                     <div className="single-news-items mt-0">
                        <div className="news-image">
                           <Image src={item.thumb} alt="news-img" />
                           <ul className="post-date">
                              <li>
                                 <i className="fa-regular fa-calendar-days"></i>
                                 {item.date}
                              </li>
                           </ul>
                        </div>
                        <div className="news-content">
                           <ul className="post-list d-flex align-items-center">
                              <li>
                                 <i className="fa-solid fa-user"></i>
                                 By Admin
                              </li>
                              <li>
                                 <i className="fa-solid fa-tag"></i>
                                 {item.tag}
                              </li>
                           </ul>
                           <h4>
                              <Link href="/news-details">{item.title}</Link>
                           </h4>
                           <Link href="/news-details" className="theme-btn-2 padding-style">
                              Read More
                              <span className="shape-img">
                                 <Image src={arrow} alt="shape-img" />
                              </span>
                           </Link>
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
      </section>
   )
}

export default BlogArea
