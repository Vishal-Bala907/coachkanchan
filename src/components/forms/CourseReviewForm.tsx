"use client";
import React, { useState } from "react";
import whiteStar from "@/assets/img/avtar/favorites.png";
import star from "@/assets/img/avtar/star.png";
import Image from "next/image";
import { addCourseReview } from "../server/common/courseReview";
import { toast } from "react-toastify";

const CourseReviewForm = ({ id }: any) => {
  const [courseRating, setCourseRating] = useState(0);
  const [coachReview, setCoachReview] = useState(0);
  const [experienceRating, setExperienceRating] = useState(0);
  const [description, setDescription] = useState<string>("");

  const handleSubmit = async () => {
    if (courseRating === 0) {
      toast.error("Please rate our course");
    }
    if (coachReview === 0) {
      toast.error("Please rate our couch");
    }
    if (experienceRating === 0) {
      toast.error("Please rate your experience with course");
    }

    const token = localStorage.getItem("token");
    const user = localStorage.getItem("kanchan-user");
    if (!token || !user) {
      toast.warning("Please Login First");
      return;
    }

    // toast.success(`Review submitted successfully! ${JSON.parse(user)._id}`);
    const ReviewObject = {
      courseRating: courseRating,
      experienceRating: experienceRating,
      coachReview: coachReview,
      description: description,
      user: JSON.parse(user)._id,
      courseid: id,
    };

    addCourseReview(id, ReviewObject)
      .then((data) => {
        toast.success(`Review submitted successfully! `);
        console.log(data);
      })
      .catch((err) => {
        toast.error(`Review not submitted successfully! `);
        console.log(err);
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  return (
    <div className="bg-white w-50 align-self-md-start rounded-3">
      <div className="d-flex flex-column align-items-center justify-content-between flex-md-row gap-md-3 gap-2 px-3 py-md-2">
        <p>Rate Our Course</p>
        <div className="d-flex flex-row gap-2">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} onClick={() => setCourseRating(index)}>
              <Image
                src={index <= courseRating ? star : whiteStar}
                alt="star"
                width={24}
                height={24}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-between flex-md-row gap-md-3 gap-2 px-3 py-md-2">
        <p>Rate Our Coach</p>
        <div className="d-flex flex-row gap-2">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} onClick={() => setCoachReview(index)}>
              <Image
                src={index <= coachReview ? star : whiteStar}
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
            <div key={index} onClick={() => setExperienceRating(index)}>
              <Image
                src={index <= experienceRating ? star : whiteStar}
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

export default CourseReviewForm;
