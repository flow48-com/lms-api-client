import 'axios-retry';
import { HttpClient } from 'generated/http-client';
import { handleParamsSerializer } from 'utils/helper';
class ExtendedHttpClient extends HttpClient {
    constructor(params) {
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
    }
}
export default ExtendedHttpClient;
