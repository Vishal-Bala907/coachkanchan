"use client";
import { getRandomThreeBlogs } from "@/components/server/admin/blog";
import Link from "next/link";
import { useEffect, useState } from "react";

interface DataType {
  id: number;
  img: string;
  title: string;
  date: string;
}
[];

const recent_post: DataType[] = [
  {
    id: 1,
    img: "/assets/img/news/pp1.jpg",
    title: "Sustainable Packaging",
    date: "15 Dec, 2024",
  },
  {
    id: 2,
    img: "/assets/img/news/pp2.jpg",
    title: "Custom Blow & Injection Molded Plastic Solutions",
    date: "29 Feb, 2024",
  },
  {
    id: 3,
    img: "/assets/img/news/pp3.jpg",
    title: "Energetically Envisioned is User Friendly",
    date: "18 Dec, 2024",
  },
];

type BlogState = {
  _id: string;
  title: string;
  bannerImage: string | null;
  img1: string | null;
  img2: string | null;
  blogHeading: string;
  blogDescription: string;
  blogContent: string;
  date: string;
};

const ResentPost = () => {
  const [blog, setBlog] = useState<BlogState[]>([
    {
      _id: "new",
      title: "",
      bannerImage: "null",
      img1: "null",
      img2: "null",
      blogHeading: "",
      blogDescription: "",
      blogContent: "",
      date: "1-1-2025-T",
    },
  ]);
  useEffect(() => {
    getRandomThreeBlogs()
      .then((data) => {
        setBlog(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="single-sidebar-widget">
      <div className="wid-title">
        <h5>Resent post</h5>
      </div>
      <div className="popular-posts d-flex flex-row flex-wrap gap-4 w-100">
        {blog.map((item, idx) => (
          <div key={item._id} className="single-post-item">
            <div
              className="thumb bg-cover"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}${item.bannerImage})`,
              }}
            ></div>
            <div className="post-content">
              <div className="post-date">
                <i className="far fa-calendar-alt"></i>
                {item.date.split("T")[0]}
              </div>
              <h6>
                <Link href={`/blog/${item._id}`}>{item.title}</Link>
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResentPost;
