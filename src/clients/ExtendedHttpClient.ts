import { HttpClient } from 'generated/http-client';
import { handleParamsSerializer } from '../helper';
import { ParamsSerializerOptions } from 'axios';
import axiosRetry from 'axios-retry';


class ExtendedHttpClient extends HttpClient {
  public clientInstance = this.instance;

  constructor(baseURL: string, paramsSerializer?: (params: Record<string, unknown> | URLSearchParams, options?: ParamsSerializerOptions) => string) {
    super({
      baseURL: baseURL,
      paramsSerializer: (params, options) => {
        if(paramsSerializer) {
          return paramsSerializer(params, options);
        }

        return handleParamsSerializer(params);
      },
    });

    axiosRetry(this.clientInstance, { retries: 3 });

  }

}



export default ExtendedHttpClient
