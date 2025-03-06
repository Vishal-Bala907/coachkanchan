import apiClient from "../config";

export const addCourseReview = async (courseId, review) => {
  try {
    const response = await apiClient.post(
      `/api/v1/review/course/post/course-reviews/${courseId}`,
      review
    );
    // console.log(response);
    return response.data;
  } catch (err) {
    throw err;
  }
};
