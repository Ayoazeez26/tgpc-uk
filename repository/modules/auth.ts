import { FetchOptions, ofetch } from 'ofetch';
import { AsyncDataOptions } from 'nuxt/app';

import FetchFactory from '../factory';
import type {
  UserLoginInput,
  UserCreateResponse,
  UserLoginResponse,
  UserEmailOTPInput,
  UserEmailOTPResponse,
  ResetPasswordEmail,
  ConfirmResetOTPInput,
  ConfirmResetOTPResponse,
  NewPasswordInput,
  RefreshTokenInput,
  UpdateProfileInput,
  UpdateProfileResponse,
  updatePasswordInput,
  updatePasswordResponse,
} from '~/types';

class AuthModule extends FetchFactory {
  private RESOURCE = '';
  async signup(credentials: UserLoginInput): Promise<UserCreateResponse> {
    return await this.call<UserCreateResponse>(
      'POST',
      `${this.RESOURCE}/account/register`,
      credentials
    );
  }

  async login(credentials: UserLoginInput): Promise<UserLoginResponse> {
    return await this.call<UserLoginResponse>(
      'POST',
      `${this.RESOURCE}/account/login`,
      credentials
    );
  }

  async verifyEmail(
    credentials: UserEmailOTPInput
  ): Promise<UserEmailOTPResponse> {
    return await this.call<UserEmailOTPResponse>(
      'POST',
      `${this.RESOURCE}/account/verify-and-auth`,
      credentials
    );
  }

  async resetPasswordEmail(credentials: string): Promise<ResetPasswordEmail> {
    return await this.call<ResetPasswordEmail>(
      'POST',
      `${this.RESOURCE}/account/send-otp/${credentials}`
    );
  }

  async confirmResetPassword(
    credentials: ConfirmResetOTPInput
  ): Promise<ConfirmResetOTPResponse> {
    return await this.call<ConfirmResetOTPResponse>(
      'POST',
      `${this.RESOURCE}/account/verify-otp`,
      credentials
    );
  }

  async setNewPassword(
    credentials: NewPasswordInput
  ): Promise<ConfirmResetOTPResponse> {
    return await this.call<ConfirmResetOTPResponse>(
      'POST',
      `${this.RESOURCE}/account/reset-password`,
      credentials
    );
  }

  async refreshToken(
    credentials: RefreshTokenInput
  ): Promise<ConfirmResetOTPResponse> {
    return await this.call<ConfirmResetOTPResponse>(
      'POST',
      `${this.RESOURCE}/account/refresh-token`,
      credentials
    );
  }

  async updateProfile(
    credentials: UpdateProfileInput
  ): Promise<UpdateProfileResponse> {
    return await this.call<UpdateProfileResponse>(
      'PATCH',
      `${this.RESOURCE}/account/update-profile`,
      credentials
    );
  }

  async updatePassword(
    credentials: updatePasswordInput
  ): Promise<updatePasswordResponse> {
    return await this.call<updatePasswordResponse>(
      'POST',
      `${this.RESOURCE}/account/update-password`,
      credentials
    );
  }
}

export default AuthModule;
