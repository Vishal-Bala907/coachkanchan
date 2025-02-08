"use client";
import { useEffect, useRef, useState } from "react";
import ResentPost from "./ResentPost";

const BlogSidebar = () => {
  const widthRef = useRef<HTMLDivElement>(null);
  const [sidebarWidth, setSidebarWidth] = useState("25%");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setSidebarWidth("100%");
      } else {
        setSidebarWidth("25%");
      }
    };

    // Set initial width
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={widthRef}
      style={{ width: sidebarWidth }}
      className="mt-5 align-self-start"
    >
      <div className="main-sidebar">
        <ResentPost />
      </div>
    </div>
  );
};

export default BlogSidebar;
