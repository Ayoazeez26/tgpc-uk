import { FetchOptions, ofetch } from 'ofetch';
import { AsyncDataOptions } from 'nuxt/app';

import FetchFactory from '../factory';

class DataModule extends FetchFactory {
  private RESOURCE = '';

  async getUser(): Promise {
    return await this.call('GET', `${this.RESOURCE}/getUser`)
  }
}

export default DataModule;
