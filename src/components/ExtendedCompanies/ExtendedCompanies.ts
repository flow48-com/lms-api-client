import { Companies } from 'generated/Companies';
import { HttpClient, RequestParams } from 'generated/http-client';
import { AxiosResponse } from 'axios';
import {
  GetCompaniesParams,
  GetCompanyActionLogParams,
  GetCompanyLoansParams,
} from 'generated/data-contracts';
import {
  QueryCompanyResponse,
  TGetCompanyLoansQuery,
} from 'integrations/api/lms-api/ExtendedCompanies';

class ExtendedCompanies {
  private companies: Companies;

  constructor(httpClient: HttpClient) {
    this.companies = new Companies(httpClient);
  }

  getCompanyLoans: TGetCompanyLoansQuery = (query, params) => {
    return this.companies.getCompanyLoans(query as GetCompanyLoansParams, params);
  };

  getCompanies = (
    query: URLSearchParams,
    params: RequestParams = {},
  ): Promise<AxiosResponse<QueryCompanyResponse>> => {
    return this.companies.getCompanies(query as GetCompaniesParams, params) as Promise<
      AxiosResponse<QueryCompanyResponse>
    >;
  };

  getCompany: Companies['getCompany'] = (id, params) => {
    return this.companies.getCompany(id, params);
  };

  getCompanyActionLog: Companies['getCompanyActionLog'] = (
    query: GetCompanyActionLogParams,
    params,
  ) => {
    return this.companies.getCompanyActionLog(query, params);
  };

  validateAdditionCompanyFormFields: Companies['validateAdditionCompanyFormFields'] = (
    data,
    params,
  ) => {
    return this.companies.validateAdditionCompanyFormFields(data, params);
  };

  createCompany: Companies['createCompany'] = (data, params) => {
    return this.companies.createCompany(data, params);
  };
}

export default ExtendedCompanies;
