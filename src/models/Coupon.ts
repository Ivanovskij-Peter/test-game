export interface Coupon {
  id: string;
  code: string;
  discount: number;
  expirationDate: string; // or Date if you prefer
  productId: string;
  used: boolean;
}
