import { Account, CreateCompanyData, GetCompaniesData, GetCompaniesParams, GetCompanyActionLogData, GetCompanyActionLogParams, GetCompanyBySalesforceIdData, GetCompanyData, GetCompanyLoansData, GetCompanyLoansParams, NewCompany, PutCompanyBySalesforceIdData, ValidateAdditionCompanyFormFieldsData } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';
export declare class Companies<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;
    constructor(http: HttpClient<SecurityDataType>);
    /**
     * No description
     *
     * @tags Companies
     * @name GetCompanies
     * @summary Get all companies
     * @request GET:/companies
     * @secure
     */
    getCompanies: (query: GetCompaniesParams, params?: RequestParams) => Promise<import("axios").AxiosResponse<GetCompaniesData, any>>;
    /**
     * No description
     *
     * @tags Companies
     * @name CreateCompany
     * @summary Create a new company
     * @request POST:/companies
     * @secure
     */
    createCompany: (data: NewCompany, params?: RequestParams) => Promise<import("axios").AxiosResponse<CreateCompanyData, any>>;
    /**
     * No description
     *
     * @tags Companies
     * @name GetCompany
     * @summary Get company data
     * @request GET:/companies/{companyId}
     * @secure
     */
    getCompany: (companyId: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<GetCompanyData, any>>;
    /**
     * No description
     *
     * @tags Companies
     * @name GetCompanyActionLog
     * @summary Get company action log data
     * @request GET:/companies/{companyId}/actionLogs
     * @secure
     */
    getCompanyActionLog: ({ companyId, ...query }: GetCompanyActionLogParams, params?: RequestParams) => Promise<import("axios").AxiosResponse<GetCompanyActionLogData, any>>;
    /**
     * No description
     *
     * @tags Companies
     * @name GetCompanyLoans
     * @summary Get company loans
     * @request GET:/companies/{companyId}/loans
     * @secure
     */
    getCompanyLoans: ({ companyId, ...query }: GetCompanyLoansParams, params?: RequestParams) => Promise<import("axios").AxiosResponse<GetCompanyLoansData, any>>;
    /**
     * No description
     *
     * @tags Companies
     * @name GetAdditionCompanyFormFields
     * @summary Get the list of allowed values for the fields of the company creation form
     * @request GET:/companies/additionFormFields
     * @secure
     */
    getAdditionCompanyFormFields: (params?: RequestParams) => Promise<import("axios").AxiosResponse<import("./data-contracts").FormFieldsResponse, any>>;
    /**
     * @description Any number of fields can be sent, one or all.
     *
     * @tags Companies
     * @name ValidateAdditionCompanyFormFields
     * @summary Validation of completed fields
     * @request POST:/companies/additionFormFields
     * @secure
     */
    validateAdditionCompanyFormFields: (data: NewCompany, params?: RequestParams) => Promise<import("axios").AxiosResponse<ValidateAdditionCompanyFormFieldsData, any>>;
    /**
     * No description
     *
     * @tags Salesforce
     * @name GetCompanyBySalesforceId
     * @summary Get company data by salesforce id
     * @request GET:/companies/sf/{sf_id}
     * @secure
     */
    getCompanyBySalesforceId: (sfId: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<GetCompanyBySalesforceIdData, any>>;
    /**
     * No description
     *
     * @tags Salesforce
     * @name PutCompanyBySalesforceId
     * @summary Insert/Update company data by salesforce id
     * @request PUT:/companies/sf/{sf_id}
     * @secure
     */
    putCompanyBySalesforceId: (sfId: string, data: Account, params?: RequestParams) => Promise<import("axios").AxiosResponse<PutCompanyBySalesforceIdData, any>>;
}
//# sourceMappingURL=Companies.d.ts.map