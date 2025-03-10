"use client";
import { Query } from "@/types/query";
import Image from "next/image";
import React, { useEffect } from "react";
import review from "@/assets/img/review.svg";
import { toast } from "react-toastify";
import DiscussSpinner from "@/components/spinners/DiscussSpinner";
import { addQueryFromUser } from "@/components/server/common/courseReview";
interface QuerySidebarProp {
  queries: Query[] | [];
  selectedUserId: String | null;
  setQueries: React.Dispatch<React.SetStateAction<Query[] | []>>;
}
const AdminQueryArea: React.FC<QuerySidebarProp> = ({
  queries,
  selectedUserId,
  setQueries,
}) => {
  const queryRef = React.useRef<HTMLInputElement>(null);
  const scrollRef = React.useRef<HTMLUListElement>(null);

  const handleSubmitQuert = () => {
    const USER = localStorage.getItem("user");
    if (USER) {
      const U = JSON.parse(USER);
      const queryObj = {
        userId: selectedUserId,
        name: U.name,
        query: {
          name: U.name,
          message: queryRef.current?.value,
          role: "ADMIN",
        },
      };
      addQueryFromUser(queryObj)
        .then(() => {
          setQueries((prev) => [
            ...prev,
            {
              name: U.name,
              message: queryObj.query.message || "",
              role: "ADMIN",
              timestampDateAndTime: new Date().toISOString(),
              timestamp: Date.now(),
              _id: "342535",
            },
          ]);
          queryRef.current!.value = "";
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      toast.warn("Please Login First...");
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight; // Scroll to bottom
    }
  }, [queries]);

  // useEffect(() => {
  //   setLoading(true);
  //   getQueryById(id)
  //     .then((data) => {
  //       setQueries(data[0].query);
  //       console.log(data[0].query);
  //     })
  //     .catch((err) => {
  //       toast.warn("unable to fetch queries");
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);
  // if (loading) {
  //   return <DiscussSpinner />;
  // }

  return (
    <div
      className="bg-white text-dark position-relative rounded-2 w-100"
      style={{
        backgroundImage: "URL('/assets/img/1.svg')",
      }}
    >
      {queries.length === 0 ? (
        <div className="d-flex justify-content-center flex-column align-items-center">
          <Image src={review} alt="no review" height={400} width={400} />
          <p className="fs-1 fw-bold">User Queries</p>
        </div>
      ) : (
        <ul
          ref={scrollRef}
          className="py-3 mb-5"
          style={{
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          {queries.map((query: Query, idx) => (
            <li
              key={idx}
              className={`${
                query.role === "ADMIN" ? "justify-content-end" : ""
              } p-2 text-white d-flex flex-row gap-3 text-dark`}
            >
              {query.role === "ADMIN" ? (
                <div
                  className="d-flex flex-column gap-1 bg-info-subtle px-3 py-2 rounded-2 justify-self-end "
                  style={{
                    maxWidth: "65%",
                    justifySelf: "end !important",
                  }}
                >
                  <span
                    style={{
                      fontSize: ".8rem",
                    }}
                    className="text-dark text-end  fw-bold"
                  >
                    {query.name}
                  </span>
                  <span className="text-dark">{query.message}</span>
                  <span
                    style={{
                      fontSize: ".5rem",
                    }}
                    className="text-dark text-end"
                  >
                    {String(query.timestampDateAndTime)}
                  </span>
                </div>
              ) : (
                <div className="d-flex flex-column gap-1 bg-primary-subtle px-3 py-2 rounded-2 ">
                  <span
                    className="text-dark fw-bold"
                    style={{
                      fontSize: ".8rem",
                    }}
                  >
                    {query.name}
                  </span>
                  <span className="text-dark">{query.message}</span>
                  <span
                    className="text-dark"
                    style={{
                      fontSize: ".5rem",
                    }}
                  >
                    {String(query.timestampDateAndTime)}
                  </span>
                </div>
              )}
            </li>
          ))}
          <div className="position-absolute bottom-0 d-flex justify-content-evenly flex-row w-100 py-3 bg-success">
            <input
              ref={queryRef}
              className="w-75 text-dark rounded-2"
              type="text"
            />
            <button
              onClick={handleSubmitQuert}
              className="bg-warning btn btn-warning"
            >
              Send
            </button>
          </div>
        </ul>
      )}
    </div>
  );
};

export default AdminQueryArea;
