import apiClient from "../config";

export const createPayment = async (payment) => {
  try {
    const response = await apiClient.post(`/api/v1/pay/create-order`, payment);
    // console.log(response);
    return response.data;
  } catch (err) {
    throw err;
  }
};
export const varifyPayment = async (paymentDetails) => {
  try {
    const response = await apiClient.post(
      `/api/v1/pay/verify-payment`,
      paymentDetails
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const fetchPayments = async (page, rowsPerPage) => {
  try {
    const response = await apiClient.get(
      `/api/v1/pay/payments?page=${page + 1}&limit=${rowsPerPage}`
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};
