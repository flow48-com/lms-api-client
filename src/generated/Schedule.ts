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

import { GetScheduleItemsData, GetScheduleItemsParams } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Schedule<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags ScheduleItems
   * @name GetScheduleItems
   * @summary Get schedule items
   * @request GET:/schedule
   * @secure
   */
  getScheduleItems = (query: GetScheduleItemsParams, params: RequestParams = {}) =>
    this.http.request<GetScheduleItemsData, any>({
      path: `/schedule`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
}
