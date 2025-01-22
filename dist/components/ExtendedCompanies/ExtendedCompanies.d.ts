import { Companies } from 'generated/Companies';
import { HttpClient, RequestParams } from 'generated/http-client';
import { AxiosResponse } from 'axios';
import { QueryCompanyResponse, TGetCompanyLoansQuery } from 'components/ExtendedCompanies/interfaces';
declare class ExtendedCompanies {
    private companies;
    constructor(httpClient: HttpClient);
    getCompanyLoans: TGetCompanyLoansQuery;
    getCompanies: (query: URLSearchParams, params?: RequestParams) => Promise<AxiosResponse<QueryCompanyResponse>>;
    getCompany: Companies['getCompany'];
    getCompanyActionLog: Companies['getCompanyActionLog'];
    validateAdditionCompanyFormFields: Companies['validateAdditionCompanyFormFields'];
    createCompany: Companies['createCompany'];
}
export default ExtendedCompanies;
//# sourceMappingURL=ExtendedCompanies.d.ts.map