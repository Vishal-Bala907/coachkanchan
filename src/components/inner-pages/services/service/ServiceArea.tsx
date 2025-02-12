"use client";
import service_data from "@/data/ServiceData";
import Image from "next/image";
import Link from "next/link";
// import { courses } from "@/data/Courses";
import style from "./ServiceArea.module.css";

import arrow from "@/assets/img/placeholder/418 x 235.png";
import update from "@/assets/img/update.png";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { getAllCourses } from "@/components/server/admin/courses";
import DiscussSpinner from "@/components/spinners/DiscussSpinner";

interface SoldCourse {
  date: string; // ISO date string format
  userId: string; // MongoDB ObjectId as a string
}

interface Course {
  _id: any;
  title: string;
  shortDec: string;
  longDec: string;
  image: string; // URL of the course image
  price: number;
  offerPrice: number;
  sold: SoldCourse[]; // Array of sold course details
}

const ServiceArea = () => {
  const router = useRouter();
  const [userRole, setUserRole] = useState<String>("USER");
  const [courses, setCourses] = useState<Course[]>([
    {
      _id: 1,
      title: "string",
      shortDec: "string",
      longDec: "string",
      image: "string", // URL of the course image
      price: 2,
      offerPrice: 3,
      sold: [{ date: "dfdf", userId: "4544" }], // Array of sold course details
    },
  ]);
  const [loading, setLoading] = useState<boolean>(false);

  function handleViewDetails(id: any) {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (!token || !user) {
      toast.warning("Please Login First");
      return;
    }

    router.push(`/service-details/${id}`);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (user) setUserRole(JSON.parse(user).role);
    setLoading(true);
    getAllCourses()
      .then((data) => {
        if (!data?.course?.length) {
          // ✅ Safe check
          toast.error("No courses found");
          return;
        }
        setCourses(data.course);
        toast.success("Courses Loaded");
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
        toast.error("Failed to fetch courses");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <DiscussSpinner />;
  }

  return (
    <section className="service-section-2 fix section-padding">
      <div className="container">
        <div className="row">
          {courses.map((item) => (
            <div
              key={item._id}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp position-relative"
              // data-wow-delay={item.data_wow_delay}
            >
              {userRole === "ADMIN" && (
                <div
                  className="position-absolute"
                  style={{
                    right: "20px",
                    top: "15px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    router.push(`/update-course/${item._id}`);
                  }}
                >
                  <Image src={update} alt="update icon" />
                </div>
              )}

              <div className="service-items-2">
                <div className="service-image">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.image}`}
                    width={300}
                    height={200}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                    alt="service-img"
                  />
                </div>
                <section
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div className="service-content" style={{ width: "75%" }}>
                    <h6>
                      <span style={{ textAlign: "center" }}>{item.title}</span>
                    </h6>
                    <p>{item.shortDec}</p>
                  </div>
                  <div style={{ width: "25%", margin: "0px 10px" }}>
                    <p
                      style={{
                        color: "white",
                      }}
                    >
                      Price{" "}
                      <em
                        style={{
                          textDecoration: "line-through",
                          color: "#ffe000",
                        }}
                      >
                        <span>&#8377; {item.price}</span>
                      </em>
                    </p>
                    <p
                      style={{
                        color: "white",
                      }}
                    >
                      Offer Price{" "}
                      <strong
                        style={{
                          color: "#14b2f1",
                        }}
                      >
                        &#8377; {item.offerPrice}
                      </strong>
                    </p>
                  </div>
                </section>
                <button
                  onClick={(e) => {
                    handleViewDetails(item._id);
                  }}
                  className={`${style.viewDetailsButton}`}
                  style={{}}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
