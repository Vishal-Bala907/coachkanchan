"use client";
import { addNewBlog } from "@/components/server/admin/blog";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";
import { toast } from "react-toastify";
import "./quil.css";
// import { addNewBlog } from "../../server/admin/blog";
// import "bootstrap/dist/css/bootstrap.min.css";

type BlogState = {
  title: string;
  bannerImage: File | null;
  img1: File | null;
  img2: File | null;
  blogHeading: string;
  blogDescription: string;
  blogContent: string;
};

const AddBlog: React.FC = () => {
  const [blog, setBlog] = useState<BlogState>({
    title: "",
    bannerImage: null,
    img1: null,
    img2: null,
    blogHeading: "",
    blogDescription: "",
    blogContent: "",
  });

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof BlogState
  ) => {
    const file = e.target.files?.[0] || null;
    setBlog((prev) => ({ ...prev, [field]: file }));
  };

  const updateField = (field: keyof BlogState, value: string) => {
    setBlog((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!blog.bannerImage || !blog.img1 || !blog.img2) {
      toast.error(
        "Please upload all required images: Banner, Image 1, and Image 2",
        {
          position: "top-left",
        }
      );
      return;
    }

    if (
      !blog.title ||
      !blog.blogHeading ||
      !blog.blogDescription ||
      !blog.blogContent
    ) {
      toast.error("Please fill out all the blog details", {
        position: "top-left",
      });
      return;
    }

    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("bannerImage", blog.bannerImage);
    formData.append("img1", blog.img1);
    formData.append("img2", blog.img2);
    formData.append("blogHeading", blog.blogHeading);
    formData.append("blogDescription", blog.blogDescription);
    formData.append("blogContent", blog.blogContent);

    addNewBlog(formData)
      .then((data: any) => {
        toast.success("Blog Added Successfully");
        setBlog({
          title: "",
          bannerImage: null,
          img1: null,
          img2: null,
          blogHeading: "",
          blogDescription: "",
          blogContent: "",
        });
      })
      .catch((err: any) => {
        toast.error("Error Adding Blog");
      });
    // addNewCourse
  };

  return (
    <div className="container mt-5 text-white bg-dark p-4 rounded">
      <h2 className="text-center">Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={blog.title}
            onChange={(e) => updateField("title", e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Banner Image</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => handleFileChange(e, "bannerImage")}
          />
          {blog.bannerImage && (
            <img
              src={URL.createObjectURL(blog.bannerImage)}
              alt="Banner"
              className="img-fluid mt-2"
            />
          )}
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">First Blog Image</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => handleFileChange(e, "img1")}
            />
            {blog.img1 && (
              <img
                src={URL.createObjectURL(blog.img1)}
                alt="First Image"
                className="img-fluid mt-2"
              />
            )}
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Second Blog Image</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => handleFileChange(e, "img2")}
            />
            {blog.img2 && (
              <img
                src={URL.createObjectURL(blog.img2)}
                alt="Second Image"
                className="img-fluid mt-2"
              />
            )}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Blog Heading</label>
          <input
            type="text"
            className="form-control"
            value={blog.blogHeading}
            onChange={(e) => updateField("blogHeading", e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Blog Description</label>
          <textarea
            className="form-control"
            rows={3}
            value={blog.blogDescription}
            onChange={(e) => updateField("blogDescription", e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Blog Content</label>
          <ReactQuill
            theme="snow"
            value={blog.blogContent}
            onChange={(value) => updateField("blogContent", value)}
            className="bg-white text-dark p-2 rounded"
            style={{ color: "black" }}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
