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
export interface ReviewType {
  _id: string;
  courseRating: number;
  coachReview: number;
  experienceRating: number;
  description?: string;
  user: User;
}
