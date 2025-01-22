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

import { DashboardListData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Dashboard<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Dashboard
   * @name DashboardList
   * @summary Get dashboard stats
   * @request GET:/dashboard
   */
  dashboardList = (params: RequestParams = {}) =>
    this.http.request<DashboardListData, any>({
      path: `/dashboard`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
