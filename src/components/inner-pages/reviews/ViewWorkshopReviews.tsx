
import React from "react";
import { ReviewType, User } from "@/types/reviewtype";
import Image from "next/image";
import avtar from "@/assets/img/avtar/avtar.png";
import star from "@/assets/img/avtar/star.png";

interface ViewReviewmProps {
  reviews: ReviewType[] | [];
}
const ViewWorkshopReviews: React.FC<ViewReviewmProps> = ({ reviews }) => {  
    console.log(reviews);
  
    return (
      <div className="w-50 ">
        {reviews.length === 0 ? (
          <h2>No Reviews</h2>
        ) : (
          <section className="w-100 ">
            {reviews.map((review, idx) => {
              return (
                <div key={idx} className="border-bottom my-3">
                  <div>
                    <section className="d-flex flex-row gap-2 align-items-center justify-content-end">
                      <Image src={avtar} alt="avtar" height={24} width={24} />
                      <p>{review.user.name}</p>
                    </section>
                  </div>
                  <div className="w-100 my-2">
                    <div className="d-flex flex-row gap-2 align-items-center justify-content-between">
                      <p>Workshop Rating</p>
                      <div className="d-flex flex-row gap-2 align-items-center">
                        {Array.from({ length: review.workshopRating || 0 }).map(
                          (_, i) => (
                            <Image
                              key={i}
                              src={star}
                              alt="star"
                              height={24}
                              width={24}
                            />
                          )
                        )}
                        <p>
                          {" : "}
                          {review.workshopRating}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row gap-2 align-items-center justify-content-between">
                      <p>Workshop Experience Rating</p>
                      <div className="d-flex flex-row gap-2 align-items-center justify-content-center">
                        {Array.from({ length: review.workshopExperienceRating || 0 }).map(
                          (_, i) => (
                            <Image
                              key={i}
                              src={star}
                              alt="star"
                              height={24}
                              width={24}
                            />
                          )
                        )}
                        <p>
                          {" : "}
                          {review.workshopExperienceRating}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row gap-2 align-items-center justify-content-between">
                      <p>Instructor Experience Rating</p>
                      <div className="d-flex flex-row gap-2 align-items-center justify-content-center">
                        {Array.from({ length: review.instructorReview || 0 }).map(
                          (_, i) => (
                            <Image
                              key={i}
                              src={star}
                              alt="star"
                              height={24}
                              width={24}
                            />
                          )
                        )}
                        <p>
                          {" : "}
                          {review.instructorReview}
                        </p>
                      </div>
                    </div>
                  </div>
  
                  <div className="p-2 ">
                    <h6>Description</h6>
                    <p>{review.description}</p>
                  </div>
                </div>
              );
            })}
          </section>
        )}
      </div>
    );
  };
  export default ViewWorkshopReviews;