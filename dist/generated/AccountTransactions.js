/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
export class AccountTransactions {
    http;
    constructor(http) {
        this.http = http;
    }
    /**
     * No description
     *
     * @tags Debug
     * @name GetAccountTransactions
     * @summary Get loan account transactions
     * @request GET:/accountTransactions/{loanId}
     * @secure
     */
    getAccountTransactions = (loanId, params = {}) => this.http.request({
        path: `/accountTransactions/${loanId}`,
        method: 'GET',
        secure: true,
        ...params,
    });
}
