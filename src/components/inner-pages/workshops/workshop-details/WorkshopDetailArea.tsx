"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import style from "./Workshop.module.css";
import { toast } from "react-toastify";
import { getWorkshopById } from "@/components/server/admin/workshops";
import DiscussSpinner from "@/components/spinners/DiscussSpinner";
import { ReviewType } from "@/types/reviewtype";
import ViewWorkshopReviews from "../../reviews/ViewWorkshopReviews";
import WorkshopReviewForm from "@/components/forms/WorkshopReviewForm";

type WorkshopState = {
  title: string;
  shortDec: string | null;
  longDec: string;
  image: string | null;
  price: string;
  offerPrice: string;
};

const WorkshopDetailsArea = ({ id }: any) => {
  const [Reviews, setReviews] = useState<ReviewType[] | []>([]);
  const [workshop, setWorkshop] = useState<WorkshopState>({
    title: "",
    shortDec: "null",
    longDec: "null",
    image: "null",
    price: "",
    offerPrice: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getWorkshopById(id)
      .then((data) => {
        if (data.workshop) {
          setWorkshop(data.workshop);
          if (data.workshop.ratings && data.workshop.ratings.length > 0) {
            setReviews(data.workshop.ratings);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <DiscussSpinner />;
  }

  return (
    <>
      <main className={`${style.mainArea}`}>
        <section
          className={`${style.primarySection} justify-content-center justify-content-lg-between`}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${workshop.image}`}
            className={`${style.image}`}
            width={300}
            height={200}
            alt=""
          />
          <div className={`${style.side}`}>
            <h3>{workshop.title}</h3>
            <p>
              <b>{workshop.shortDec}</b>
            </p>
            <div>
              <p style={{ margin: "25px 0px" }}>
                Actual Price
                {" : "}
                <em
                  style={{
                    textDecoration: "line-through",
                    color: "#ffe000",
                  }}
                >
                  &#8377; {workshop.price}
                </em>{" "}
              </p>
              <p style={{ margin: "25px 0px" }}>
                {" "}
                Offer Price{" : "}
                <strong
                  style={{
                    color: "#14b2f1",
                  }}
                >
                  &#8377; {workshop.offerPrice}
                </strong>
              </p>
            </div>
          </div>
        </section>
        <div
          style={{ margin: "20px 30px" }}
          dangerouslySetInnerHTML={{ __html: workshop.longDec }}
        />
        <div className="d-flex flex-md-row flex-column align-items-center justify-content-center flex-row gap-3">
          <WorkshopReviewForm id={id} />
          <ViewWorkshopReviews reviews={Reviews} />
        </div>
      </main>
    </>
  );
};

export default WorkshopDetailsArea;
