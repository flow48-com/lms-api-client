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
export class Instalments {
    http;
    constructor(http) {
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
    addPurchase = (instalmentId, data, params = {}) => this.http.request({
        path: `/instalments/${instalmentId}/purchases`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
    });
}
