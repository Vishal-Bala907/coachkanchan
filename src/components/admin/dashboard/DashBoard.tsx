"use client";
import React, { useState } from "react";
import Sidebar from "@/components/common/SideBar";
import Sales from "./Sales";
import CourseForm from "../add-course/CourseForm";
import AddBlog from "../blog/AddBlog";
import "./customstyle.css";

const DashBoard = () => {
  const [selectedTab, setSelectedTab] = useState<string>("SALES");
  return (
    <div className="d-flex flex-lg-row flex-column">
      <div className="sidebar-wrapper">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
      <div className="dsb-items-wrapper">
        {selectedTab === "SALES" ? (
          <Sales />
        ) : selectedTab === "ADDCOURSE" ? (
          <CourseForm />
        ) : selectedTab === "ADDBLOG" ? (
          <AddBlog />
        ) : (
          selectedTab === "QUERY" && <Sales />
        )}
      </div>
    </div>
  );
};

export default DashBoard;
