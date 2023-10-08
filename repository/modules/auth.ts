import { FetchOptions } from 'ofetch';
import { AsyncDataOptions } from 'nuxt/app';

import FetchFactory from '../factory';
import {
  UserLoginInput,
  UserCreateResponse,
  UserLoginResponse,
  UserEmailOTPInput,
} from '~/types';

class AuthModule extends FetchFactory {
  private RESOURCE = '';

  async signup(credentials: UserLoginInput): Promise<UserCreateResponse> {
    return await this.call<UserCreateResponse>(
      'POST',
      `${this.RESOURCE}/signup`,
      credentials
    );
  }

  async login(credentials: UserLoginInput): Promise<UserLoginResponse> {
    return await this.call<UserLoginResponse>(
      'POST',
      `${this.RESOURCE}/login`,
      credentials
    );
  }

  async verifyEmail(
    credentials: UserEmailOTPInput
  ): Promise<UserLoginResponse> {
    return await this.call<UserLoginResponse>(
      'POST',
      `${this.RESOURCE}/verifyEmail`,
      credentials
    );
  }
}

export default AuthModule;
