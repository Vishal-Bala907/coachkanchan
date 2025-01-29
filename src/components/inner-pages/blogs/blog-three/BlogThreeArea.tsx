"use client"
import blog_data from "@/data/BlogData"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import ReactPaginate from "react-paginate"
import BlogSidebar from "../blog-sidebar"

import arrow from "@/assets/img/arrow-shape.png"
import icon_1 from "@/assets/img/icon/construct.svg"
import icon_2 from "@/assets/img/icon/comments.svg"

const BlogThreeArea = () => {

   const blog = blog_data.filter(items => items.page === "blog_3");

   const itemsPerPage = 3;
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
            <div className="row g-5">
               <div className="col-12 col-lg-8">
                  <div className="blog-posts">
                     {currentItems.map((item) => (
                        <div key={item.id} className="single-blog-post">
                           <div className="post-featured-thumb bg-cover" style={{ backgroundImage: `url(${item.bg_img})` }}>
                              <div className="post-date">
                                 <h4>{item.date}</h4>
                                 <span>Dec</span>
                              </div>
                           </div>
                           <div className="post-content">
                              <ul className="post-list d-flex align-items-center">
                                 <li>
                                    <Image src={icon_1} alt="icon-img" />
                                    Construct Ion
                                 </li>
                                 <li>
                                    <Image src={icon_2} alt="icon-img" />
                                    0 Comments
                                 </li>
                              </ul>
                              <h4><Link href="/news-details">{item.title}</Link></h4>
                              <p>{item.desc}</p>
                              <div className="news-button d-flex align-items-center justify-content-between">
                                 <Link href="/news-details" className="theme-btn-2 padding-style">
                                    Read More
                                    <span className="shape-img">
                                       <Image src={arrow} alt="shape-img" />
                                    </span>
                                 </Link>
                                 <div className="social-icon d-flex align-items-center">
                                    <Link href="#"><i className="fab fa-facebook-f"></i></Link>

                                    <Link href="#"><i className="fab fa-twitter"></i></Link>

                                    <Link href="#"><i className="fab fa-youtube"></i></Link>

                                    <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
                  <div className="page-nav-wrap pt-5 text-center">
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
               <BlogSidebar />
            </div>
         </div>
      </section>
   )
}

export default BlogThreeArea
