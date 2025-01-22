import { DashboardListData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';
export declare class Dashboard<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;
    constructor(http: HttpClient<SecurityDataType>);
    /**
     * No description
     *
     * @tags Dashboard
     * @name DashboardList
     * @summary Get dashboard stats
     * @request GET:/dashboard
     */
    dashboardList: (params?: RequestParams) => Promise<import("axios").AxiosResponse<DashboardListData, any>>;
}
//# sourceMappingURL=Dashboard.d.ts.map