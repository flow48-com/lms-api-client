import { RevioPurchase } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';
export declare class Instalments<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;
    constructor(http: HttpClient<SecurityDataType>);
    /**
     * No description
     *
     * @tags Collections
     * @name AddPurchase
     * @summary Add purchase for instalment
     * @request POST:/instalments/{instalmentId}/purchases
     * @secure
     */
    addPurchase: (instalmentId: string, data: RevioPurchase, params?: RequestParams) => Promise<import("axios").AxiosResponse<any, any>>;
}
//# sourceMappingURL=Instalments.d.ts.map