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

import { GetServerTimeData, UpdateServerTimeData, UpdateServerTimePayload } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class TimeMachine<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Debug
   * @name GetServerTime
   * @summary Get current server time
   * @request GET:/timeMachine
   * @secure
   */
  getServerTime = (params: RequestParams = {}) =>
    this.http.request<GetServerTimeData, any>({
      path: `/timeMachine`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Debug
   * @name UpdateServerTime
   * @summary Update server time for debugging
   * @request POST:/timeMachine
   * @secure
   */
  updateServerTime = (data: UpdateServerTimePayload, params: RequestParams = {}) =>
    this.http.request<UpdateServerTimeData, any>({
      path: `/timeMachine`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
