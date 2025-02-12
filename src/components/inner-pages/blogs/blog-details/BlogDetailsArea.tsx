"use client";
import Image from "next/image";
import BlogDetailsComment from "./BlogDetailsComment";
import BlogSidebar from "../blog-sidebar";
import BlogForm from "@/components/forms/BlogForm";

import icon_1 from "@/assets/img/icon/construct.svg";
import icon_2 from "@/assets/img/icon/comments.svg";
import blog_thumb1 from "@/assets/img/news/post5.jpg";
import blog_thumb2 from "@/assets/img/news/post6.jpg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBlogById } from "@/components/server/admin/blog";
import { info } from "console";
import DiscussSpinner from "@/components/spinners/DiscussSpinner";
import "../../../admin/blog/quil.css";
type BlogState = {
  title: string;
  bannerImage: File | null;
  img1: File | null;
  img2: File | null;
  blogHeading: string;
  blogDescription: string;
  blogContent: string;
};

const BlogDetailsArea = ({ id }: any) => {
  const [blog, setBlog] = useState<BlogState>({
    title: "",
    bannerImage: null,
    img1: null,
    img2: null,
    blogHeading: "",
    blogDescription: "",
    blogContent: "",
  });

  // console.log(id);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    getBlogById(id)
      .then((response) => {
        if (response) {
          setBlog(response);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <DiscussSpinner />;
  }

  return (
    <section className="container-md news-section fix section-padding">
      <div className="container-md">
        <div className="container-md news-details-area">
          <div className="container-md d-flex flex-xl-row flex-column flex-wrap justify-content-center align-items-center ">
            <div className="container-md mt-5 bg-white text-white rounded shadow-lg w-75">
              {/* Container for the banner and overlapping images */}
              <div className="position-relative">
                {/* Blog Banner Image */}
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${blog.bannerImage}`}
                  alt="Blog Banner"
                  className="img-fluid w-100 rounded"
                  style={{ height: "auto", objectFit: "cover" }}
                />

                {/* Additional Images */}
                <div
                  className="position-absolute start-0 end-0 d-flex justify-content-between px-3"
                  style={{ top: "85%", transform: "translateY(-50%)" }}
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${blog.img1}`}
                    alt="Blog Image 1"
                    className="img-thumbnail rounded shadow-lg"
                    style={{
                      width: "30%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${blog.img2}`}
                    alt="Blog Image 2"
                    className="img-thumbnail rounded shadow-lg"
                    style={{
                      width: "30%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>

              {/* Blog Heading */}
              <p className="mt-5 fw-bold text-black text-center">
                {blog.blogHeading}
              </p>

              {/* Blog Description */}
              <p className="text-black  text-center">{blog.blogDescription}</p>

              {/* Blog Content */}
              <div
                className="mt-3 text-black ql-editor"
                dangerouslySetInnerHTML={{ __html: blog.blogContent }}
              />
            </div>

            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsArea;
