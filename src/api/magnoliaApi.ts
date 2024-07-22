import axios from "axios";

const MAGNOLIA_API_BASE_URL = "https://api.magnolia.com"; // Replace with actual base URL

export const getEditorialContent = async () => {
  const response = await axios.get(
    `${MAGNOLIA_API_BASE_URL}/editorial-content`
  );
  return response.data;
};

export const getProductList = async () => {
  const response = await axios.get(`${MAGNOLIA_API_BASE_URL}/products`);
  return response.data;
};

export const getProductDetails = async (productId: string) => {
  const response = await axios.get(
    `${MAGNOLIA_API_BASE_URL}/products/${productId}`
  );
  return response.data;
};

export const getQuizQuestions = async (productId: string) => {
  const response = await axios.get(
    `${MAGNOLIA_API_BASE_URL}/products/${productId}/quiz`
  );
  return response.data;
};
