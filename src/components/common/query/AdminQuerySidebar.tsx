"use client";
import { QueryUser, Query } from "@/types/query";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import avtar from "@/assets/img/avtar/avtar.png";
import "./sidebarstyle.css";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import review from "@/assets/img/review.svg";
/*
  This component is used to display the sidebar for the admin query page
  This will display the list of users who had made queries
*/
interface QuerySidebarProp {
  dummyData: QueryUser[] | [];
  setQueries: React.Dispatch<React.SetStateAction<Query[] | []>>;
  setSelectedUserId: React.Dispatch<React.SetStateAction<String | null>>;
}
const AdminQuerySidebar: React.FC<QuerySidebarProp> = ({
  dummyData,
  setQueries,
  setSelectedUserId,
}) => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [selected, setSelected] = useState<String>("");
  useEffect(() => {
    window.addEventListener("resize", () => {
      // if (window.innerWidth <= 768) {
      setShowSideBar(false);
      // } else {
      // setShowSideBar(false);
      // }
    });
  }, []);

  return (
    <div
      className={`bg-primary  rounded-2 ${
        showSideBar
          ? "admin-query-sidebar-sm-invisible"
          : "admin-query-sidebar-sm-visible"
      }`}
    >
      {dummyData.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center">
          <Image src={review} alt="no review" height={400} width={400} />
        </div>
      ) : (
        <ul className={`py-3 ${showSideBar ? "d-none" : "d-block"}`}>
          {dummyData.map((user: QueryUser, idx) => (
            <li
              key={idx}
              className={`sidebarHover p-2 text-white d-flex flex-row gap-3 ${
                selected === user.name && "sidebarHoverActive"
              }`}
              style={{
                borderBottom: "1px solid #ffffff1f",
              }}
              onClick={() => {
                setQueries(user.query);
                setSelected(user.name);
                setSelectedUserId(user.userId);
              }}
            >
              <Image src={avtar} alt="icon" width={24} height={24} />
              <span>{user.name}</span>
            </li>
          ))}
        </ul>
      )}
      {/* <div> */}
      {showSideBar ? (
        <div
          className="position-absolute"
          onClick={() => {
            // alert("efsfed");
            setShowSideBar(false);
          }}
        >
          <IoIosArrowDropright
            style={{
              color: "black",
              fontSize: "x-large",
            }}
          />
        </div>
      ) : (
        <div
          className="position-absolute"
          style={{
            top: "0px",
            right: "10px",
          }}
          onClick={() => {
            // alert("efsfed");
            setShowSideBar(true);
          }}
        >
          <IoIosArrowDropleft
            style={{
              color: "black",
              fontSize: "x-large",
            }}
          />
        </div>
      )}
      {/* </div> */}
    </div>
  );
};

export default AdminQuerySidebar;
