import { FetchOptions, ofetch } from 'ofetch';
import { AsyncDataOptions } from 'nuxt/app';

import FetchFactory from '../factory';

import { GetUserResponse, RequestTenderInput } from '~/types';

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

  async filterTenders(credentials: string): Promise {
    return await this.call(
      'GET',
      `${this.RESOURCE}/tenders/filter-search${credentials}`
    );
  }

  async searchTendersByValue(credentials: string): Promise {
    return await this.call(
      'GET',
      `${this.RESOURCE}/tenders/value-search${credentials}`
    );
  }

  async requestTender(credentials: RequestTenderInput): Promise {
    return await this.call(
      'POST',
      `${this.RESOURCE}/account/request-tender`,
      credentials
    );
  }

  async requestWriter(credentials: RequestTenderInput): Promise {
    return await this.call(
      'POST',
      `${this.RESOURCE}/account/request-writer`,
      credentials
    );
  }
}

export default DataModule;
