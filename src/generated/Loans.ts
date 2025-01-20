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

import {
  ActualizeLoanData,
  AddDisbursementData,
  AddRepaymentData,
  ApproveLoanData,
  CalculateIbfLoanPrincipalData,
  CalculateIbfLoanPrincipalPayload,
  CalculateIbfRatesData,
  CalculateIbfRatesPayload,
  CalculateLoanInterestData,
  CalculateLoanInterestPayload,
  CancelLoanData,
  CancelLoanRequest,
  CancelLoanTransactionData,
  CancelOperationRequest,
  CreateLoanData,
  EmailPaymentLinkRequestData,
  GetAdditionLoanFormFieldsData,
  GetApprovalPendingDisbursementRequestData,
  GetLoanAccruedInterestData,
  GetLoanActionLogData,
  GetLoanActionLogParams,
  GetLoanBySalesforceIdData,
  GetLoanData,
  GetLoanDisbursementRequestsData,
  GetLoanDisbursementRequestsParams,
  GetLoanNotesData,
  GetLoanNotesParams,
  GetLoanScheduleData,
  GetLoanTransactionData,
  GetLoansData,
  GetLoansParams,
  GetPaymentLinkPaymentRequestsData,
  GetPaymentLinkRequestFieldsData,
  GetPaymentLinkRequestsData,
  GetRepaymentFormFieldsData,
  GetRevioCollectionGatewayLoanData,
  GetTransactionsData,
  GetTransactionsParams,
  NewDisbursement,
  NewDisbursementRequest,
  NewLoan,
  NewPaymentLinkRequest,
  NewRepayment,
  Opportunity,
  PostPaymentLinkRequestData,
  PutLoanBySalesforceIdData,
  RequestDisbursementData,
  ResetRiskFlagData,
  SetLoanDefaultReviewStatusData,
  SetLoanDefaultReviewStatusPayload,
  TransitToDefaultProvisionData,
  UnsetLoanDefaultReviewStatusData,
  UnsetLoanDefaultReviewStatusPayload,
  ValidateAdditionLoanFormFieldsData,
  ValidateDisbursementFormFieldsData,
  ValidatePaymentLinkRequestData,
  ValidateRepaymentFormFieldsData,
  WriteOffLoanData,
  WriteOffLoanPayload,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Loans<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Loans
   * @name GetLoans
   * @summary Get all loans
   * @request GET:/loans
   * @secure
   */
  getLoans = (query: GetLoansParams, params: RequestParams = {}) =>
    this.http.request<GetLoansData, any>({
      path: `/loans`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Loans
   * @name CreateLoan
   * @summary Create a new loan
   * @request POST:/loans
   * @secure
   */
  createLoan = (data: NewLoan, params: RequestParams = {}) =>
    this.http.request<CreateLoanData, any>({
      path: `/loans`,
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
   * @tags Loans
   * @name GetLoan
   * @summary Get loan data by id
   * @request GET:/loans/{loanId}
   * @secure
   */
  getLoan = (loanId: string, params: RequestParams = {}) =>
    this.http.request<GetLoanData, any>({
      path: `/loans/${loanId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Loans
   * @name GetLoanActionLog
   * @summary Get loan action log data
   * @request GET:/loans/{loanId}/actionLogs
   * @secure
   */
  getLoanActionLog = ({ loanId, ...query }: GetLoanActionLogParams, params: RequestParams = {}) =>
    this.http.request<GetLoanActionLogData, any>({
      path: `/loans/${loanId}/actionLogs`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Loans
   * @name GetLoanNotes
   * @summary Get loan notes
   * @request GET:/loans/{loanId}/notes
   * @secure
   */
  getLoanNotes = ({ loanId, ...query }: GetLoanNotesParams, params: RequestParams = {}) =>
    this.http.request<GetLoanNotesData, any>({
      path: `/loans/${loanId}/notes`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Loans
   * @name ApproveLoan
   * @summary Approve the loan
   * @request POST:/loans/{loanId}/approve
   * @secure
   */
  approveLoan = (loanId: string, params: RequestParams = {}) =>
    this.http.request<ApproveLoanData, any>({
      path: `/loans/${loanId}/approve`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Loans
   * @name CancelLoan
   * @summary Cancel the loan
   * @request POST:/loans/{loanId}/cancel
   * @secure
   */
  cancelLoan = (loanId: string, data: CancelLoanRequest, params: RequestParams = {}) =>
    this.http.request<CancelLoanData, any>({
      path: `/loans/${loanId}/cancel`,
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
   * @tags Loans
   * @name TransitToDefaultProvision
   * @summary Transit loan to default provision status
   * @request POST:/loans/{loanId}/transitToDefaultProvision
   * @secure
   */
  transitToDefaultProvision = (loanId: string, params: RequestParams = {}) =>
    this.http.request<TransitToDefaultProvisionData, any>({
      path: `/loans/${loanId}/transitToDefaultProvision`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Loans
   * @name SetLoanDefaultReviewStatus
   * @summary Set Default Review Status for loan
   * @request POST:/loans/{loanId}/setLoanDefaultReviewStatus
   * @secure
   */
  setLoanDefaultReviewStatus = (
    loanId: string,
    data: SetLoanDefaultReviewStatusPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<SetLoanDefaultReviewStatusData, any>({
      path: `/loans/${loanId}/setLoanDefaultReviewStatus`,
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
   * @tags Loans
   * @name UnsetLoanDefaultReviewStatus
   * @summary Revert loan from default review status to overdue
   * @request POST:/loans/{loanId}/unsetLoanDefaultReviewStatus
   * @secure
   */
  unsetLoanDefaultReviewStatus = (
    loanId: string,
    data: UnsetLoanDefaultReviewStatusPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<UnsetLoanDefaultReviewStatusData, any>({
      path: `/loans/${loanId}/unsetLoanDefaultReviewStatus`,
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
   * @tags Loans
   * @name WriteOffLoan
   * @summary Write off loan
   * @request POST:/loans/{loanId}/writeOff
   * @secure
   */
  writeOffLoan = (loanId: string, data: WriteOffLoanPayload, params: RequestParams = {}) =>
    this.http.request<WriteOffLoanData, any>({
      path: `/loans/${loanId}/writeOff`,
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
   * @tags Loans
   * @name GetLoanSchedule
   * @summary Get loan schedule
   * @request GET:/loans/{loanId}/schedule
   * @secure
   */
  getLoanSchedule = (loanId: string, params: RequestParams = {}) =>
    this.http.request<GetLoanScheduleData, any>({
      path: `/loans/${loanId}/schedule`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Loans
   * @name GetLoanAccruedInterest
   * @summary Get loan accrued interest
   * @request GET:/loans/{loanId}/accruedInterest
   * @secure
   */
  getLoanAccruedInterest = (loanId: string, params: RequestParams = {}) =>
    this.http.request<GetLoanAccruedInterestData, any>({
      path: `/loans/${loanId}/accruedInterest`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Loans
   * @name GetAdditionLoanFormFields
   * @summary Get the list of allowed values for the fields of the loan creation form
   * @request GET:/loans/additionFormFields
   * @secure
   */
  getAdditionLoanFormFields = (params: RequestParams = {}) =>
    this.http.request<GetAdditionLoanFormFieldsData, any>({
      path: `/loans/additionFormFields`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * @description Any number of fields can be sent, one or all.
   *
   * @tags Loans
   * @name ValidateAdditionLoanFormFields
   * @summary Validation of loans fields
   * @request POST:/loans/additionFormFields
   * @secure
   */
  validateAdditionLoanFormFields = (data: NewLoan, params: RequestParams = {}) =>
    this.http.request<ValidateAdditionLoanFormFieldsData, any>({
      path: `/loans/additionFormFields`,
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
   * @tags Loans
   * @name CalculateLoanInterest
   * @summary Calculation of interest on the loan to display in the form of creation
   * @request POST:/loans/additionFormFields/calculateInterest
   * @secure
   */
  calculateLoanInterest = (data: CalculateLoanInterestPayload, params: RequestParams = {}) =>
    this.http.request<CalculateLoanInterestData, any>({
      path: `/loans/additionFormFields/calculateInterest`,
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
   * @tags Loans
   * @name CalculateIbfLoanPrincipal
   * @summary Calculation of principal on IBF loan to display in the form of creation
   * @request POST:/loans/additionFormFields/calculateIBFPrincipal
   * @secure
   */
  calculateIbfLoanPrincipal = (
    data: CalculateIbfLoanPrincipalPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<CalculateIbfLoanPrincipalData, any>({
      path: `/loans/additionFormFields/calculateIBFPrincipal`,
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
   * @tags Loans
   * @name CalculateIbfRates
   * @summary Calculation of interest rates on IBF loan based on one of the rate
   * @request POST:/loans/additionFormFields/calculateIBFRates
   * @secure
   */
  calculateIbfRates = (data: CalculateIbfRatesPayload, params: RequestParams = {}) =>
    this.http.request<CalculateIbfRatesData, any>({
      path: `/loans/additionFormFields/calculateIBFRates`,
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
   * @tags PaymentLinks
   * @name GetPaymentLinkRequests
   * @summary Get loan payment link requests
   * @request GET:/loans/{loanId}/paymentLinkRequests
   * @secure
   */
  getPaymentLinkRequests = (loanId: string, params: RequestParams = {}) =>
    this.http.request<GetPaymentLinkRequestsData, any>({
      path: `/loans/${loanId}/paymentLinkRequests`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags PaymentLinks
   * @name PostPaymentLinkRequest
   * @summary Get or create payment link requests
   * @request POST:/loans/{loanId}/paymentLinkRequests
   * @secure
   */
  postPaymentLinkRequest = (
    loanId: string,
    data: NewPaymentLinkRequest,
    params: RequestParams = {},
  ) =>
    this.http.request<PostPaymentLinkRequestData, any>({
      path: `/loans/${loanId}/paymentLinkRequests`,
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
   * @tags PaymentLinks
   * @name GetPaymentLinkPaymentRequests
   * @summary Get loan payment requests by paymentLinkRequestId
   * @request GET:/loans/{loanId}/paymentLinkRequests/{paymentLinkRequestId}/paymentRequests
   * @secure
   */
  getPaymentLinkPaymentRequests = (
    loanId: string,
    paymentLinkRequestId: string,
    params: RequestParams = {},
  ) =>
    this.http.request<GetPaymentLinkPaymentRequestsData, any>({
      path: `/loans/${loanId}/paymentLinkRequests/${paymentLinkRequestId}/paymentRequests`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags PaymentLinks
   * @name EmailPaymentLinkRequest
   * @summary Email the payment link linked to the payment link request for the loan contact
   * @request POST:/loans/{loanId}/paymentLinkRequests/{paymentLinkRequestId}/emailPaymentInfo
   * @secure
   */
  emailPaymentLinkRequest = (
    loanId: string,
    paymentLinkRequestId: string,
    params: RequestParams = {},
  ) =>
    this.http.request<EmailPaymentLinkRequestData, void>({
      path: `/loans/${loanId}/paymentLinkRequests/${paymentLinkRequestId}/emailPaymentInfo`,
      method: 'POST',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags PaymentLinks
   * @name GetPaymentLinkRequestFields
   * @summary Get loan payment link request form fields
   * @request GET:/loans/paymentLinkRequestFormFields
   * @secure
   */
  getPaymentLinkRequestFields = (params: RequestParams = {}) =>
    this.http.request<GetPaymentLinkRequestFieldsData, any>({
      path: `/loans/paymentLinkRequestFormFields`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags PaymentLinks
   * @name ValidatePaymentLinkRequest
   * @summary Validation of payment link request form fields
   * @request POST:/loans/paymentLinkRequestFormFields
   * @secure
   */
  validatePaymentLinkRequest = (data: NewPaymentLinkRequest, params: RequestParams = {}) =>
    this.http.request<ValidatePaymentLinkRequestData, any>({
      path: `/loans/paymentLinkRequestFormFields`,
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
   * @tags Transactions
   * @name GetTransactions
   * @summary Get loan transactions
   * @request GET:/loans/{loanId}/transactions
   * @secure
   */
  getTransactions = ({ loanId, ...query }: GetTransactionsParams, params: RequestParams = {}) =>
    this.http.request<GetTransactionsData, any>({
      path: `/loans/${loanId}/transactions`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Transactions
   * @name GetLoanTransaction
   * @summary Get loan view transaction info
   * @request GET:/loans/{loanId}/transactions/{operationId}
   * @secure
   */
  getLoanTransaction = (loanId: string, operationId: string, params: RequestParams = {}) =>
    this.http.request<GetLoanTransactionData, any>({
      path: `/loans/${loanId}/transactions/${operationId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Transactions
   * @name CancelLoanTransaction
   * @summary Cancel loan operation
   * @request DELETE:/loans/{loanId}/transactions/{operationId}
   * @secure
   */
  cancelLoanTransaction = (
    loanId: string,
    operationId: string,
    data: CancelOperationRequest,
    params: RequestParams = {},
  ) =>
    this.http.request<CancelLoanTransactionData, any>({
      path: `/loans/${loanId}/transactions/${operationId}`,
      method: 'DELETE',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Disbursements
   * @name AddDisbursement
   * @summary Add disbursement for loan
   * @request POST:/loans/{loanId}/addDisbursement
   * @secure
   */
  addDisbursement = (loanId: string, data: NewDisbursement, params: RequestParams = {}) =>
    this.http.request<AddDisbursementData, any>({
      path: `/loans/${loanId}/addDisbursement`,
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
   * @tags Disbursements
   * @name ValidateDisbursementFormFields
   * @summary Validation of disbursement form fields
   * @request POST:/loans/disbursementFormFields
   * @secure
   */
  validateDisbursementFormFields = (data: NewDisbursement, params: RequestParams = {}) =>
    this.http.request<ValidateDisbursementFormFieldsData, any>({
      path: `/loans/disbursementFormFields`,
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
   * @tags DisbursementRequests
   * @name GetLoanDisbursementRequests
   * @summary Get disbursement requests
   * @request GET:/loans/disbursementRequests
   * @secure
   */
  getLoanDisbursementRequests = (
    query: GetLoanDisbursementRequestsParams,
    params: RequestParams = {},
  ) =>
    this.http.request<GetLoanDisbursementRequestsData, any>({
      path: `/loans/disbursementRequests`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags DisbursementRequests
   * @name RequestDisbursement
   * @summary Add disbursement request for loan
   * @request POST:/loans/{loanId}/disbursementRequests
   * @secure
   */
  requestDisbursement = (
    loanId: string,
    data: NewDisbursementRequest,
    params: RequestParams = {},
  ) =>
    this.http.request<RequestDisbursementData, any>({
      path: `/loans/${loanId}/disbursementRequests`,
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
   * @tags DisbursementRequests
   * @name GetApprovalPendingDisbursementRequest
   * @summary Get approval pending disbursement request for loan
   * @request POST:/loans/{loanId}/approvalPendingDisbursementRequest
   * @secure
   */
  getApprovalPendingDisbursementRequest = (loanId: string, params: RequestParams = {}) =>
    this.http.request<GetApprovalPendingDisbursementRequestData, any>({
      path: `/loans/${loanId}/approvalPendingDisbursementRequest`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Collections
   * @name GetRevioCollectionGatewayLoan
   * @summary Get revio information about loan
   * @request GET:/loans/{loanId}/reviopay
   * @secure
   */
  getRevioCollectionGatewayLoan = (loanId: string, params: RequestParams = {}) =>
    this.http.request<GetRevioCollectionGatewayLoanData, any>({
      path: `/loans/${loanId}/reviopay`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Loans
   * @name ResetRiskFlag
   * @summary Reset risk flag to the Performing value
   * @request POST:/loans/{loanId}/resetRiskFlag
   * @secure
   */
  resetRiskFlag = (loanId: string, params: RequestParams = {}) =>
    this.http.request<ResetRiskFlagData, any>({
      path: `/loans/${loanId}/resetRiskFlag`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Payments
   * @name AddRepayment
   * @summary Add repayment for loan
   * @request POST:/loans/{loanId}/repayments
   * @secure
   */
  addRepayment = (loanId: string, data: NewRepayment, params: RequestParams = {}) =>
    this.http.request<AddRepaymentData, any>({
      path: `/loans/${loanId}/repayments`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Payments
   * @name GetRepaymentFormFields
   * @summary Get repayment form fields
   * @request GET:/loans/repaymentFormFields
   * @secure
   */
  getRepaymentFormFields = (params: RequestParams = {}) =>
    this.http.request<GetRepaymentFormFieldsData, any>({
      path: `/loans/repaymentFormFields`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Payments
   * @name ValidateRepaymentFormFields
   * @summary Validation of repayment form fields
   * @request POST:/loans/repaymentFormFields
   * @secure
   */
  validateRepaymentFormFields = (data: NewRepayment, params: RequestParams = {}) =>
    this.http.request<ValidateRepaymentFormFieldsData, any>({
      path: `/loans/repaymentFormFields`,
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
   * @tags Debug
   * @name ActualizeLoan
   * @summary Actualize loan data. Run mechanism for cancel and add penalties
   * @request POST:/loans/{loanId}/actualize
   * @secure
   */
  actualizeLoan = (loanId: string, params: RequestParams = {}) =>
    this.http.request<ActualizeLoanData, any>({
      path: `/loans/${loanId}/actualize`,
      method: 'POST',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Salesforce
   * @name GetLoanBySalesforceId
   * @summary Get loan data by salesforce id
   * @request GET:/loans/sf/{sf_id}
   * @secure
   */
  getLoanBySalesforceId = (sfId: string, params: RequestParams = {}) =>
    this.http.request<GetLoanBySalesforceIdData, any>({
      path: `/loans/sf/${sfId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Salesforce
   * @name PutLoanBySalesforceId
   * @summary Insert/Update loan data by salesforce id
   * @request PUT:/loans/sf/{sf_id}
   * @secure
   */
  putLoanBySalesforceId = (sfId: string, data: Opportunity, params: RequestParams = {}) =>
    this.http.request<PutLoanBySalesforceIdData, any>({
      path: `/loans/sf/${sfId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
}
