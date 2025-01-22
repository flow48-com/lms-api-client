import { z } from 'zod';
export declare const EftPaymentDataSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare const RevioEftPaymentSchema: z.ZodObject<{
    paymentId: z.ZodString;
    referenceNumber: z.ZodString;
    externalReference: z.ZodString;
    paymentDate: z.ZodDate;
    state: z.ZodEnum<["NEW", "QUEUED", "SUBMITTED", "ACCEPTED", "COMPLETED", "VALIDATION_FAILURE", "TRANSACTION_FAILURE", "DISPUTED", "UNPAID", "UNPAID_WITH_RECOURSE", "INTERNAL_FAILURE", "CUTOFF"]>;
    amountCents: z.ZodNumber;
    currency: z.ZodNativeEnum<typeof import("../../generated/data-contracts").CurrencyEnum>;
    clientId: z.ZodString;
    eftPaymentData: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
}, "strip", z.ZodTypeAny, {
    currency: import("../../generated/data-contracts").CurrencyEnum;
    paymentId: string;
    referenceNumber: string;
    externalReference: string;
    paymentDate: Date;
    state: "NEW" | "QUEUED" | "SUBMITTED" | "ACCEPTED" | "COMPLETED" | "VALIDATION_FAILURE" | "TRANSACTION_FAILURE" | "DISPUTED" | "UNPAID" | "UNPAID_WITH_RECOURSE" | "INTERNAL_FAILURE" | "CUTOFF";
    amountCents: number;
    clientId: string;
    eftPaymentData: {};
}, {
    currency: import("../../generated/data-contracts").CurrencyEnum;
    paymentId: string;
    referenceNumber: string;
    externalReference: string;
    paymentDate: Date;
    state: "NEW" | "QUEUED" | "SUBMITTED" | "ACCEPTED" | "COMPLETED" | "VALIDATION_FAILURE" | "TRANSACTION_FAILURE" | "DISPUTED" | "UNPAID" | "UNPAID_WITH_RECOURSE" | "INTERNAL_FAILURE" | "CUTOFF";
    amountCents: number;
    clientId: string;
    eftPaymentData: {};
}>;
export declare const CreditorSchema: z.ZodObject<{
    accountNumber: z.ZodString;
    accountType: z.ZodEnum<["CURRENT", "SAVINGS", "TRANSMISSION"]>;
    branchCode: z.ZodString;
    name: z.ZodString;
    bank: z.ZodString;
    phoneNumber: z.ZodString;
    emailAddress: z.ZodString;
    idNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    branchCode: string;
    accountNumber: string;
    accountType: "CURRENT" | "SAVINGS" | "TRANSMISSION";
    bank: string;
    phoneNumber: string;
    emailAddress: string;
    idNumber: string;
}, {
    name: string;
    branchCode: string;
    accountNumber: string;
    accountType: "CURRENT" | "SAVINGS" | "TRANSMISSION";
    bank: string;
    phoneNumber: string;
    emailAddress: string;
    idNumber: string;
}>;
export declare const RevioDisbursementRequestSchema: z.ZodObject<{
    disbursementRequestId: z.ZodString;
    userId: z.ZodString;
    loanId: z.ZodString;
    amount: z.ZodNumber;
    paymentDate: z.ZodDate;
    priority: z.ZodEnum<["NORMAL", "URGENT"]>;
    creditor: z.ZodObject<{
        accountNumber: z.ZodString;
        accountType: z.ZodEnum<["CURRENT", "SAVINGS", "TRANSMISSION"]>;
        branchCode: z.ZodString;
        name: z.ZodString;
        bank: z.ZodString;
        phoneNumber: z.ZodString;
        emailAddress: z.ZodString;
        idNumber: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        branchCode: string;
        accountNumber: string;
        accountType: "CURRENT" | "SAVINGS" | "TRANSMISSION";
        bank: string;
        phoneNumber: string;
        emailAddress: string;
        idNumber: string;
    }, {
        name: string;
        branchCode: string;
        accountNumber: string;
        accountType: "CURRENT" | "SAVINGS" | "TRANSMISSION";
        bank: string;
        phoneNumber: string;
        emailAddress: string;
        idNumber: string;
    }>;
    currency: z.ZodNativeEnum<typeof import("../../generated/data-contracts").CurrencyEnum>;
    status: z.ZodEnum<["NEW", "QUEUED", "SUBMITTED", "ACCEPTED", "COMPLETED", "VALIDATION_FAILURE", "TRANSACTION_FAILURE", "DISPUTED", "UNPAID", "UNPAID_WITH_RECOURSE", "INTERNAL_FAILURE", "CUTOFF"]>;
}, "strip", z.ZodTypeAny, {
    loanId: string;
    currency: import("../../generated/data-contracts").CurrencyEnum;
    status: "NEW" | "QUEUED" | "SUBMITTED" | "ACCEPTED" | "COMPLETED" | "VALIDATION_FAILURE" | "TRANSACTION_FAILURE" | "DISPUTED" | "UNPAID" | "UNPAID_WITH_RECOURSE" | "INTERNAL_FAILURE" | "CUTOFF";
    amount: number;
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
}, {
    loanId: string;
    currency: import("../../generated/data-contracts").CurrencyEnum;
    status: "NEW" | "QUEUED" | "SUBMITTED" | "ACCEPTED" | "COMPLETED" | "VALIDATION_FAILURE" | "TRANSACTION_FAILURE" | "DISPUTED" | "UNPAID" | "UNPAID_WITH_RECOURSE" | "INTERNAL_FAILURE" | "CUTOFF";
    amount: number;
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
}>;
export declare const RevioDisbursementSchema: z.ZodObject<z.objectUtil.extendShape<{
    disbursementRequestId: z.ZodString;
    userId: z.ZodString;
    loanId: z.ZodString;
    amount: z.ZodNumber;
    paymentDate: z.ZodDate;
    priority: z.ZodEnum<["NORMAL", "URGENT"]>;
    creditor: z.ZodObject<{
        accountNumber: z.ZodString;
        accountType: z.ZodEnum<["CURRENT", "SAVINGS", "TRANSMISSION"]>;
        branchCode: z.ZodString;
        name: z.ZodString;
        bank: z.ZodString;
        phoneNumber: z.ZodString;
        emailAddress: z.ZodString;
        idNumber: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        branchCode: string;
        accountNumber: string;
        accountType: "CURRENT" | "SAVINGS" | "TRANSMISSION";
        bank: string;
        phoneNumber: string;
        emailAddress: string;
        idNumber: string;
    }, {
        name: string;
        branchCode: string;
        accountNumber: string;
        accountType: "CURRENT" | "SAVINGS" | "TRANSMISSION";
        bank: string;
        phoneNumber: string;
        emailAddress: string;
        idNumber: string;
    }>;
    currency: z.ZodNativeEnum<typeof import("../../generated/data-contracts").CurrencyEnum>;
    status: z.ZodEnum<["NEW", "QUEUED", "SUBMITTED", "ACCEPTED", "COMPLETED", "VALIDATION_FAILURE", "TRANSACTION_FAILURE", "DISPUTED", "UNPAID", "UNPAID_WITH_RECOURSE", "INTERNAL_FAILURE", "CUTOFF"]>;
}, {
    paymentId: z.ZodString;
    payment: z.ZodObject<{
        paymentId: z.ZodString;
        referenceNumber: z.ZodString;
        externalReference: z.ZodString;
        paymentDate: z.ZodDate;
        state: z.ZodEnum<["NEW", "QUEUED", "SUBMITTED", "ACCEPTED", "COMPLETED", "VALIDATION_FAILURE", "TRANSACTION_FAILURE", "DISPUTED", "UNPAID", "UNPAID_WITH_RECOURSE", "INTERNAL_FAILURE", "CUTOFF"]>;
        amountCents: z.ZodNumber;
        currency: z.ZodNativeEnum<typeof import("../../generated/data-contracts").CurrencyEnum>;
        clientId: z.ZodString;
        eftPaymentData: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    }, "strip", z.ZodTypeAny, {
        currency: import("../../generated/data-contracts").CurrencyEnum;
        paymentId: string;
        referenceNumber: string;
        externalReference: string;
        paymentDate: Date;
        state: "NEW" | "QUEUED" | "SUBMITTED" | "ACCEPTED" | "COMPLETED" | "VALIDATION_FAILURE" | "TRANSACTION_FAILURE" | "DISPUTED" | "UNPAID" | "UNPAID_WITH_RECOURSE" | "INTERNAL_FAILURE" | "CUTOFF";
        amountCents: number;
        clientId: string;
        eftPaymentData: {};
    }, {
        currency: import("../../generated/data-contracts").CurrencyEnum;
        paymentId: string;
        referenceNumber: string;
        externalReference: string;
        paymentDate: Date;
        state: "NEW" | "QUEUED" | "SUBMITTED" | "ACCEPTED" | "COMPLETED" | "VALIDATION_FAILURE" | "TRANSACTION_FAILURE" | "DISPUTED" | "UNPAID" | "UNPAID_WITH_RECOURSE" | "INTERNAL_FAILURE" | "CUTOFF";
        amountCents: number;
        clientId: string;
        eftPaymentData: {};
    }>;
}>, "strip", z.ZodTypeAny, {
    loanId: string;
    currency: import("../../generated/data-contracts").CurrencyEnum;
    status: "NEW" | "QUEUED" | "SUBMITTED" | "ACCEPTED" | "COMPLETED" | "VALIDATION_FAILURE" | "TRANSACTION_FAILURE" | "DISPUTED" | "UNPAID" | "UNPAID_WITH_RECOURSE" | "INTERNAL_FAILURE" | "CUTOFF";
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
        currency: import("../../generated/data-contracts").CurrencyEnum;
        paymentId: string;
        referenceNumber: string;
        externalReference: string;
        paymentDate: Date;
        state: "NEW" | "QUEUED" | "SUBMITTED" | "ACCEPTED" | "COMPLETED" | "VALIDATION_FAILURE" | "TRANSACTION_FAILURE" | "DISPUTED" | "UNPAID" | "UNPAID_WITH_RECOURSE" | "INTERNAL_FAILURE" | "CUTOFF";
        amountCents: number;
        clientId: string;
        eftPaymentData: {};
    };
}, {
    loanId: string;
    currency: import("../../generated/data-contracts").CurrencyEnum;
    status: "NEW" | "QUEUED" | "SUBMITTED" | "ACCEPTED" | "COMPLETED" | "VALIDATION_FAILURE" | "TRANSACTION_FAILURE" | "DISPUTED" | "UNPAID" | "UNPAID_WITH_RECOURSE" | "INTERNAL_FAILURE" | "CUTOFF";
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
        currency: import("../../generated/data-contracts").CurrencyEnum;
        paymentId: string;
        referenceNumber: string;
        externalReference: string;
        paymentDate: Date;
        state: "NEW" | "QUEUED" | "SUBMITTED" | "ACCEPTED" | "COMPLETED" | "VALIDATION_FAILURE" | "TRANSACTION_FAILURE" | "DISPUTED" | "UNPAID" | "UNPAID_WITH_RECOURSE" | "INTERNAL_FAILURE" | "CUTOFF";
        amountCents: number;
        clientId: string;
        eftPaymentData: {};
    };
}>;
export declare const DisbursementsEmbeddedSchema: z.ZodObject<{
    sortFields: z.ZodArray<z.ZodString, "many">;
    excludeValues: z.ZodArray<z.ZodString, "many">;
    loan: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
}, "strip", z.ZodTypeAny, {
    loan: {};
    sortFields: string[];
    excludeValues: string[];
}, {
    loan: {};
    sortFields: string[];
    excludeValues: string[];
}>;
export declare const ViewRevioDisbursementsResponseSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    disbursementRequestId: z.ZodString;
    userId: z.ZodString;
    loanId: z.ZodString;
    amount: z.ZodNumber;
    paymentDate: z.ZodDate;
    priority: z.ZodEnum<["NORMAL", "URGENT"]>;
    creditor: z.ZodObject<{
        accountNumber: z.ZodString;
        accountType: z.ZodEnum<["CURRENT", "SAVINGS", "TRANSMISSION"]>;
        branchCode: z.ZodString;
        name: z.ZodString;
        bank: z.ZodString;
        phoneNumber: z.ZodString;
        emailAddress: z.ZodString;
        idNumber: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        branchCode: string;
        accountNumber: string;
        accountType: "CURRENT" | "SAVINGS" | "TRANSMISSION";
        bank: string;
        phoneNumber: string;
        emailAddress: string;
        idNumber: string;
    }, {
        name: string;
        branchCode: string;
        accountNumber: string;
        accountType: "CURRENT" | "SAVINGS" | "TRANSMISSION";
        bank: string;
        phoneNumber: string;
        emailAddress: string;
        idNumber: string;
    }>;
    currency: z.ZodNativeEnum<typeof import("../../generated/data-contracts").CurrencyEnum>;
    status: z.ZodEnum<["NEW", "QUEUED", "SUBMITTED", "ACCEPTED", "COMPLETED", "VALIDATION_FAILURE", "TRANSACTION_FAILURE", "DISPUTED", "UNPAID", "UNPAID_WITH_RECOURSE", "INTERNAL_FAILURE", "CUTOFF"]>;
}, {
    paymentId: z.ZodString;
    payment: z.ZodObject<{
        paymentId: z.ZodString;
        referenceNumber: z.ZodString;
        externalReference: z.ZodString;
        paymentDate: z.ZodDate;
        state: z.ZodEnum<["NEW", "QUEUED", "SUBMITTED", "ACCEPTED", "COMPLETED", "VALIDATION_FAILURE", "TRANSACTION_FAILURE", "DISPUTED", "UNPAID", "UNPAID_WITH_RECOURSE", "INTERNAL_FAILURE", "CUTOFF"]>;
        amountCents: z.ZodNumber;
        currency: z.ZodNativeEnum<typeof import("../../generated/data-contracts").CurrencyEnum>;
        clientId: z.ZodString;
        eftPaymentData: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    }, "strip", z.ZodTypeAny, {
        currency: import("../../generated/data-contracts").CurrencyEnum;
        paymentId: string;
        referenceNumber: string;
        externalReference: string;
        paymentDate: Date;
        state: "NEW" | "QUEUED" | "SUBMITTED" | "ACCEPTED" | "COMPLETED" | "VALIDATION_FAILURE" | "TRANSACTION_FAILURE" | "DISPUTED" | "UNPAID" | "UNPAID_WITH_RECOURSE" | "INTERNAL_FAILURE" | "CUTOFF";
        amountCents: number;
        clientId: string;
        eftPaymentData: {};
    }, {
        currency: import("../../generated/data-contracts").CurrencyEnum;
        paymentId: string;
        referenceNumber: string;
        externalReference: string;
        paymentDate: Date;
        state: "NEW" | "QUEUED" | "SUBMITTED" | "ACCEPTED" | "COMPLETED" | "VALIDATION_FAILURE" | "TRANSACTION_FAILURE" | "DISPUTED" | "UNPAID" | "UNPAID_WITH_RECOURSE" | "INTERNAL_FAILURE" | "CUTOFF";
        amountCents: number;
        clientId: string;
        eftPaymentData: {};
    }>;
}>, {
    _links: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
}>, "strip", z.ZodTypeAny, {
    loanId: string;
    currency: import("../../generated/data-contracts").CurrencyEnum;
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
        currency: import("../../generated/data-contracts").CurrencyEnum;
        paymentId: string;
        referenceNumber: string;
        externalReference: string;
        paymentDate: Date;
        state: "NEW" | "QUEUED" | "SUBMITTED" | "ACCEPTED" | "COMPLETED" | "VALIDATION_FAILURE" | "TRANSACTION_FAILURE" | "DISPUTED" | "UNPAID" | "UNPAID_WITH_RECOURSE" | "INTERNAL_FAILURE" | "CUTOFF";
        amountCents: number;
        clientId: string;
        eftPaymentData: {};
    };
}, {
    loanId: string;
    currency: import("../../generated/data-contracts").CurrencyEnum;
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
        currency: import("../../generated/data-contracts").CurrencyEnum;
        paymentId: string;
        referenceNumber: string;
        externalReference: string;
        paymentDate: Date;
        state: "NEW" | "QUEUED" | "SUBMITTED" | "ACCEPTED" | "COMPLETED" | "VALIDATION_FAILURE" | "TRANSACTION_FAILURE" | "DISPUTED" | "UNPAID" | "UNPAID_WITH_RECOURSE" | "INTERNAL_FAILURE" | "CUTOFF";
        amountCents: number;
        clientId: string;
        eftPaymentData: {};
    };
}>;
export type ViewRevioDisbursementsResponse = z.infer<typeof ViewRevioDisbursementsResponseSchema>;
export declare const LoanRevioDisbursementsResponseSchema: z.ZodObject<{
    revioDisbursements: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        disbursementRequestId: z.ZodString;
        userId: z.ZodString;
        loanId: z.ZodString;
        amount: z.ZodNumber;
        paymentDate: z.ZodDate;
        priority: z.ZodEnum<["NORMAL", "URGENT"]>;
        creditor: z.ZodObject<{
            accountNumber: z.ZodString;
            accountType: z.ZodEnum<["CURRENT", "SAVINGS", "TRANSMISSION"]>;
            branchCode: z.ZodString;
            name: z.ZodString;
            bank: z.ZodString;
            phoneNumber: z.ZodString;
            emailAddress: z.ZodString;
            idNumber: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            branchCode: string;
            accountNumber: string;
            accountType: "CURRENT" | "SAVINGS" | "TRANSMISSION";
            bank: string;
            phoneNumber: string;
            emailAddress: string;
            idNumber: string;
        }, {
            name: string;
            branchCode: string;
            accountNumber: string;
            accountType: "CURRENT" | "SAVINGS" | "TRANSMISSION";
            bank: string;
            phoneNumber: string;
            emailAddress: string;
            idNumber: string;
        }>;
        currency: z.ZodNativeEnum<typeof import("../../generated/data-contracts").CurrencyEnum>;
        status: z.ZodEnum<["NEW", "QUEUED", "SUBMITTED", "ACCEPTED", "COMPLETED", "VALIDATION_FAILURE", "TRANSACTION_FAILURE", "DISPUTED", "UNPAID", "UNPAID_WITH_RECOURSE", "INTERNAL_FAILURE", "CUTOFF"]>;
    }, {
        paymentId: z.ZodString;
        payment: z.ZodObject<{
            paymentId: z.ZodString;
            referenceNumber: z.ZodString;
            externalReference: z.ZodString;
            paymentDate: z.ZodDate;
            state: z.ZodEnum<["NEW", "QUEUED", "SUBMITTED", "ACCEPTED", "COMPLETED", "VALIDATION_FAILURE", "TRANSACTION_FAILURE", "DISPUTED", "UNPAID", "UNPAID_WITH_RECOURSE", "INTERNAL_FAILURE", "CUTOFF"]>;
            amountCents: z.ZodNumber;
            currency: z.ZodNativeEnum<typeof import("../../generated/data-contracts").CurrencyEnum>;
            clientId: z.ZodString;
            eftPaymentData: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        }, "strip", z.ZodTypeAny, {
            currency: import("../../generated/data-contracts").CurrencyEnum;
            paymentId: string;
            referenceNumber: string;
            externalReference: string;
            paymentDate: Date;
            state: "NEW" | "QUEUED" | "SUBMITTED" | "ACCEPTED" | "COMPLETED" | "VALIDATION_FAILURE" | "TRANSACTION_FAILURE" | "DISPUTED" | "UNPAID" | "UNPAID_WITH_RECOURSE" | "INTERNAL_FAILURE" | "CUTOFF";
            amountCents: number;
            clientId: string;
            eftPaymentData: {};
        }, {
            currency: import("../../generated/data-contracts").CurrencyEnum;
            paymentId: string;
            referenceNumber: string;
            externalReference: string;
            paymentDate: Date;
            state: "NEW" | "QUEUED" | "SUBMITTED" | "ACCEPTED" | "COMPLETED" | "VALIDATION_FAILURE" | "TRANSACTION_FAILURE" | "DISPUTED" | "UNPAID" | "UNPAID_WITH_RECOURSE" | "INTERNAL_FAILURE" | "CUTOFF";
            amountCents: number;
            clientId: string;
            eftPaymentData: {};
        }>;
    }>, {
        _links: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    }>, "strip", z.ZodTypeAny, {
        loanId: string;
        currency: import("../../generated/data-contracts").CurrencyEnum;
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
            currency: import("../../generated/data-contracts").CurrencyEnum;
            paymentId: string;
            referenceNumber: string;
            externalReference: string;
            paymentDate: Date;
            state: "NEW" | "QUEUED" | "SUBMITTED" | "ACCEPTED" | "COMPLETED" | "VALIDATION_FAILURE" | "TRANSACTION_FAILURE" | "DISPUTED" | "UNPAID" | "UNPAID_WITH_RECOURSE" | "INTERNAL_FAILURE" | "CUTOFF";
            amountCents: number;
            clientId: string;
            eftPaymentData: {};
        };
    }, {
        loanId: string;
        currency: import("../../generated/data-contracts").CurrencyEnum;
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
            currency: import("../../generated/data-contracts").CurrencyEnum;
            paymentId: string;
            referenceNumber: string;
            externalReference: string;
            paymentDate: Date;
            state: "NEW" | "QUEUED" | "SUBMITTED" | "ACCEPTED" | "COMPLETED" | "VALIDATION_FAILURE" | "TRANSACTION_FAILURE" | "DISPUTED" | "UNPAID" | "UNPAID_WITH_RECOURSE" | "INTERNAL_FAILURE" | "CUTOFF";
            amountCents: number;
            clientId: string;
            eftPaymentData: {};
        };
    }>, "many">;
    _links: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    _embedded: z.ZodObject<{
        sortFields: z.ZodArray<z.ZodString, "many">;
        excludeValues: z.ZodArray<z.ZodString, "many">;
        loan: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    }, "strip", z.ZodTypeAny, {
        loan: {};
        sortFields: string[];
        excludeValues: string[];
    }, {
        loan: {};
        sortFields: string[];
        excludeValues: string[];
    }>;
}, "strip", z.ZodTypeAny, {
    _links: {};
    _embedded: {
        loan: {};
        sortFields: string[];
        excludeValues: string[];
    };
    revioDisbursements: {
        loanId: string;
        currency: import("../../generated/data-contracts").CurrencyEnum;
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
            currency: import("../../generated/data-contracts").CurrencyEnum;
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
}, {
    _links: {};
    _embedded: {
        loan: {};
        sortFields: string[];
        excludeValues: string[];
    };
    revioDisbursements: {
        loanId: string;
        currency: import("../../generated/data-contracts").CurrencyEnum;
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
            currency: import("../../generated/data-contracts").CurrencyEnum;
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
}>;
export type LoanRevioDisbursementsResponse = z.infer<typeof LoanRevioDisbursementsResponseSchema>;
//# sourceMappingURL=loan-payment-information-api.schemas.d.ts.map