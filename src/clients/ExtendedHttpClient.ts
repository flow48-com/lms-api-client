import { ApiConfig, HttpClient } from 'generated/http-client';
import { handleParamsSerializer } from '../helper';
import { ParamsSerializerOptions } from 'axios';
import axiosRetry from 'axios-retry';


class ExtendedHttpClient extends HttpClient {

  constructor(params: ApiConfig) {
    super({
      baseURL: params.baseURL,
      paramsSerializer: (params, options) => {
        if (params.paramsSerializer) {
          return params.paramsSerializer(params, options);
        }

        return handleParamsSerializer(params);
      },
      'axios-retry': {
        retries: 3,
      },
      ...params,
    });

    // axiosRetry(this.clientInstance, { retries: 3 });

  }

}


export default ExtendedHttpClient;
