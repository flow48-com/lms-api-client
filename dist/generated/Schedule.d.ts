import { GetScheduleItemsData, GetScheduleItemsParams } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';
export declare class Schedule<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;
    constructor(http: HttpClient<SecurityDataType>);
    /**
     * No description
     *
     * @tags ScheduleItems
     * @name GetScheduleItems
     * @summary Get schedule items
     * @request GET:/schedule
     * @secure
     */
    getScheduleItems: (query: GetScheduleItemsParams, params?: RequestParams) => Promise<import("axios").AxiosResponse<GetScheduleItemsData, any>>;
}
//# sourceMappingURL=Schedule.d.ts.map