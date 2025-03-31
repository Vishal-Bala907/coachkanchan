"use client";
import React, { useState } from "react";
import Sidebar from "@/components/common/SideBar";
import Sales from "../admin/dashboard/Sales";
import CourseForm from "../admin/add-course/CourseForm";
import AddBlog from "../admin/blog/AddBlog";
import "../admin/dashboard/customstyle.css";
import AdminQuery from "@/components/common/AdminQuery";
import BookingList from "@/components/common/BookingRequestsDetails";
import WorkshopForm from "../admin/add-workshop/WorkshopForm";

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
          <BookingList />
        ) : selectedTab === "QUERY" ? ( 
          <AdminQuery />
        ) : selectedTab === "ADDWORKSHOP" ? (
          <WorkshopForm />
        ) : null}
      </div>
    </div>
  );
};

export default DashBoard;
