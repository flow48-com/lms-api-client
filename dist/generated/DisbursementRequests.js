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
import { ContentType } from './http-client';
export class DisbursementRequests {
    http;
    constructor(http) {
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
    getDisbursementRequests = (query, params = {}) => this.http.request({
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
    postApproveBulkDisbursementRequests = (data, params = {}) => this.http.request({
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
    postCancelDisbursementRequests = (disbursementRequestId, params = {}) => this.http.request({
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
    postApproveDisbursementRequests = (disbursementRequestId, params = {}) => this.http.request({
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
    disbursementRequestRevioStatusUpdate = (disbursementRequestId, data, params = {}) => this.http.request({
        path: `/disbursementRequests/${disbursementRequestId}/revioStatusUpdate`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
    });
}
