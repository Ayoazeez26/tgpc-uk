import { FetchOptions, ofetch } from 'ofetch';
import { AsyncDataOptions } from 'nuxt/app';

import FetchFactory from '../factory';
import {
  UserLoginInput,
  UserCreateResponse,
  UserLoginResponse,
  UserEmailOTPInput,
  UserEmailOTPResponse
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
}

export default AuthModule;
