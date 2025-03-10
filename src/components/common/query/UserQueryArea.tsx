"use client";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import review from "@/assets/img/review.svg";
import dummyData from "@/types/queryData";
import { Query } from "@/types/query";
import { toast } from "react-toastify";
import {
  addQueryFromUser,
  getQueryById,
} from "@/components/server/common/courseReview";
import DiscussSpinner from "@/components/spinners/DiscussSpinner";
interface UserQueryAreaProps {
  id: String;
}
const UserQueryArea: React.FC<UserQueryAreaProps> = ({ id }) => {
  const queryRef = React.useRef<HTMLInputElement>(null);
  const [queries, setQueries] = useState<Query[] | []>(dummyData[0].query);
  const [loading, setLoading] = useState<boolean>(false);
  const scrollRef = React.useRef<HTMLUListElement>(null);

  const handleSubmitQuert = () => {
    const USER = localStorage.getItem("user");
    if (USER) {
      const U = JSON.parse(USER);
      const queryObj = {
        userId: id,
        name: U.name,
        query: {
          name: U.name,
          message: queryRef.current?.value,
          role: "USER",
        },
      };
      addQueryFromUser(queryObj)
        .then(() => {
          setQueries((prev) => [
            ...prev,
            {
              name: U.name,
              message: queryObj.query.message || "",
              role: "USER",
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
    setLoading(true);
    getQueryById(id)
      .then((data) => {
        setQueries(data[0].query);
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight; // Scroll to bottom
        }
      })
      .catch((err) => {
        toast.warn("unable to fetch queries");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <DiscussSpinner />;
  }
  return (
    <div>
      <HeaderOne headerTop={true} />
      <div
        className="bg-white text-dark rounded-2 w-100 container-md p-0"
        style={{
          backgroundImage: "URL('/assets/img/1.svg')",
          height: "80vh",
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
            className="py-3"
            style={{
              maxHeight: "85vh",
              overflowY: "auto",
            }}
          >
            {queries.map((query: Query, idx) => (
              <li
                key={idx}
                className={`${
                  query.role === "USER" ? "justify-content-end" : ""
                } p-2 text-white d-flex flex-row gap-3 text-dark`}
              >
                {query.role === "USER" ? (
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
          </ul>
        )}
      </div>
      <div className=" d-flex justify-content-evenly container-md flex-row w-100 py-3 bg-success">
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
      <FooterOne />
    </div>
  );
};

export default UserQueryArea;
