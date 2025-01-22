import { UpdateServerTimePayload } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';
export declare class TimeMachine<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;
    constructor(http: HttpClient<SecurityDataType>);
    /**
     * No description
     *
     * @tags Debug
     * @name GetServerTime
     * @summary Get current server time
     * @request GET:/timeMachine
     * @secure
     */
    getServerTime: (params?: RequestParams) => Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * No description
     *
     * @tags Debug
     * @name UpdateServerTime
     * @summary Update server time for debugging
     * @request POST:/timeMachine
     * @secure
     */
    updateServerTime: (data: UpdateServerTimePayload, params?: RequestParams) => Promise<import("axios").AxiosResponse<any, any>>;
}
//# sourceMappingURL=TimeMachine.d.ts.map