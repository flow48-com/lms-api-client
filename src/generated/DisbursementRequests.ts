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

import {
  DisbursementBulkApproval,
  DisbursementRequestRevioStatusUpdateData,
  GetDisbursementRequestsData,
  GetDisbursementRequestsParams,
  PostApproveBulkDisbursementRequestsData,
  PostApproveDisbursementRequestsData,
  PostCancelDisbursementRequestsData,
  RevioEftPayment,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class DisbursementRequests<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags DisbursementRequests
   * @name GetDisbursementRequests
   * @summary Get disbursement requests
   * @request GET:/disbursementRequests
   */
  getDisbursementRequests = (query: GetDisbursementRequestsParams, params: RequestParams = {}) =>
    this.http.request<GetDisbursementRequestsData, any>({
      path: `/disbursementRequests`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DisbursementRequests
   * @name PostApproveBulkDisbursementRequests
   * @summary Approve a collection of disbursement requests
   * @request POST:/disbursementRequests/approveAll
   * @secure
   */
  postApproveBulkDisbursementRequests = (
    data: DisbursementBulkApproval,
    params: RequestParams = {},
  ) =>
    this.http.request<PostApproveBulkDisbursementRequestsData, any>({
      path: `/disbursementRequests/approveAll`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DisbursementRequests
   * @name PostCancelDisbursementRequests
   * @summary Cancel disbursement request
   * @request POST:/disbursementRequests/{disbursementRequestId}/cancel
   * @secure
   */
  postCancelDisbursementRequests = (disbursementRequestId: string, params: RequestParams = {}) =>
    this.http.request<PostCancelDisbursementRequestsData, void>({
      path: `/disbursementRequests/${disbursementRequestId}/cancel`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DisbursementRequests
   * @name PostApproveDisbursementRequests
   * @summary Approve disbursement request
   * @request POST:/disbursementRequests/{disbursementRequestId}/approve
   * @secure
   */
  postApproveDisbursementRequests = (disbursementRequestId: string, params: RequestParams = {}) =>
    this.http.request<PostApproveDisbursementRequestsData, any>({
      path: `/disbursementRequests/${disbursementRequestId}/approve`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DisbursementRequests
   * @name DisbursementRequestRevioStatusUpdate
   * @summary Receive payment status updates from revio-disbursement-gateway
   * @request POST:/disbursementRequests/{disbursementRequestId}/revioStatusUpdate
   * @secure
   */
  disbursementRequestRevioStatusUpdate = (
    disbursementRequestId: string,
    data: RevioEftPayment,
    params: RequestParams = {},
  ) =>
    this.http.request<DisbursementRequestRevioStatusUpdateData, any>({
      path: `/disbursementRequests/${disbursementRequestId}/revioStatusUpdate`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
