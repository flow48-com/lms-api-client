import { HttpClient, RequestParams } from './http-client';
export declare class AccountTransactions<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;
    constructor(http: HttpClient<SecurityDataType>);
    /**
     * No description
     *
     * @tags Debug
     * @name GetAccountTransactions
     * @summary Get loan account transactions
     * @request GET:/accountTransactions/{loanId}
     * @secure
     */
    getAccountTransactions: (loanId: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<any, any>>;
}
//# sourceMappingURL=AccountTransactions.d.ts.map