export interface UserLoginInput {
  email: string;
  password: string;
}

export interface UserCreateResponse {
  result: {
    [key: string]: ResultItems
  };
  response: {
    [key: string]: AccountItems
  };
}

export interface ResultItems {
  expirationDate: string;
  used: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface AccountItems {
  email: string;
  accountStatus: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface UserLoginResponse {
  email: string;
  accountStatus: string;
  createdAt: string;
  updatedAt: string;
  id: string;
  accessToken: string;
  refreshToken: string;
}

export interface UserEmailOTPInput {
  userId: string;
  otp: {
    [key: string]: OTPDetails;
  }
}

export interface OTPDetails {
  id: string;
  code: string;
}

export interface OtpValue {
  code: string;
}

export interface UserEmailOTPResponse {
  validOTP: boolean;
  email: string;
  accountStatus: string;
  createdAt: string;
  updatedAt: string;
  id: string;
  accessToken: string;
  refreshToken: string;
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

export interface ResetPasswordEmail {
  expirationDate: string;
  used: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface ConfirmResetOTPInput {
  id: string;
  code: string;
}

export interface ConfirmResetOTPResponse {
  validOtp: boolean
}

export interface NewPasswordInput {
  password: string;
  confirmPassword: string;
}