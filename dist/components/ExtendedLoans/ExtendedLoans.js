import { Loans } from 'generated/Loans';
class ExtendedLoans {
    loans;
    constructor(httpClient) {
        this.loans = new Loans(httpClient);
    }
    getLoans = (query, params) => {
        return this.loans.getLoans(query, params);
    };
    approveLoan = (loanId, params) => {
        return this.loans.approveLoan(loanId, params);
    };
    getPaymentLinkRequests = (loanId, params) => {
        // FIXME: This method should be implemented in API docs now it missed QUERY params
        // return this.loans.getPaymentLinkRequests(loanId, convertURLSearchParamsToRequestParams(params));
        return this.loans.http.request({
            path: `/loans/${loanId}/paymentLinkRequests`,
            method: 'GET',
            secure: true,
            format: 'json',
            query: params,
            ...params,
        });
    };
    postPaymentLinkRequest = (loanId, data) => {
        return this.loans.postPaymentLinkRequest(loanId, data);
    };
    getDetailedPaymentRequests = (url) => {
        return this.loans.http.request({
            method: 'GET',
            path: url,
        });
    };
    validatePaymentLinkRequest = (data, params) => {
        return this.loans.validatePaymentLinkRequest(data, params);
    };
    // This method should pe implemented in API docs now is missed
    getRevioDisbursements = (loanId, params) => {
        return this.loans.http.request({
            path: `/loans/${loanId}/revioDisbursements`,
            method: 'GET',
            query: {
                loanId,
            },
            secure: true,
            format: 'json',
            ...params,
        });
    };
    setLoanDefaultReviewStatus = (loanId, data, params) => {
        return this.loans.setLoanDefaultReviewStatus(loanId, data, params);
    };
    unsetLoanDefaultReviewStatus = (loanId, data, params) => {
        return this.loans.unsetLoanDefaultReviewStatus(loanId, data, params);
    };
    transitToDefaultProvision = (loanId, params) => {
        return this.loans.transitToDefaultProvision(loanId, params);
    };
    writeOffLoan = (loanId, data, params) => {
        return this.loans.writeOffLoan(loanId, data, params);
    };
    resetRiskFlag = (loanId, params) => {
        return this.loans.resetRiskFlag(loanId, params);
    };
    cancelLoan = (loanId, data, params) => {
        return this.loans.cancelLoan(loanId, data, params);
    };
    getLoan = (loanId, params) => {
        return this.loans.getLoan(loanId, params);
    };
    createLoan = (data, params = {}) => {
        return this.loans.createLoan(data, params);
    };
}
export default ExtendedLoans;
