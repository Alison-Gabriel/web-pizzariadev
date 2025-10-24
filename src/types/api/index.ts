export interface LoginResponse {
  id: string;
  name: string;
  email: string;
  token: string;
}

export interface SignUpResponse {
  id: string;
  name: string;
  email: string;
}

export interface ErrorResponse {
  status?: string;
  message: string;
}

export type CategoryResponse = {
  id: string;
  name: string;
};

export type ProductResponse = {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
  id: string;
  created_at: Date | null;
  updated_at: Date | null;
};
