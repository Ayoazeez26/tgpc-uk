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
      `${this.RESOURCE}/tenders/search${credentials}`
    );
  }

  async searchTendersByLocation(credentials: string): Promise {
    return await this.call(
      'GET',
      `${this.RESOURCE}/tenders/location-search${credentials}`
    );
  }
}

export default DataModule;
