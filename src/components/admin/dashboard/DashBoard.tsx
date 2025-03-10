"use client";
import React, { useState } from "react";
import Sidebar from "@/components/common/SideBar";
import Sales from "./Sales";
import CourseForm from "../add-course/CourseForm";
import AddBlog from "../blog/AddBlog";
import "./customstyle.css";
import AdminQuery from "@/components/common/AdminQuery";
import BookingList from "@/components/common/BookingRequestsDetails";

const DashBoard = () => {
  const [selectedTab, setSelectedTab] = useState<string>("SALES");
  return (
    <div className="d-flex flex-lg-row flex-column overflow-hidden">
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
        ) : selectedTab === "BOOKING" ? (
          // <BookingList />
          <div>list</div>
        ) : (
          selectedTab === "QUERY" && <AdminQuery />
        )}
      </div>
    </div>
  );
};

export default DashBoard;
