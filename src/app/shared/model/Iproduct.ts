export interface Iproduct {
  productId: number;
  productName: string;
  productImage: string;
  productDescription: string;
  isAvailable: boolean;
  productPrice: number;
  warranty: string;
  reviews: Ireviews[];
}

export interface Ireviews {
  customerName: string;
  rating: number;
  comment: string;
}
