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

export interface CategoryResponse {
  id: string;
  name: string;
}

export interface ProductResponse {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
  id: string;
  created_at: Date | null;
  updated_at: Date | null;
}

export interface OrderResponse {
  id: string;
  name: string;
  table: number;
  is_done: boolean;
  is_draft: boolean;
  created_at: string;
  updated_at: string;
}
