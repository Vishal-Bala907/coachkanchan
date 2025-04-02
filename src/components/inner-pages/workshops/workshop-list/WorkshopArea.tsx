"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { getAllWorkshops } from "@/components/server/admin/workshops";
import DiscussSpinner from "@/components/spinners/DiscussSpinner";
import style from "./WorkshopArea.module.css";
import update from "@/assets/img/update.png";

interface Workshop {
  _id: any;
  title: string;
  shortDec: string;
  longDec: string;
  image: string;
  // price: number;
  // offerPrice: number;
}

const WorkshopArea = () => {
  const router = useRouter();
  const [userRole, setUserRole] = useState<String>("USER");
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  function handleViewDetails(id: any) {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (!token || !user) {
      toast.warning("Please Login First");
      return;
    }
    router.push(`/workshop-details/${id}`);
  }

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setUserRole(JSON.parse(user).role);
    setLoading(true);
    getAllWorkshops()
      .then((data) => {
        if (!data?.workshop?.length) {
          toast.error("No workshops found");
          return;
        }
        setWorkshops(data.workshop);
        toast.success("Workshops Loaded");
      })
      .catch((err) => {
        console.error("Error fetching workshops:", err);
        toast.error("Failed to fetch workshops");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <DiscussSpinner />;
  }

  return (
    // <section className="workshop-section fix section-padding">
    //   <div className="container">
    //     <div className="row">
    //       {workshops.map((item) => (
    //         <div key={item._id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp position-relative">
    //           {userRole === "ADMIN" && (
    //             <div
    //               className="position-absolute"
    //               style={{ right: "20px", top: "15px", cursor: "pointer" }}
    //               onClick={() => router.push(`/update-workshop/${item._id}`)}
    //             >
    //               <Image src={update} alt="update icon" />
    //             </div>
    //           )}
    //           <div className="workshop-items">
    //             <div className="workshop-image">
    //             <img
    //                 src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.image}`}
    //                 width={300}
    //                 height={200}
    //                 style={{
    //                   width: "100%",
    //                   height: "200px",
    //                   objectFit: "cover",
    //                 }}
    //                 alt="service-img"
    //               />
    //             </div>
    //             <section style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center" }}>
    //               <div className="workshop-content" style={{ width: "75%" }}>
    //                 <h6>
    //                   <span style={{ textAlign: "center" }}>{item.title}</span>
    //                 </h6>
    //                 <p>{item.shortDec}</p>
    //               </div>
              
    //             </section>
    //             <button
    //               onClick={() => handleViewDetails(item._id)}
    //               className={style.viewDetailsButton}
    //             >
    //               View Details
    //             </button>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>


  <section className="service-section-2 fix section-padding">
      <div className="container">
        <div className="row">
          {workshops.map((item) => (
            <div
              key={item._id}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp position-relative"
              // data-wow-delay={item.data_wow_delay}
            >
              {userRole === "ADMIN" && (
         <div
         className="position-absolute"
         style={{ right: "20px", top: "15px", cursor: "pointer" }}
         onClick={() => router.push(`/update-workshop/${item._id}`)}
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
                  {/* <div style={{ width: "25%", margin: "0px 10px" }}>
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
                  </div> */}
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

export default WorkshopArea;
