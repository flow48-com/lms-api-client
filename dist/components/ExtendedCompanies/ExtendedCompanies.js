import { Companies } from 'generated/Companies';
class ExtendedCompanies {
    companies;
    constructor(httpClient) {
        this.companies = new Companies(httpClient);
    }
    getCompanyLoans = (query, params) => {
        return this.companies.getCompanyLoans(query, params);
    };
    getCompanies = (query, params = {}) => {
        return this.companies.getCompanies(query, params);
    };
    getCompany = (id, params) => {
        return this.companies.getCompany(id, params);
    };
    getCompanyActionLog = (query, params) => {
        return this.companies.getCompanyActionLog(query, params);
    };
    validateAdditionCompanyFormFields = (data, params) => {
        return this.companies.validateAdditionCompanyFormFields(data, params);
    };
    createCompany = (data, params) => {
        return this.companies.createCompany(data, params);
    };
}
export default ExtendedCompanies;
