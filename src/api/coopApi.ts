import axios from "axios";

const COOP_API_BASE_URL = "https://api.coop.com"; // Replace with actual base URL

export const getCoupons = async () => {
  const response = await axios.get(`${COOP_API_BASE_URL}/coupons`);
  return response.data;
};

export const getCouponDetails = async (couponId: string) => {
  const response = await axios.get(`${COOP_API_BASE_URL}/coupons/${couponId}`);
  return response.data;
};

export const createCoupon = async (data: any) => {
  const response = await axios.post(`${COOP_API_BASE_URL}/coupons`, data);
  return response.data;
};
