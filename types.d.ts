export interface UserLoginInput {
  email: string
  password: string
}

export interface UserCreateResponse {
  message: string
  code: number
  token: string
}

export interface UserLoginResponse {
  message: string
  token: string
}

export interface UserEmailOTPInput {
  code: number | null
}

export interface UserEmailOTPResponse {
  message: string;
}