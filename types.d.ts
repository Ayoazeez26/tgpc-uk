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
  email: string;
}

export interface RequestTenderInput {
  email: string;
  tenderName: string;
  tenderTitle: string;
}

export interface RefreshTokenInput {
  expiredToken: string;
  refreshToken: string;
}

export interface UpdateProfileInput {
  fullName: string;
}

export interface address {
  country: string;
  city: string;
  state: string;
  zip: string;
}

export interface phoneNumber {
  code: string;
  number: string;
  local: string;
}

export interface UpdateProfileResponse {
  email: string;
  accountStatus: string;
  createdAt: string;
  updatedAt: string;
  address: {
    [key: string]: address;
  };
  firstName: string;
  gender: string;
  maritalStatus: string;
  phoneNumber: {
    [key: string]: phoneNumber;
  }
  fullName: string;
  id: string;
}

export interface updatePasswordInput {
  currentPassword: string;
  password: string;
  confirmPassword: string;
}

export interface updatePasswordResponse {
  success: boolean;
}

export interface enumResponse {
  genderEnum: string[];
  signUpMediumEnum: string[];
  accountStatusEnum: string[];
  countryCodeAbvENum: string[];
  currency: string[];
  countryEnum: string[];
  phoneCountryCodeEnum: string[];
  statusEnum: string[];
  maritalStatus: string[];
  dateFormat: string[];
  locationEnum: string[];
  contactEnum: string[];
}

export interface contactUsInput {
  firstName: string;
  lastName: string;
  message: string;
  email: string;
  subject: string;
  account: string;
}