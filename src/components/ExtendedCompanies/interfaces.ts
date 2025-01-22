import {
  CompanyLinks,
  CompanyResponse as _CompanyResponse,
  GetCompanyLoansData,
  GetCompanyLoansParams,
} from 'generated/data-contracts';
import { RequestParams } from 'generated/http-client';
import { AxiosResponse } from 'axios';
import { Link, WithEmbedded, WithLinks, WithMeta } from 'types';

export type CustomType<Data, Links, Embedded = NonNullable<unknown>> = WithEmbedded<
  WithLinks<WithMeta<Data>, Links>,
  Embedded
>;

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

export type TGetCompanyLoansQuery = (
  query: Omit<GetCompanyLoansParams, 'include'> & { include?: string[] },
  params?: RequestParams,
) => Promise<AxiosResponse<GetCompanyLoansData>>;
