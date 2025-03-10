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
export const addQueryFromUser = async (object) => {
  try {
    const response = await apiClient.post(`/api/v1/query/query-user`, object);
    // console.log(response);
    return response.data;
  } catch (err) {
    throw err;
  }
};
export const getQueryById = async (id) => {
  try {
    const response = await apiClient.get(`/api/v1/query/query-user/${id}`);
    // console.log(response);
    return response.data;
  } catch (err) {
    throw err;
  }
};
export const getAllQueries = async () => {
  try {
    const response = await apiClient.get(`/api/v1/query/query-users`);
    // console.log(response);
    return response.data;
  } catch (err) {
    throw err;
  }
};
