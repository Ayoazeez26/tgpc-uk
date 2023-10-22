export interface UserLoginInput {
  email: string;
  password: string;
}

export interface UserCreateResponse {
  message: string;
  code: number;
  token: string;
}

export interface UserLoginResponse {
  message: string;
  token: string;
}

export interface UserEmailOTPInput {
  code: number | null;
}

export interface UserEmailOTPResponse {
  message: string;
}

export interface GetUserResponse {
  email: string;
  company: null | string;
  status: string;
  subscription: string;
  end_date: null | string;
  firstName: null | string;
  lastName: null | string;
  start_date: null | string;
}
