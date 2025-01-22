import { z } from 'zod';
export declare const DetailedLoanLinksSchema: z.ZodObject<{
    getCompany: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    getLoan: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    getTransactions: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    createLoan: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    getLoanActionLogs: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    addRepayments: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    getLoanSchedule: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    setLoanDefaultReviewStatus: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    getLoanNotes: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    getPaymentLinkRequests: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    salesforce: z.ZodOptional<z.ZodObject<z.objectUtil.extendShape<{
        href: z.ZodString;
    }, {
        title: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        href: string;
        title: string;
    }, {
        href: string;
        title: string;
    }>>;
    getApprovalPendingDisbursementRequest: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    approveLoan: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    requestDisbursement: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    addDisbursement: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    unsetLoanDefaultReviewStatus: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    transitToDefaultProvision: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    writeOffLoan: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    resetRiskFlag: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    cancelLoan: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    getRevioDisbursements: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    getRevioCollectionGatewayLoan: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    getPurchases: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    getCompany?: {
        href: string;
    } | undefined;
    approveLoan?: {
        href: string;
    } | undefined;
    getLoan?: {
        href: string;
    } | undefined;
    salesforce?: {
        href: string;
        title: string;
    } | undefined;
    createLoan?: {
        href: string;
    } | undefined;
    addRepayments?: {
        href: string;
    } | undefined;
    getTransactions?: {
        href: string;
    } | undefined;
    getLoanActionLogs?: {
        href: string;
    } | undefined;
    getLoanSchedule?: {
        href: string;
    } | undefined;
    setLoanDefaultReviewStatus?: {
        href: string;
    } | undefined;
    getLoanNotes?: {
        href: string;
    } | undefined;
    getPaymentLinkRequests?: {
        href: string;
    } | undefined;
    getApprovalPendingDisbursementRequest?: {
        href: string;
    } | undefined;
    requestDisbursement?: {
        href: string;
    } | undefined;
    addDisbursement?: {
        href: string;
    } | undefined;
    unsetLoanDefaultReviewStatus?: {
        href: string;
    } | undefined;
    transitToDefaultProvision?: {
        href: string;
    } | undefined;
    writeOffLoan?: {
        href: string;
    } | undefined;
    resetRiskFlag?: {
        href: string;
    } | undefined;
    cancelLoan?: {
        href: string;
    } | undefined;
    getRevioDisbursements?: {
        href: string;
    } | undefined;
    getRevioCollectionGatewayLoan?: {
        href: string;
    } | undefined;
    getPurchases?: {
        href: string;
    } | undefined;
}, {
    getCompany?: {
        href: string;
    } | undefined;
    approveLoan?: {
        href: string;
    } | undefined;
    getLoan?: {
        href: string;
    } | undefined;
    salesforce?: {
        href: string;
        title: string;
    } | undefined;
    createLoan?: {
        href: string;
    } | undefined;
    addRepayments?: {
        href: string;
    } | undefined;
    getTransactions?: {
        href: string;
    } | undefined;
    getLoanActionLogs?: {
        href: string;
    } | undefined;
    getLoanSchedule?: {
        href: string;
    } | undefined;
    setLoanDefaultReviewStatus?: {
        href: string;
    } | undefined;
    getLoanNotes?: {
        href: string;
    } | undefined;
    getPaymentLinkRequests?: {
        href: string;
    } | undefined;
    getApprovalPendingDisbursementRequest?: {
        href: string;
    } | undefined;
    requestDisbursement?: {
        href: string;
    } | undefined;
    addDisbursement?: {
        href: string;
    } | undefined;
    unsetLoanDefaultReviewStatus?: {
        href: string;
    } | undefined;
    transitToDefaultProvision?: {
        href: string;
    } | undefined;
    writeOffLoan?: {
        href: string;
    } | undefined;
    resetRiskFlag?: {
        href: string;
    } | undefined;
    cancelLoan?: {
        href: string;
    } | undefined;
    getRevioDisbursements?: {
        href: string;
    } | undefined;
    getRevioCollectionGatewayLoan?: {
        href: string;
    } | undefined;
    getPurchases?: {
        href: string;
    } | undefined;
}>;
//# sourceMappingURL=DetailedLoanLinks.schema.d.ts.map