export interface SignIn {
  email?: string;
  password?: string;
}

export interface SignUp {
  userName?: string;
  email?: string;
  password?: string;
}

export interface Account {
  userName?: string;
  email?: string;
  phone?: number;
  avatar?: string;
}

export interface AddToCart {
  productId?: string;
  color?: string;
  quantity?: number;
  size?: string;
}
