import apiClient from "../config";

// Add a new workshop
export const addNewWorkshop = async (workshop) => {
  try {
    const response = await apiClient.post(`/api/v1/workshops/add/workshop`, workshop, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

// Get all workshops
export const getAllWorkshops = async () => {
  try {
    const response = await apiClient.get(`/api/v1/workshops/all/workshops`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

// Get workshop by ID
export const getWorkshopById = async (id) => {
  try {
    const response = await apiClient.get(`/api/v1/workshops/workshop/${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

// Update workshop
export const updateWorkshop = async (id, formData) => {
  try {
    const response = await apiClient.put(`/api/v1/workshops/update/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

// Delete workshop
export const deleteWorkshopById = async (id) => {
  try {
    const response = await apiClient.delete(`/api/v1/workshops/delete/${id}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};
