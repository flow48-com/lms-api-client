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
export class TimeMachine {
    http;
    constructor(http) {
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
    getServerTime = (params = {}) => this.http.request({
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
    updateServerTime = (data, params = {}) => this.http.request({
        path: `/timeMachine`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
    });
}
