export interface Reviews {
  rating?: number;
  comment?: string;
  user: {
    userId?: string;
    avatar?: string;
    userName?: string;
  };
  image: [];
}

export interface Cart {
  userId?: string;
  totalPrice?: number;
  totalQuantity?: number;
  items: [
    {
      store?: string;
      product?: string;
      productName?: string;
      quantity: number;
      price?: number;
      mainPhoto?: string;
      color?: string;
      size?: string;
    }
  ];
}

export interface ProductField {
  categoryId?: string;
  nameCard?: string;
  price?: number;
}
