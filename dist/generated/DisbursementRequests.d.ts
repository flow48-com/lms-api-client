import { DisbursementBulkApproval, GetDisbursementRequestsData, GetDisbursementRequestsParams, RevioEftPayment } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';
export declare class DisbursementRequests<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;
    constructor(http: HttpClient<SecurityDataType>);
    /**
     * No description
     *
     * @tags DisbursementRequests
     * @name GetDisbursementRequests
     * @summary Get disbursement requests
     * @request GET:/disbursementRequests
     */
    getDisbursementRequests: (query: GetDisbursementRequestsParams, params?: RequestParams) => Promise<import("axios").AxiosResponse<GetDisbursementRequestsData, any>>;
    /**
     * No description
     *
     * @tags DisbursementRequests
     * @name PostApproveBulkDisbursementRequests
     * @summary Approve a collection of disbursement requests
     * @request POST:/disbursementRequests/approveAll
     * @secure
     */
    postApproveBulkDisbursementRequests: (data: DisbursementBulkApproval, params?: RequestParams) => Promise<import("axios").AxiosResponse<import("./data-contracts").BulkDisbursementRequestApproveResponse, any>>;
    /**
     * No description
     *
     * @tags DisbursementRequests
     * @name PostCancelDisbursementRequests
     * @summary Cancel disbursement request
     * @request POST:/disbursementRequests/{disbursementRequestId}/cancel
     * @secure
     */
    postCancelDisbursementRequests: (disbursementRequestId: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<import("./data-contracts").NewDisbursementRequestResponse, any>>;
    /**
     * No description
     *
     * @tags DisbursementRequests
     * @name PostApproveDisbursementRequests
     * @summary Approve disbursement request
     * @request POST:/disbursementRequests/{disbursementRequestId}/approve
     * @secure
     */
    postApproveDisbursementRequests: (disbursementRequestId: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<import("./data-contracts").NewDisbursementRequestResponse, any>>;
    /**
     * No description
     *
     * @tags DisbursementRequests
     * @name DisbursementRequestRevioStatusUpdate
     * @summary Receive payment status updates from revio-disbursement-gateway
     * @request POST:/disbursementRequests/{disbursementRequestId}/revioStatusUpdate
     * @secure
     */
    disbursementRequestRevioStatusUpdate: (disbursementRequestId: string, data: RevioEftPayment, params?: RequestParams) => Promise<import("axios").AxiosResponse<import("./data-contracts").NewDisbursementRequestResponse, any>>;
}
//# sourceMappingURL=DisbursementRequests.d.ts.map