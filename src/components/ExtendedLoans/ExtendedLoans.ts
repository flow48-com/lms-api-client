import { Loans } from 'generated/Loans';
import { HttpClient, RequestParams } from 'generated/http-client';
import { LoanRevioDisbursementsResponse } from 'src/integrations/schemas/loans-old';
import { AxiosResponse } from 'axios';
import {
  CancelLoanRequest,
  GetLoansParams,
  GetPaymentLinkRequestsData,
  NewLoan,
  NewPaymentLinkRequest,
  SetLoanDefaultReviewStatusPayload,
  WriteOffLoanPayload,
} from 'generated/data-contracts';
import { TPaymentRequestsSchemaResponse } from 'integrations/schemas/PaymentRequest';
import { TNewLoan, TValidatePaymentLinkRequest } from 'integrations/api/lms-api/ExtendedLoans';

class ExtendedLoans {
  private loans: Loans;

  constructor(httpClient: HttpClient) {
    this.loans = new Loans(httpClient);
  }

  getLoans = (query: URLSearchParams, params?: RequestParams) => {
    return this.loans.getLoans(query as GetLoansParams, params);
  };

  approveLoan: Loans['approveLoan'] = (loanId, params) => {
    return this.loans.approveLoan(loanId, params);
  };

  getPaymentLinkRequests = (loanId: string, params?: URLSearchParams) => {
    // FIXME: This method should be implemented in API docs now it missed QURY params
    // return this.loans.getPaymentLinkRequests(loanId, convertURLSearchParamsToRequestParams(params));

    return this.loans.http.request<GetPaymentLinkRequestsData, any>({
      path: `/loans/${loanId}/paymentLinkRequests`,
      method: 'GET',
      secure: true,
      format: 'json',
      query: params,
      ...params,
    });
  };

  postPaymentLinkRequest: Loans['postPaymentLinkRequest'] = (loanId, data) => {
    return this.loans.postPaymentLinkRequest(loanId, data);
  };

  getDetailedPaymentRequests = (
    url: string,
  ): Promise<AxiosResponse<TPaymentRequestsSchemaResponse>> => {
    return this.loans.http.request({
      method: 'GET',
      path: url,
    });
  };

  validatePaymentLinkRequest = (
    data: NewPaymentLinkRequest,
    params?: RequestParams,
  ): Promise<AxiosResponse<TValidatePaymentLinkRequest>> => {
    return this.loans.validatePaymentLinkRequest(data, params) as unknown as Promise<
      AxiosResponse<TValidatePaymentLinkRequest>
    >;
  };

  // This method should pe implemented in API docs now is missed
  getRevioDisbursements = (loanId: string, params?: RequestParams) => {
    return this.loans.http.request<LoanRevioDisbursementsResponse>({
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

  setLoanDefaultReviewStatus = (
    loanId: string,
    data: SetLoanDefaultReviewStatusPayload,
    params?: RequestParams,
  ) => {
    return this.loans.setLoanDefaultReviewStatus(loanId, data, params);
  };

  unsetLoanDefaultReviewStatus = (
    loanId: string,
    data: SetLoanDefaultReviewStatusPayload,
    params?: RequestParams,
  ) => {
    return this.loans.unsetLoanDefaultReviewStatus(loanId, data, params);
  };

  transitToDefaultProvision = (loanId: string, params?: RequestParams) => {
    return this.loans.transitToDefaultProvision(loanId, params);
  };

  writeOffLoan = (loanId: string, data: WriteOffLoanPayload, params?: RequestParams) => {
    return this.loans.writeOffLoan(loanId, data, params);
  };

  resetRiskFlag = (loanId: string, params?: RequestParams) => {
    return this.loans.resetRiskFlag(loanId, params);
  };
  cancelLoan = (loanId: string, data: CancelLoanRequest, params?: RequestParams) => {
    return this.loans.cancelLoan(loanId, data, params);
  };

  getLoan: Loans['getLoan'] = (loanId, params) => {
    return this.loans.getLoan(loanId, params);
  };

  createLoan = (data: TNewLoan, params: RequestParams = {}) => {
    return this.loans.createLoan(data as unknown as NewLoan, params);
  };
}

export default ExtendedLoans;
