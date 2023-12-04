
import FetchFactory from '../factory';

import { RequestTenderInput, contactUsInput, enumResponse } from '~/types';

class DataModule extends FetchFactory {
  private RESOURCE = '';

  async getGenericEnums(): Promise<enumResponse> {
    return await this.call<enumResponse>(
      'GET',
      `${this.RESOURCE}/generic-apis/all-enum`
    );
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

  async contactUs(credentials: contactUsInput): Promise {
    return await this.call(
      'POST',
      `https://dev.tgpcmedia.com/contact/create`,
      credentials
    );
  }
}

export default DataModule;
