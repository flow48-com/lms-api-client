import { Companies } from 'generated/Companies';
import { HttpClient, RequestParams } from 'generated/http-client';
import { CustomType } from 'integrations/api/helper';
import { Link } from 'lms-types';
import { AxiosResponse } from 'axios';
import {
  CompanyLinks,
  CompanyResponse as _CompanyResponse,
  GetCompaniesParams,
  GetCompanyActionLogParams,
} from 'generated/data-contracts';

export type CompanyResponse = _CompanyResponse & {
  _links: {
    getCompany?: Link;
    salesforce?: Link;
  } & CompanyLinks;
};

export type QueryCompanyResponse = CustomType<
  { companies: CompanyResponse[] },
  {
    getCompanies?: Link;
    createCompany?: Link;
    createLoan?: Link;
    getLoans?: Link;
  },
  {
    sortFields: string[];
    includeValues: string[];
  }
>;

class ExtendedCompanies {
  private companies: Companies;

  constructor(httpClient: HttpClient) {
    this.companies = new Companies(httpClient);
  }

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
