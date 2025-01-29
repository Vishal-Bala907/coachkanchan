import Image from "next/image"
import Link from "next/link"

import comment_avatar1 from "@/assets/img/news/comment.png"
import comment_avatar2 from "@/assets/img/news/comment-2.png"

const BlogDetailsComment = () => {
   return (
      <div className="comments-area">
         <div className="comments-heading">
            <h3>02 Reviews, for Tiles</h3>
         </div>
         <div className="blog-single-comment d-flex gap-4 mt-5 pb-5 bor-bottom">
            <div className="image">
               <Image src={comment_avatar1} alt="image" />
            </div>
            <div className="content">
               <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                  <div className="con">
                     <h5><Link href="/news-details">Albert Flores</Link></h5>
                     <span>March 20, 2023 at 2:37 pm</span>
                  </div>
                  <div className="star">
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                  </div>
               </div>
               <p className="mt-30 mb-4">Neque porro est qui dolorem ipsum quia quaed inventor
                  veritatis et quasi
                  architecto var sed efficitur turpis gilla sed
                  sit amet finibus eros. Lorem Ipsum is simply dummy</p>
               <Link href="/news-details" className="reply">Reply</Link>
            </div>
         </div>
         <div className="blog-single-comment d-flex gap-4 mt-5 pb-5 bor-bottom">
            <div className="image">
               <Image src={comment_avatar2} alt="image" />
            </div>
            <div className="content">
               <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                  <div className="con">
                     <h5><Link href="/news-details">Alex Flores</Link></h5>
                     <span>March 20, 2023 at 2:37 pm</span>
                  </div>
                  <div className="star">
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                  </div>
               </div>
               <p className="mt-30 mb-4">Neque porro est qui dolorem ipsum quia quaed inventor
                  veritatis et quasi
                  architecto var sed efficitur turpis gilla sed
                  sit amet finibus eros. Lorem Ipsum is simply dummy</p>
               <Link href="/news-details" className="reply">Reply</Link>
            </div>
         </div>
      </div>
   )
}

export default BlogDetailsComment
