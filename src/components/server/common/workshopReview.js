import apiClient from "../config";

// Add a new workshop review
export const addWorkshopReview = async (workshopId, review) => {
  try {
    const response = await apiClient.post(
      `/api/v1/review/workshop/post/workshop-reviews/${workshopId}`,
      review
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

// Fetch all reviews for a specific workshop
export const getWorkshopReviews = async (workshopId) => {
  try {
    const response = await apiClient.get(
      `/api/v1/review/workshop/get/workshop-reviews/${workshopId}`
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

// Fetch a single workshop review by ID
export const getWorkshopReviewById = async (reviewId) => {
  try {
    const response = await apiClient.get(
      `/api/v1/review/workshop/get/workshop-review/${reviewId}`
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

// Delete a workshop review by ID
export const deleteWorkshopReview = async (reviewId) => {
  try {
    const response = await apiClient.delete(
      `/api/v1/review/workshop/delete/workshop-review/${reviewId}`
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};
