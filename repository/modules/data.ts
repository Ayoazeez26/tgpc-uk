import { FetchOptions, ofetch } from 'ofetch';
import { AsyncDataOptions } from 'nuxt/app';

import FetchFactory from '../factory';

import { GetUserResponse } from '~/types';

class DataModule extends FetchFactory {
  private RESOURCE = '';

  async getUser(): Promise<GetUserResponse> {
    return await this.call<GetUserResponse>('GET', `${this.RESOURCE}/getUser`);
  }

  async searchTenders(credentials: string): Promise {
    return await this.call(
      'GET',
      `${this.RESOURCE}/searchTenders${credentials}`
    );
  }
}

export default DataModule;
