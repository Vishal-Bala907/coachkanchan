"use client";
import React, { useState } from "react";
import whiteStar from "@/assets/img/avtar/favorites.png";
import star from "@/assets/img/avtar/star.png";
import Image from "next/image";
import { addWorkshopReview } from "../server/common/workshopReview"; // Update this import
import { toast } from "react-toastify";

interface ReviewObjectType {
  workshopRating: number;
  workshopExperienceRating: number;
  instructorReview: number;
  description: string;
  user: string;
  workshopId: string;
}

const WorkshopReviewForm = ({ id }: any) => {
  const [workshopRating, setWorkshopRating] = useState(0);
  const [instructorReview, setInstructorReview] = useState(0);
  const [workshopExperienceRating, setWorkshopExperienceRating] = useState(0);
  const [description, setDescription] = useState<string>("");

  const handleSubmit = async () => {
    if (workshopRating === 0) {
      toast.error("Please rate the workshop");
    }
    if (instructorReview === 0) {
      toast.error("Please rate the instructor");
    }
    if (workshopExperienceRating === 0) {
      toast.error("Please rate your experience with the workshop");
    }

    const token = localStorage.getItem("token");
    const user = localStorage.getItem("kanchan-user");
    if (!token || !user) {
      toast.warning("Please Login First");
      return;
    }

    const ReviewObject = {
      workshopRating: workshopRating,
      workshopExperienceRating: workshopExperienceRating,
      instructorReview: instructorReview,
      description: description,
      user: JSON.parse(user)._id,
      workshopId: id,
    };

    addWorkshopReview(id as string, ReviewObject as ReviewObjectType)
      .then((data: any) => {
        toast.success(`Review submitted successfully!`);
        console.log(data);
      })
      .catch((err: any) => {
        toast.error(`Review not submitted successfully!`);
        console.log(err);
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  return (
    <div className="bg-white w-50 align-self-md-start rounded-3">
      <div className="d-flex flex-column align-items-center justify-content-between flex-md-row gap-md-3 gap-2 px-3 py-md-2">
        <p>Rate the Workshop</p>
        <div className="d-flex flex-row gap-2">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} onClick={() => setWorkshopRating(index)}>
              <Image
                src={index <= workshopRating ? star : whiteStar}
                alt="star"
                width={24}
                height={24}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-between flex-md-row gap-md-3 gap-2 px-3 py-md-2">
        <p>Rate the Instructor</p>
        <div className="d-flex flex-row gap-2">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} onClick={() => setInstructorReview(index)}>
              <Image
                src={index <= instructorReview ? star : whiteStar}
                alt="star"
                width={24}
                height={24}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-between flex-md-row gap-md-3 gap-2 px-3 py-md-2">
        <p>Rate Your Experience</p>
        <div className="d-flex flex-row gap-2">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} onClick={() => setWorkshopExperienceRating(index)}>
              <Image
                src={index <= workshopExperienceRating ? star : whiteStar}
                alt="star"
                width={24}
                height={24}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 px-2">
        <h6 className="text-black my-3 text-md-start text-center">
          Enter Description Here:
        </h6>
        <textarea
          className="py-2 w-100"
          onChange={handleChange}
          value={description}
        ></textarea>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary my-4" onClick={handleSubmit}>
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default WorkshopReviewForm;
