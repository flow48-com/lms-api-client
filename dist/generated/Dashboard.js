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
export class Dashboard {
    http;
    constructor(http) {
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
    dashboardList = (params = {}) => this.http.request({
        path: `/dashboard`,
        method: 'GET',
        format: 'json',
        ...params,
    });
}
