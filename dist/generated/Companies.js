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
export class Companies {
    http;
    constructor(http) {
        this.http = http;
    }
    /**
     * No description
     *
     * @tags Companies
     * @name GetCompanies
     * @summary Get all companies
     * @request GET:/companies
     * @secure
     */
    getCompanies = (query, params = {}) => this.http.request({
        path: `/companies`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
    });
    /**
     * No description
     *
     * @tags Companies
     * @name CreateCompany
     * @summary Create a new company
     * @request POST:/companies
     * @secure
     */
    createCompany = (data, params = {}) => this.http.request({
        path: `/companies`,
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
     * @tags Companies
     * @name GetCompany
     * @summary Get company data
     * @request GET:/companies/{companyId}
     * @secure
     */
    getCompany = (companyId, params = {}) => this.http.request({
        path: `/companies/${companyId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
    });
    /**
     * No description
     *
     * @tags Companies
     * @name GetCompanyActionLog
     * @summary Get company action log data
     * @request GET:/companies/{companyId}/actionLogs
     * @secure
     */
    getCompanyActionLog = ({ companyId, ...query }, params = {}) => this.http.request({
        path: `/companies/${companyId}/actionLogs`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
    });
    /**
     * No description
     *
     * @tags Companies
     * @name GetCompanyLoans
     * @summary Get company loans
     * @request GET:/companies/{companyId}/loans
     * @secure
     */
    getCompanyLoans = ({ companyId, ...query }, params = {}) => this.http.request({
        path: `/companies/${companyId}/loans`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
    });
    /**
     * No description
     *
     * @tags Companies
     * @name GetAdditionCompanyFormFields
     * @summary Get the list of allowed values for the fields of the company creation form
     * @request GET:/companies/additionFormFields
     * @secure
     */
    getAdditionCompanyFormFields = (params = {}) => this.http.request({
        path: `/companies/additionFormFields`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
    });
    /**
     * @description Any number of fields can be sent, one or all.
     *
     * @tags Companies
     * @name ValidateAdditionCompanyFormFields
     * @summary Validation of completed fields
     * @request POST:/companies/additionFormFields
     * @secure
     */
    validateAdditionCompanyFormFields = (data, params = {}) => this.http.request({
        path: `/companies/additionFormFields`,
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
     * @tags Salesforce
     * @name GetCompanyBySalesforceId
     * @summary Get company data by salesforce id
     * @request GET:/companies/sf/{sf_id}
     * @secure
     */
    getCompanyBySalesforceId = (sfId, params = {}) => this.http.request({
        path: `/companies/sf/${sfId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
    });
    /**
     * No description
     *
     * @tags Salesforce
     * @name PutCompanyBySalesforceId
     * @summary Insert/Update company data by salesforce id
     * @request PUT:/companies/sf/{sf_id}
     * @secure
     */
    putCompanyBySalesforceId = (sfId, data, params = {}) => this.http.request({
        path: `/companies/sf/${sfId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
    });
}
