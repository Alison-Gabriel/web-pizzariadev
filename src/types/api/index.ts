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
