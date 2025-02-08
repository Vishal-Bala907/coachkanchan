import apiClient from "../config";

export const addNewBlog = async (blog) => {
  try {
    const response = await apiClient.post(`/api/v1/blog/add`, blog, {
      headers: {
        "Content-Type": "multipart/form-data", // Automatically handled by FormData, but it's good to explicitly set it
      },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};
export const getBlogById = async (id) => {
  try {
    const response = await apiClient.get(`/api/v1/blog/get/${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
export const getRandomThreeBlogs = async () => {
  try {
    const response = await apiClient.get(`/api/v1/blog/random/three`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
