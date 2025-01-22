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

import { RevioPurchase } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Instalments<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Collections
   * @name AddPurchase
   * @summary Add purchase for instalment
   * @request POST:/instalments/{instalmentId}/purchases
   * @secure
   */
  addPurchase = (instalmentId: string, data: RevioPurchase, params: RequestParams = {}) =>
    this.http.request<any, any>({
      path: `/instalments/${instalmentId}/purchases`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
