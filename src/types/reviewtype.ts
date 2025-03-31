export interface User {
  _id: string;
  email: string;
  name: string;
  phone: string;
  role: string;
}

export interface CourseRating {
  courseRating: number;
  coachReview: number;
  experienceRating: number;
  description?: string;
}

export interface WorkshopRating {
  workshopRating: number;
  instructorReview: number;
  workshopExperienceRating: number;
  description?: string;
}

export interface ReviewType {
  _id: string;
  user: User;
  // Course-related ratings
  courseRating?: number;
  coachReview?: number;
  experienceRating?: number;
  // Workshop-related ratings
  workshopRating?: number;
  instructorReview?: number;
  workshopExperienceRating?: number;
  description?: string;
}
