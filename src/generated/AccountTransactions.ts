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

import { GetAccountTransactionsData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class AccountTransactions<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
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
  getAccountTransactions = (loanId: string, params: RequestParams = {}) =>
    this.http.request<GetAccountTransactionsData, any>({
      path: `/accountTransactions/${loanId}`,
      method: 'GET',
      secure: true,
      ...params,
    });
}
