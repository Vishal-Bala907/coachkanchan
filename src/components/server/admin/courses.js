import axios from "axios";
import apiClient from "../config";

export const addNewCourse = async (course) => {
  // console.log(visa);
  try {
    const response = await apiClient.post(`/api/v1/admin/add/course`, course, {
      headers: {
        "Content-Type": "multipart/form-data", // Automatically handled by FormData, but it's good to explicitly set it
      },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};
export const getAllCourses = async () => {
  // console.log(visa);
  try {
    const response = await apiClient.get(`/api/v1/admin/all/course`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
export const getCourseById = async (id) => {
  console.log(id);
  try {
    const response = await apiClient.get(`/api/v1/admin/course/${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
export const updateCourse = async (id, formData) => {
  console.log(id);
  try {
    const response = await apiClient.put(
      `/api/v1/admin/update/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Automatically handled by FormData, but it's good to explicitly set it
        },
      }
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};
export const deleteCourseById = async (id) => {
  console.log(id);
  try {
    const response = await apiClient.delete(`/api/v1/admin/delete/${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
