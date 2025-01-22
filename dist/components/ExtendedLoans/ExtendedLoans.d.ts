import { Loans } from 'generated/Loans';
import { HttpClient, RequestParams } from 'generated/http-client';
import { AxiosResponse } from 'axios';
import { CancelLoanRequest, NewPaymentLinkRequest, SetLoanDefaultReviewStatusPayload, WriteOffLoanPayload } from 'generated/data-contracts';
import { TNewLoan, TValidatePaymentLinkRequest } from 'components/ExtendedLoans/interfaces';
import { TPaymentRequestsSchemaResponse } from 'schemas/PaymentRequest';
declare class ExtendedLoans {
    private loans;
    constructor(httpClient: HttpClient);
    getLoans: (query: URLSearchParams, params?: RequestParams) => Promise<AxiosResponse<import("generated/data-contracts").GetLoansData, any>>;
    approveLoan: Loans['approveLoan'];
    getPaymentLinkRequests: (loanId: string, params?: URLSearchParams) => Promise<AxiosResponse<import("generated/data-contracts").ViewOzowPaymentLinkRequests, any>>;
    postPaymentLinkRequest: Loans['postPaymentLinkRequest'];
    getDetailedPaymentRequests: (url: string) => Promise<AxiosResponse<TPaymentRequestsSchemaResponse>>;
    validatePaymentLinkRequest: (data: NewPaymentLinkRequest, params?: RequestParams) => Promise<AxiosResponse<TValidatePaymentLinkRequest>>;
    getRevioDisbursements: (loanId: string, params?: RequestParams) => Promise<AxiosResponse<{
        _links: {};
        _embedded: {
            loan: {};
            sortFields: string[];
            excludeValues: string[];
        };
        revioDisbursements: {
            loanId: string;
            currency: import("generated/data-contracts").CurrencyEnum;
            status: "NEW" | "QUEUED" | "SUBMITTED" | "ACCEPTED" | "COMPLETED" | "VALIDATION_FAILURE" | "TRANSACTION_FAILURE" | "DISPUTED" | "UNPAID" | "UNPAID_WITH_RECOURSE" | "INTERNAL_FAILURE" | "CUTOFF";
            _links: {};
            amount: number;
            paymentId: string;
            paymentDate: Date;
            disbursementRequestId: string;
            userId: string;
            priority: "NORMAL" | "URGENT";
            creditor: {
                name: string;
                branchCode: string;
                accountNumber: string;
                accountType: "CURRENT" | "SAVINGS" | "TRANSMISSION";
                bank: string;
                phoneNumber: string;
                emailAddress: string;
                idNumber: string;
            };
            payment: {
                currency: import("generated/data-contracts").CurrencyEnum;
                paymentId: string;
                referenceNumber: string;
                externalReference: string;
                paymentDate: Date;
                state: "NEW" | "QUEUED" | "SUBMITTED" | "ACCEPTED" | "COMPLETED" | "VALIDATION_FAILURE" | "TRANSACTION_FAILURE" | "DISPUTED" | "UNPAID" | "UNPAID_WITH_RECOURSE" | "INTERNAL_FAILURE" | "CUTOFF";
                amountCents: number;
                clientId: string;
                eftPaymentData: {};
            };
        }[];
    }, any>>;
    setLoanDefaultReviewStatus: (loanId: string, data: SetLoanDefaultReviewStatusPayload, params?: RequestParams) => Promise<AxiosResponse<import("generated/data-contracts").SetLoanDefaultReviewStatusData, any>>;
    unsetLoanDefaultReviewStatus: (loanId: string, data: SetLoanDefaultReviewStatusPayload, params?: RequestParams) => Promise<AxiosResponse<import("generated/data-contracts").UnsetLoanDefaultReviewStatusData, any>>;
    transitToDefaultProvision: (loanId: string, params?: RequestParams) => Promise<AxiosResponse<import("generated/data-contracts").TransitToDefaultProvisionData, any>>;
    writeOffLoan: (loanId: string, data: WriteOffLoanPayload, params?: RequestParams) => Promise<AxiosResponse<import("generated/data-contracts").WriteOffLoanData, any>>;
    resetRiskFlag: (loanId: string, params?: RequestParams) => Promise<AxiosResponse<import("generated/data-contracts").ResetRiskFlagData, any>>;
    cancelLoan: (loanId: string, data: CancelLoanRequest, params?: RequestParams) => Promise<AxiosResponse<import("generated/data-contracts").CancelLoanData, any>>;
    getLoan: Loans['getLoan'];
    createLoan: (data: TNewLoan, params?: RequestParams) => Promise<AxiosResponse<import("generated/data-contracts").CreateLoanData, any>>;
}
export default ExtendedLoans;
//# sourceMappingURL=ExtendedLoans.d.ts.map