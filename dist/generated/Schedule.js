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
export class Schedule {
    http;
    constructor(http) {
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
    getScheduleItems = (query, params = {}) => this.http.request({
        path: `/schedule`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
    });
}
