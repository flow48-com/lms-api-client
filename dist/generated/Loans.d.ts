import { ApproveLoanData, CalculateIbfLoanPrincipalData, CalculateIbfLoanPrincipalPayload, CalculateIbfRatesData, CalculateIbfRatesPayload, CalculateLoanInterestData, CalculateLoanInterestPayload, CancelLoanData, CancelLoanRequest, CancelOperationRequest, CreateLoanData, GetLoanActionLogData, GetLoanActionLogParams, GetLoanBySalesforceIdData, GetLoanData, GetLoanDisbursementRequestsData, GetLoanDisbursementRequestsParams, GetLoanNotesData, GetLoanNotesParams, GetLoanScheduleData, GetLoansData, GetLoansParams, GetTransactionsParams, NewDisbursement, NewDisbursementRequest, NewLoan, NewPaymentLinkRequest, NewRepayment, Opportunity, PostPaymentLinkRequestData, PutLoanBySalesforceIdData, ResetRiskFlagData, SetLoanDefaultReviewStatusData, SetLoanDefaultReviewStatusPayload, TransitToDefaultProvisionData, UnsetLoanDefaultReviewStatusData, UnsetLoanDefaultReviewStatusPayload, ValidateAdditionLoanFormFieldsData, WriteOffLoanData, WriteOffLoanPayload } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';
export declare class Loans<SecurityDataType = unknown> {
    http: HttpClient<SecurityDataType>;
    constructor(http: HttpClient<SecurityDataType>);
    /**
     * No description
     *
     * @tags Loans
     * @name GetLoans
     * @summary Get all loans
     * @request GET:/loans
     * @secure
     */
    getLoans: (query: GetLoansParams, params?: RequestParams) => Promise<import("axios").AxiosResponse<GetLoansData, any>>;
    /**
     * No description
     *
     * @tags Loans
     * @name CreateLoan
     * @summary Create a new loan
     * @request POST:/loans
     * @secure
     */
    createLoan: (data: NewLoan, params?: RequestParams) => Promise<import("axios").AxiosResponse<CreateLoanData, any>>;
    /**
     * No description
     *
     * @tags Loans
     * @name GetLoan
     * @summary Get loan data by id
     * @request GET:/loans/{loanId}
     * @secure
     */
    getLoan: (loanId: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<GetLoanData, any>>;
    /**
     * No description
     *
     * @tags Loans
     * @name GetLoanActionLog
     * @summary Get loan action log data
     * @request GET:/loans/{loanId}/actionLogs
     * @secure
     */
    getLoanActionLog: ({ loanId, ...query }: GetLoanActionLogParams, params?: RequestParams) => Promise<import("axios").AxiosResponse<GetLoanActionLogData, any>>;
    /**
     * No description
     *
     * @tags Loans
     * @name GetLoanNotes
     * @summary Get loan notes
     * @request GET:/loans/{loanId}/notes
     * @secure
     */
    getLoanNotes: ({ loanId, ...query }: GetLoanNotesParams, params?: RequestParams) => Promise<import("axios").AxiosResponse<GetLoanNotesData, any>>;
    /**
     * No description
     *
     * @tags Loans
     * @name ApproveLoan
     * @summary Approve the loan
     * @request POST:/loans/{loanId}/approve
     * @secure
     */
    approveLoan: (loanId: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<ApproveLoanData, any>>;
    /**
     * No description
     *
     * @tags Loans
     * @name CancelLoan
     * @summary Cancel the loan
     * @request POST:/loans/{loanId}/cancel
     * @secure
     */
    cancelLoan: (loanId: string, data: CancelLoanRequest, params?: RequestParams) => Promise<import("axios").AxiosResponse<CancelLoanData, any>>;
    /**
     * No description
     *
     * @tags Loans
     * @name TransitToDefaultProvision
     * @summary Transit loan to default provision status
     * @request POST:/loans/{loanId}/transitToDefaultProvision
     * @secure
     */
    transitToDefaultProvision: (loanId: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<TransitToDefaultProvisionData, any>>;
    /**
     * No description
     *
     * @tags Loans
     * @name SetLoanDefaultReviewStatus
     * @summary Set Default Review Status for loan
     * @request POST:/loans/{loanId}/setLoanDefaultReviewStatus
     * @secure
     */
    setLoanDefaultReviewStatus: (loanId: string, data: SetLoanDefaultReviewStatusPayload, params?: RequestParams) => Promise<import("axios").AxiosResponse<SetLoanDefaultReviewStatusData, any>>;
    /**
     * No description
     *
     * @tags Loans
     * @name UnsetLoanDefaultReviewStatus
     * @summary Revert loan from default review status to overdue
     * @request POST:/loans/{loanId}/unsetLoanDefaultReviewStatus
     * @secure
     */
    unsetLoanDefaultReviewStatus: (loanId: string, data: UnsetLoanDefaultReviewStatusPayload, params?: RequestParams) => Promise<import("axios").AxiosResponse<UnsetLoanDefaultReviewStatusData, any>>;
    /**
     * No description
     *
     * @tags Loans
     * @name WriteOffLoan
     * @summary Write off loan
     * @request POST:/loans/{loanId}/writeOff
     * @secure
     */
    writeOffLoan: (loanId: string, data: WriteOffLoanPayload, params?: RequestParams) => Promise<import("axios").AxiosResponse<WriteOffLoanData, any>>;
    /**
     * No description
     *
     * @tags Loans
     * @name GetLoanSchedule
     * @summary Get loan schedule
     * @request GET:/loans/{loanId}/schedule
     * @secure
     */
    getLoanSchedule: (loanId: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<GetLoanScheduleData, any>>;
    /**
     * No description
     *
     * @tags Loans
     * @name GetLoanAccruedInterest
     * @summary Get loan accrued interest
     * @request GET:/loans/{loanId}/accruedInterest
     * @secure
     */
    getLoanAccruedInterest: (loanId: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<import("./data-contracts").LoanAccruedInterestResponse, any>>;
    /**
     * No description
     *
     * @tags Loans
     * @name GetAdditionLoanFormFields
     * @summary Get the list of allowed values for the fields of the loan creation form
     * @request GET:/loans/additionFormFields
     * @secure
     */
    getAdditionLoanFormFields: (params?: RequestParams) => Promise<import("axios").AxiosResponse<import("./data-contracts").FormFieldsResponse, any>>;
    /**
     * @description Any number of fields can be sent, one or all.
     *
     * @tags Loans
     * @name ValidateAdditionLoanFormFields
     * @summary Validation of loans fields
     * @request POST:/loans/additionFormFields
     * @secure
     */
    validateAdditionLoanFormFields: (data: NewLoan, params?: RequestParams) => Promise<import("axios").AxiosResponse<ValidateAdditionLoanFormFieldsData, any>>;
    /**
     * No description
     *
     * @tags Loans
     * @name CalculateLoanInterest
     * @summary Calculation of interest on the loan to display in the form of creation
     * @request POST:/loans/additionFormFields/calculateInterest
     * @secure
     */
    calculateLoanInterest: (data: CalculateLoanInterestPayload, params?: RequestParams) => Promise<import("axios").AxiosResponse<CalculateLoanInterestData, any>>;
    /**
     * No description
     *
     * @tags Loans
     * @name CalculateIbfLoanPrincipal
     * @summary Calculation of principal on IBF loan to display in the form of creation
     * @request POST:/loans/additionFormFields/calculateIBFPrincipal
     * @secure
     */
    calculateIbfLoanPrincipal: (data: CalculateIbfLoanPrincipalPayload, params?: RequestParams) => Promise<import("axios").AxiosResponse<CalculateIbfLoanPrincipalData, any>>;
    /**
     * No description
     *
     * @tags Loans
     * @name CalculateIbfRates
     * @summary Calculation of interest rates on IBF loan based on one of the rate
     * @request POST:/loans/additionFormFields/calculateIBFRates
     * @secure
     */
    calculateIbfRates: (data: CalculateIbfRatesPayload, params?: RequestParams) => Promise<import("axios").AxiosResponse<CalculateIbfRatesData, any>>;
    /**
     * No description
     *
     * @tags PaymentLinks
     * @name GetPaymentLinkRequests
     * @summary Get loan payment link requests
     * @request GET:/loans/{loanId}/paymentLinkRequests
     * @secure
     */
    getPaymentLinkRequests: (loanId: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<import("./data-contracts").ViewOzowPaymentLinkRequests, any>>;
    /**
     * No description
     *
     * @tags PaymentLinks
     * @name PostPaymentLinkRequest
     * @summary Get or create payment link requests
     * @request POST:/loans/{loanId}/paymentLinkRequests
     * @secure
     */
    postPaymentLinkRequest: (loanId: string, data: NewPaymentLinkRequest, params?: RequestParams) => Promise<import("axios").AxiosResponse<PostPaymentLinkRequestData, any>>;
    /**
     * No description
     *
     * @tags PaymentLinks
     * @name GetPaymentLinkPaymentRequests
     * @summary Get loan payment requests by paymentLinkRequestId
     * @request GET:/loans/{loanId}/paymentLinkRequests/{paymentLinkRequestId}/paymentRequests
     * @secure
     */
    getPaymentLinkPaymentRequests: (loanId: string, paymentLinkRequestId: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<import("./data-contracts").ViewOzowPaymentRequests, any>>;
    /**
     * No description
     *
     * @tags PaymentLinks
     * @name EmailPaymentLinkRequest
     * @summary Email the payment link linked to the payment link request for the loan contact
     * @request POST:/loans/{loanId}/paymentLinkRequests/{paymentLinkRequestId}/emailPaymentInfo
     * @secure
     */
    emailPaymentLinkRequest: (loanId: string, paymentLinkRequestId: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * No description
     *
     * @tags PaymentLinks
     * @name GetPaymentLinkRequestFields
     * @summary Get loan payment link request form fields
     * @request GET:/loans/paymentLinkRequestFormFields
     * @secure
     */
    getPaymentLinkRequestFields: (params?: RequestParams) => Promise<import("axios").AxiosResponse<import("./data-contracts").FormFieldsValidationResponse, any>>;
    /**
     * No description
     *
     * @tags PaymentLinks
     * @name ValidatePaymentLinkRequest
     * @summary Validation of payment link request form fields
     * @request POST:/loans/paymentLinkRequestFormFields
     * @secure
     */
    validatePaymentLinkRequest: (data: NewPaymentLinkRequest, params?: RequestParams) => Promise<import("axios").AxiosResponse<import("./data-contracts").FormFieldsValidationResponse, any>>;
    /**
     * No description
     *
     * @tags Transactions
     * @name GetTransactions
     * @summary Get loan transactions
     * @request GET:/loans/{loanId}/transactions
     * @secure
     */
    getTransactions: ({ loanId, ...query }: GetTransactionsParams, params?: RequestParams) => Promise<import("axios").AxiosResponse<import("./data-contracts").ViewTransaction, any>>;
    /**
     * No description
     *
     * @tags Transactions
     * @name GetLoanTransaction
     * @summary Get loan view transaction info
     * @request GET:/loans/{loanId}/transactions/{operationId}
     * @secure
     */
    getLoanTransaction: (loanId: string, operationId: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<import("./data-contracts").ViewTransaction, any>>;
    /**
     * No description
     *
     * @tags Transactions
     * @name CancelLoanTransaction
     * @summary Cancel loan operation
     * @request DELETE:/loans/{loanId}/transactions/{operationId}
     * @secure
     */
    cancelLoanTransaction: (loanId: string, operationId: string, data: CancelOperationRequest, params?: RequestParams) => Promise<import("axios").AxiosResponse<import("./data-contracts").ViewTransaction, any>>;
    /**
     * No description
     *
     * @tags Disbursements
     * @name AddDisbursement
     * @summary Add disbursement for loan
     * @request POST:/loans/{loanId}/addDisbursement
     * @secure
     */
    addDisbursement: (loanId: string, data: NewDisbursement, params?: RequestParams) => Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * No description
     *
     * @tags Disbursements
     * @name ValidateDisbursementFormFields
     * @summary Validation of disbursement form fields
     * @request POST:/loans/disbursementFormFields
     * @secure
     */
    validateDisbursementFormFields: (data: NewDisbursement, params?: RequestParams) => Promise<import("axios").AxiosResponse<import("./data-contracts").FormFieldsValidationResponse, any>>;
    /**
     * No description
     *
     * @tags DisbursementRequests
     * @name GetLoanDisbursementRequests
     * @summary Get disbursement requests
     * @request GET:/loans/disbursementRequests
     * @secure
     */
    getLoanDisbursementRequests: (query: GetLoanDisbursementRequestsParams, params?: RequestParams) => Promise<import("axios").AxiosResponse<GetLoanDisbursementRequestsData, any>>;
    /**
     * No description
     *
     * @tags DisbursementRequests
     * @name RequestDisbursement
     * @summary Add disbursement request for loan
     * @request POST:/loans/{loanId}/disbursementRequests
     * @secure
     */
    requestDisbursement: (loanId: string, data: NewDisbursementRequest, params?: RequestParams) => Promise<import("axios").AxiosResponse<import("./data-contracts").NewDisbursementRequestResponse, any>>;
    /**
     * No description
     *
     * @tags DisbursementRequests
     * @name GetApprovalPendingDisbursementRequest
     * @summary Get approval pending disbursement request for loan
     * @request POST:/loans/{loanId}/approvalPendingDisbursementRequest
     * @secure
     */
    getApprovalPendingDisbursementRequest: (loanId: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<import("./data-contracts").NewDisbursementRequestResponse, any>>;
    /**
     * No description
     *
     * @tags Collections
     * @name GetRevioCollectionGatewayLoan
     * @summary Get revio information about loan
     * @request GET:/loans/{loanId}/reviopay
     * @secure
     */
    getRevioCollectionGatewayLoan: (loanId: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<import("./data-contracts").RevioCollectionGatewayLoanDetailsSchema, any>>;
    /**
     * No description
     *
     * @tags Loans
     * @name ResetRiskFlag
     * @summary Reset risk flag to the Performing value
     * @request POST:/loans/{loanId}/resetRiskFlag
     * @secure
     */
    resetRiskFlag: (loanId: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<ResetRiskFlagData, any>>;
    /**
     * No description
     *
     * @tags Payments
     * @name AddRepayment
     * @summary Add repayment for loan
     * @request POST:/loans/{loanId}/repayments
     * @secure
     */
    addRepayment: (loanId: string, data: NewRepayment, params?: RequestParams) => Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * No description
     *
     * @tags Payments
     * @name GetRepaymentFormFields
     * @summary Get repayment form fields
     * @request GET:/loans/repaymentFormFields
     * @secure
     */
    getRepaymentFormFields: (params?: RequestParams) => Promise<import("axios").AxiosResponse<import("./data-contracts").FormFieldsValidationResponse, any>>;
    /**
     * No description
     *
     * @tags Payments
     * @name ValidateRepaymentFormFields
     * @summary Validation of repayment form fields
     * @request POST:/loans/repaymentFormFields
     * @secure
     */
    validateRepaymentFormFields: (data: NewRepayment, params?: RequestParams) => Promise<import("axios").AxiosResponse<import("./data-contracts").FormFieldsValidationResponse, any>>;
    /**
     * No description
     *
     * @tags Debug
     * @name ActualizeLoan
     * @summary Actualize loan data. Run mechanism for cancel and add penalties
     * @request POST:/loans/{loanId}/actualize
     * @secure
     */
    actualizeLoan: (loanId: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * No description
     *
     * @tags Salesforce
     * @name GetLoanBySalesforceId
     * @summary Get loan data by salesforce id
     * @request GET:/loans/sf/{sf_id}
     * @secure
     */
    getLoanBySalesforceId: (sfId: string, params?: RequestParams) => Promise<import("axios").AxiosResponse<GetLoanBySalesforceIdData, any>>;
    /**
     * No description
     *
     * @tags Salesforce
     * @name PutLoanBySalesforceId
     * @summary Insert/Update loan data by salesforce id
     * @request PUT:/loans/sf/{sf_id}
     * @secure
     */
    putLoanBySalesforceId: (sfId: string, data: Opportunity, params?: RequestParams) => Promise<import("axios").AxiosResponse<PutLoanBySalesforceIdData, any>>;
}
//# sourceMappingURL=Loans.d.ts.map