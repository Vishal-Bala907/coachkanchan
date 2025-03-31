"use client";
import React from "react";

interface SidebarProps {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}

const SideBar: React.FC<SidebarProps> = ({ selectedTab, setSelectedTab }) => {
  return (
    <div>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark h-100 overflow-x-auto">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Coach Kanchan</span>
        </a>
        <hr />
        <ul className="nav nav-pills mb-auto d-flex flex-lg-column flex-row dashboard-ul">
          <li>
            <span
              className={`nav-link  ${
                selectedTab === "SALES" && "active"
              } text-white`}
              onClick={() => setSelectedTab("SALES")}
              style={{
                cursor: "pointer",
              }}
            >
              {/* <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg> */}
              Dashboard
            </span>
          </li>
          <li>
            <span
              className={`nav-link ${
                selectedTab === "ADDCOURSE" && "active"
              } text-white`}
              onClick={() => setSelectedTab("ADDCOURSE")}
              style={{
                cursor: "pointer",
              }}
            >
              {/* <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg> */}
              Add Course
            </span>
          </li>
          <li>
            <span
              className={`nav-link ${
                selectedTab === "ADDWORKSHOP" && "active"
              } text-white`}
              onClick={() => setSelectedTab("ADDWORKSHOP")}
              style={{
                cursor: "pointer",
              }}
            >
              Add Workshop
            </span>
          </li>

          <li>
            <span
              className={`nav-link ${
                selectedTab === "ADDBLOG" && "active"
              } text-white`}
              onClick={() => setSelectedTab("ADDBLOG")}
              style={{
                cursor: "pointer",
              }}
            >
              {/* <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg> */}
              Add Blog
            </span>
          </li>

          <li>
            <span
              className={`nav-link ${
                selectedTab === "QUERY" && "active"
              } text-white`}
              onClick={() => setSelectedTab("QUERY")}
              style={{
                cursor: "pointer",
              }}
            >
              {/* <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#people-circle"></use>
              </svg> */}
              Query&apos;s
            </span>
          </li>
          <li>
            <span
              className={`nav-link ${
                selectedTab === "BOOKING" && "active"
              } text-white`}
              onClick={() => setSelectedTab("BOOKING")}
              style={{
                cursor: "pointer",
              }}
            >
              {/* <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#people-circle"></use>
              </svg> */}
              Booking Requests
            </span>
          </li>
          <li>
            <span
              className={`nav-link ${
                selectedTab === "VIDEO" && "active"
              } text-white`}
              onClick={() => setSelectedTab("VIDEO")}
              style={{
                cursor: "pointer",
              }}
            >
              {/* <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#people-circle"></use>
              </svg> */}
              Videos
            </span>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default SideBar;
