import { z } from 'zod';
export declare const BasePaymentRequestSchema: z.ZodObject<{
    paymentLinkRequestId: z.ZodString;
    paymentRequestId: z.ZodString;
    transactionReference: z.ZodString;
    siteCode: z.ZodString;
    countryCode: z.ZodNativeEnum<typeof import("../../generated/data-contracts").IncorporationCountryEnum>;
    currencyCode: z.ZodNativeEnum<typeof import("../../generated/data-contracts").CurrencyEnum>;
    amount: z.ZodEffects<z.ZodNumber, number, unknown>;
    bankReference: z.ZodString;
    customer: z.ZodNullable<z.ZodString>;
    cancelUrl: z.ZodString;
    errorUrl: z.ZodString;
    successUrl: z.ZodString;
    notifyUrl: z.ZodString;
    isTest: z.ZodBoolean;
    selectedBankId: z.ZodNullable<z.ZodString>;
    bankId: z.ZodNullable<z.ZodString>;
    bankAccountNumber: z.ZodNullable<z.ZodString>;
    branchCode: z.ZodNullable<z.ZodString>;
    bankAccountName: z.ZodNullable<z.ZodString>;
    payeeDisplayName: z.ZodNullable<z.ZodString>;
    expiryDateUtc: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    allowVariableAmount: z.ZodBoolean;
    variableAmountMin: z.ZodNullable<z.ZodString>;
    variableAmountMax: z.ZodNullable<z.ZodString>;
    customerIdentifier: z.ZodNullable<z.ZodString>;
    customerCellphoneNumber: z.ZodNullable<z.ZodString>;
    generateShortUrl: z.ZodBoolean;
    url: z.ZodString;
    errorMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    url: string;
    paymentLinkRequestId: string;
    paymentRequestId: string;
    transactionReference: string;
    siteCode: string;
    countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
    currencyCode: import("../../generated/data-contracts").CurrencyEnum;
    amount: number;
    bankReference: string;
    customer: string | null;
    cancelUrl: string;
    errorUrl: string;
    successUrl: string;
    notifyUrl: string;
    isTest: boolean;
    selectedBankId: string | null;
    bankId: string | null;
    bankAccountNumber: string | null;
    branchCode: string | null;
    bankAccountName: string | null;
    payeeDisplayName: string | null;
    allowVariableAmount: boolean;
    variableAmountMin: string | null;
    variableAmountMax: string | null;
    customerIdentifier: string | null;
    customerCellphoneNumber: string | null;
    generateShortUrl: boolean;
    expiryDateUtc?: string | null | undefined;
    errorMessage?: string | null | undefined;
}, {
    url: string;
    paymentLinkRequestId: string;
    paymentRequestId: string;
    transactionReference: string;
    siteCode: string;
    countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
    currencyCode: import("../../generated/data-contracts").CurrencyEnum;
    bankReference: string;
    customer: string | null;
    cancelUrl: string;
    errorUrl: string;
    successUrl: string;
    notifyUrl: string;
    isTest: boolean;
    selectedBankId: string | null;
    bankId: string | null;
    bankAccountNumber: string | null;
    branchCode: string | null;
    bankAccountName: string | null;
    payeeDisplayName: string | null;
    allowVariableAmount: boolean;
    variableAmountMin: string | null;
    variableAmountMax: string | null;
    customerIdentifier: string | null;
    customerCellphoneNumber: string | null;
    generateShortUrl: boolean;
    amount?: unknown;
    expiryDateUtc?: unknown;
    errorMessage?: string | null | undefined;
}>;
export declare const PaymentRequestSchema: z.ZodObject<z.objectUtil.extendShape<Pick<{
    _links: z.ZodRecord<z.ZodString, z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    _embedded: z.ZodRecord<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    metaData: z.ZodObject<{
        itemsCount: z.ZodNumber;
        limit: z.ZodNumber;
        page: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        limit: number;
        page: number;
        itemsCount: number;
    }, {
        limit: number;
        page: number;
        itemsCount: number;
    }>;
}, "metaData">, {
    paymentLinkRequestId: z.ZodString;
    paymentRequestId: z.ZodString;
    transactionReference: z.ZodString;
    siteCode: z.ZodString;
    countryCode: z.ZodNativeEnum<typeof import("../../generated/data-contracts").IncorporationCountryEnum>;
    currencyCode: z.ZodNativeEnum<typeof import("../../generated/data-contracts").CurrencyEnum>;
    amount: z.ZodEffects<z.ZodNumber, number, unknown>;
    bankReference: z.ZodString;
    customer: z.ZodNullable<z.ZodString>;
    cancelUrl: z.ZodString;
    errorUrl: z.ZodString;
    successUrl: z.ZodString;
    notifyUrl: z.ZodString;
    isTest: z.ZodBoolean;
    selectedBankId: z.ZodNullable<z.ZodString>;
    bankId: z.ZodNullable<z.ZodString>;
    bankAccountNumber: z.ZodNullable<z.ZodString>;
    branchCode: z.ZodNullable<z.ZodString>;
    bankAccountName: z.ZodNullable<z.ZodString>;
    payeeDisplayName: z.ZodNullable<z.ZodString>;
    expiryDateUtc: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    allowVariableAmount: z.ZodBoolean;
    variableAmountMin: z.ZodNullable<z.ZodString>;
    variableAmountMax: z.ZodNullable<z.ZodString>;
    customerIdentifier: z.ZodNullable<z.ZodString>;
    customerCellphoneNumber: z.ZodNullable<z.ZodString>;
    generateShortUrl: z.ZodBoolean;
    url: z.ZodString;
    errorMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}>, "strip", z.ZodTypeAny, {
    url: string;
    metaData: {
        limit: number;
        page: number;
        itemsCount: number;
    };
    paymentLinkRequestId: string;
    paymentRequestId: string;
    transactionReference: string;
    siteCode: string;
    countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
    currencyCode: import("../../generated/data-contracts").CurrencyEnum;
    amount: number;
    bankReference: string;
    customer: string | null;
    cancelUrl: string;
    errorUrl: string;
    successUrl: string;
    notifyUrl: string;
    isTest: boolean;
    selectedBankId: string | null;
    bankId: string | null;
    bankAccountNumber: string | null;
    branchCode: string | null;
    bankAccountName: string | null;
    payeeDisplayName: string | null;
    allowVariableAmount: boolean;
    variableAmountMin: string | null;
    variableAmountMax: string | null;
    customerIdentifier: string | null;
    customerCellphoneNumber: string | null;
    generateShortUrl: boolean;
    expiryDateUtc?: string | null | undefined;
    errorMessage?: string | null | undefined;
}, {
    url: string;
    metaData: {
        limit: number;
        page: number;
        itemsCount: number;
    };
    paymentLinkRequestId: string;
    paymentRequestId: string;
    transactionReference: string;
    siteCode: string;
    countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
    currencyCode: import("../../generated/data-contracts").CurrencyEnum;
    bankReference: string;
    customer: string | null;
    cancelUrl: string;
    errorUrl: string;
    successUrl: string;
    notifyUrl: string;
    isTest: boolean;
    selectedBankId: string | null;
    bankId: string | null;
    bankAccountNumber: string | null;
    branchCode: string | null;
    bankAccountName: string | null;
    payeeDisplayName: string | null;
    allowVariableAmount: boolean;
    variableAmountMin: string | null;
    variableAmountMax: string | null;
    customerIdentifier: string | null;
    customerCellphoneNumber: string | null;
    generateShortUrl: boolean;
    amount?: unknown;
    expiryDateUtc?: unknown;
    errorMessage?: string | null | undefined;
}>;
export declare const PaymentRequestsSchemaResponse: z.ZodObject<z.objectUtil.extendShape<Pick<{
    _links: z.ZodRecord<z.ZodString, z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    _embedded: z.ZodRecord<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    metaData: z.ZodObject<{
        itemsCount: z.ZodNumber;
        limit: z.ZodNumber;
        page: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        limit: number;
        page: number;
        itemsCount: number;
    }, {
        limit: number;
        page: number;
        itemsCount: number;
    }>;
}, "metaData">, {
    paymentRequests: z.ZodArray<z.ZodObject<Omit<z.objectUtil.extendShape<Pick<{
        _links: z.ZodRecord<z.ZodString, z.ZodObject<{
            href: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            href: string;
        }, {
            href: string;
        }>>;
        _embedded: z.ZodRecord<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
        metaData: z.ZodObject<{
            itemsCount: z.ZodNumber;
            limit: z.ZodNumber;
            page: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            page: number;
            itemsCount: number;
        }, {
            limit: number;
            page: number;
            itemsCount: number;
        }>;
    }, "metaData">, {
        paymentLinkRequestId: z.ZodString;
        paymentRequestId: z.ZodString;
        transactionReference: z.ZodString;
        siteCode: z.ZodString;
        countryCode: z.ZodNativeEnum<typeof import("../../generated/data-contracts").IncorporationCountryEnum>;
        currencyCode: z.ZodNativeEnum<typeof import("../../generated/data-contracts").CurrencyEnum>;
        amount: z.ZodEffects<z.ZodNumber, number, unknown>;
        bankReference: z.ZodString;
        customer: z.ZodNullable<z.ZodString>;
        cancelUrl: z.ZodString;
        errorUrl: z.ZodString;
        successUrl: z.ZodString;
        notifyUrl: z.ZodString;
        isTest: z.ZodBoolean;
        selectedBankId: z.ZodNullable<z.ZodString>;
        bankId: z.ZodNullable<z.ZodString>;
        bankAccountNumber: z.ZodNullable<z.ZodString>;
        branchCode: z.ZodNullable<z.ZodString>;
        bankAccountName: z.ZodNullable<z.ZodString>;
        payeeDisplayName: z.ZodNullable<z.ZodString>;
        expiryDateUtc: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
        allowVariableAmount: z.ZodBoolean;
        variableAmountMin: z.ZodNullable<z.ZodString>;
        variableAmountMax: z.ZodNullable<z.ZodString>;
        customerIdentifier: z.ZodNullable<z.ZodString>;
        customerCellphoneNumber: z.ZodNullable<z.ZodString>;
        generateShortUrl: z.ZodBoolean;
        url: z.ZodString;
        errorMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }>, "metaData">, "strip", z.ZodTypeAny, {
        url: string;
        paymentLinkRequestId: string;
        paymentRequestId: string;
        transactionReference: string;
        siteCode: string;
        countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
        currencyCode: import("../../generated/data-contracts").CurrencyEnum;
        amount: number;
        bankReference: string;
        customer: string | null;
        cancelUrl: string;
        errorUrl: string;
        successUrl: string;
        notifyUrl: string;
        isTest: boolean;
        selectedBankId: string | null;
        bankId: string | null;
        bankAccountNumber: string | null;
        branchCode: string | null;
        bankAccountName: string | null;
        payeeDisplayName: string | null;
        allowVariableAmount: boolean;
        variableAmountMin: string | null;
        variableAmountMax: string | null;
        customerIdentifier: string | null;
        customerCellphoneNumber: string | null;
        generateShortUrl: boolean;
        expiryDateUtc?: string | null | undefined;
        errorMessage?: string | null | undefined;
    }, {
        url: string;
        paymentLinkRequestId: string;
        paymentRequestId: string;
        transactionReference: string;
        siteCode: string;
        countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
        currencyCode: import("../../generated/data-contracts").CurrencyEnum;
        bankReference: string;
        customer: string | null;
        cancelUrl: string;
        errorUrl: string;
        successUrl: string;
        notifyUrl: string;
        isTest: boolean;
        selectedBankId: string | null;
        bankId: string | null;
        bankAccountNumber: string | null;
        branchCode: string | null;
        bankAccountName: string | null;
        payeeDisplayName: string | null;
        allowVariableAmount: boolean;
        variableAmountMin: string | null;
        variableAmountMax: string | null;
        customerIdentifier: string | null;
        customerCellphoneNumber: string | null;
        generateShortUrl: boolean;
        amount?: unknown;
        expiryDateUtc?: unknown;
        errorMessage?: string | null | undefined;
    }>, "many">;
}>, "strip", z.ZodTypeAny, {
    metaData: {
        limit: number;
        page: number;
        itemsCount: number;
    };
    paymentRequests: {
        url: string;
        paymentLinkRequestId: string;
        paymentRequestId: string;
        transactionReference: string;
        siteCode: string;
        countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
        currencyCode: import("../../generated/data-contracts").CurrencyEnum;
        amount: number;
        bankReference: string;
        customer: string | null;
        cancelUrl: string;
        errorUrl: string;
        successUrl: string;
        notifyUrl: string;
        isTest: boolean;
        selectedBankId: string | null;
        bankId: string | null;
        bankAccountNumber: string | null;
        branchCode: string | null;
        bankAccountName: string | null;
        payeeDisplayName: string | null;
        allowVariableAmount: boolean;
        variableAmountMin: string | null;
        variableAmountMax: string | null;
        customerIdentifier: string | null;
        customerCellphoneNumber: string | null;
        generateShortUrl: boolean;
        expiryDateUtc?: string | null | undefined;
        errorMessage?: string | null | undefined;
    }[];
}, {
    metaData: {
        limit: number;
        page: number;
        itemsCount: number;
    };
    paymentRequests: {
        url: string;
        paymentLinkRequestId: string;
        paymentRequestId: string;
        transactionReference: string;
        siteCode: string;
        countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
        currencyCode: import("../../generated/data-contracts").CurrencyEnum;
        bankReference: string;
        customer: string | null;
        cancelUrl: string;
        errorUrl: string;
        successUrl: string;
        notifyUrl: string;
        isTest: boolean;
        selectedBankId: string | null;
        bankId: string | null;
        bankAccountNumber: string | null;
        branchCode: string | null;
        bankAccountName: string | null;
        payeeDisplayName: string | null;
        allowVariableAmount: boolean;
        variableAmountMin: string | null;
        variableAmountMax: string | null;
        customerIdentifier: string | null;
        customerCellphoneNumber: string | null;
        generateShortUrl: boolean;
        amount?: unknown;
        expiryDateUtc?: unknown;
        errorMessage?: string | null | undefined;
    }[];
}>;
export declare const PaymentLinkRequestSchema: z.ZodObject<z.objectUtil.extendShape<Omit<{
    _links: z.ZodRecord<z.ZodString, z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    _embedded: z.ZodRecord<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    metaData: z.ZodObject<{
        itemsCount: z.ZodNumber;
        limit: z.ZodNumber;
        page: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        limit: number;
        page: number;
        itemsCount: number;
    }, {
        limit: number;
        page: number;
        itemsCount: number;
    }>;
}, "_embedded" | "metaData">, {
    id: z.ZodString;
    loanId: z.ZodString;
    amount: z.ZodEffects<z.ZodNumber, number, unknown>;
    bankReference: z.ZodString;
    expiryDatetime: z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>;
    createdAt: z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>;
    url: z.ZodString;
    errorMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodNullable<z.ZodString>;
    isReconciled: z.ZodBoolean;
    paymentRequest: z.ZodObject<Omit<z.objectUtil.extendShape<Pick<{
        _links: z.ZodRecord<z.ZodString, z.ZodObject<{
            href: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            href: string;
        }, {
            href: string;
        }>>;
        _embedded: z.ZodRecord<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
        metaData: z.ZodObject<{
            itemsCount: z.ZodNumber;
            limit: z.ZodNumber;
            page: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            page: number;
            itemsCount: number;
        }, {
            limit: number;
            page: number;
            itemsCount: number;
        }>;
    }, "metaData">, {
        paymentLinkRequestId: z.ZodString;
        paymentRequestId: z.ZodString;
        transactionReference: z.ZodString;
        siteCode: z.ZodString;
        countryCode: z.ZodNativeEnum<typeof import("../../generated/data-contracts").IncorporationCountryEnum>;
        currencyCode: z.ZodNativeEnum<typeof import("../../generated/data-contracts").CurrencyEnum>;
        amount: z.ZodEffects<z.ZodNumber, number, unknown>;
        bankReference: z.ZodString;
        customer: z.ZodNullable<z.ZodString>;
        cancelUrl: z.ZodString;
        errorUrl: z.ZodString;
        successUrl: z.ZodString;
        notifyUrl: z.ZodString;
        isTest: z.ZodBoolean;
        selectedBankId: z.ZodNullable<z.ZodString>;
        bankId: z.ZodNullable<z.ZodString>;
        bankAccountNumber: z.ZodNullable<z.ZodString>;
        branchCode: z.ZodNullable<z.ZodString>;
        bankAccountName: z.ZodNullable<z.ZodString>;
        payeeDisplayName: z.ZodNullable<z.ZodString>;
        expiryDateUtc: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
        allowVariableAmount: z.ZodBoolean;
        variableAmountMin: z.ZodNullable<z.ZodString>;
        variableAmountMax: z.ZodNullable<z.ZodString>;
        customerIdentifier: z.ZodNullable<z.ZodString>;
        customerCellphoneNumber: z.ZodNullable<z.ZodString>;
        generateShortUrl: z.ZodBoolean;
        url: z.ZodString;
        errorMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }>, "metaData">, "strip", z.ZodTypeAny, {
        url: string;
        paymentLinkRequestId: string;
        paymentRequestId: string;
        transactionReference: string;
        siteCode: string;
        countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
        currencyCode: import("../../generated/data-contracts").CurrencyEnum;
        amount: number;
        bankReference: string;
        customer: string | null;
        cancelUrl: string;
        errorUrl: string;
        successUrl: string;
        notifyUrl: string;
        isTest: boolean;
        selectedBankId: string | null;
        bankId: string | null;
        bankAccountNumber: string | null;
        branchCode: string | null;
        bankAccountName: string | null;
        payeeDisplayName: string | null;
        allowVariableAmount: boolean;
        variableAmountMin: string | null;
        variableAmountMax: string | null;
        customerIdentifier: string | null;
        customerCellphoneNumber: string | null;
        generateShortUrl: boolean;
        expiryDateUtc?: string | null | undefined;
        errorMessage?: string | null | undefined;
    }, {
        url: string;
        paymentLinkRequestId: string;
        paymentRequestId: string;
        transactionReference: string;
        siteCode: string;
        countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
        currencyCode: import("../../generated/data-contracts").CurrencyEnum;
        bankReference: string;
        customer: string | null;
        cancelUrl: string;
        errorUrl: string;
        successUrl: string;
        notifyUrl: string;
        isTest: boolean;
        selectedBankId: string | null;
        bankId: string | null;
        bankAccountNumber: string | null;
        branchCode: string | null;
        bankAccountName: string | null;
        payeeDisplayName: string | null;
        allowVariableAmount: boolean;
        variableAmountMin: string | null;
        variableAmountMax: string | null;
        customerIdentifier: string | null;
        customerCellphoneNumber: string | null;
        generateShortUrl: boolean;
        amount?: unknown;
        expiryDateUtc?: unknown;
        errorMessage?: string | null | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    createdAt: string | null;
    loanId: string;
    url: string;
    status: string | null;
    _links: Record<string, {
        href: string;
    }>;
    amount: number;
    bankReference: string;
    id: string;
    expiryDatetime: string | null;
    isReconciled: boolean;
    paymentRequest: {
        url: string;
        paymentLinkRequestId: string;
        paymentRequestId: string;
        transactionReference: string;
        siteCode: string;
        countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
        currencyCode: import("../../generated/data-contracts").CurrencyEnum;
        amount: number;
        bankReference: string;
        customer: string | null;
        cancelUrl: string;
        errorUrl: string;
        successUrl: string;
        notifyUrl: string;
        isTest: boolean;
        selectedBankId: string | null;
        bankId: string | null;
        bankAccountNumber: string | null;
        branchCode: string | null;
        bankAccountName: string | null;
        payeeDisplayName: string | null;
        allowVariableAmount: boolean;
        variableAmountMin: string | null;
        variableAmountMax: string | null;
        customerIdentifier: string | null;
        customerCellphoneNumber: string | null;
        generateShortUrl: boolean;
        expiryDateUtc?: string | null | undefined;
        errorMessage?: string | null | undefined;
    };
    errorMessage?: string | null | undefined;
}, {
    loanId: string;
    url: string;
    status: string | null;
    _links: Record<string, {
        href: string;
    }>;
    bankReference: string;
    id: string;
    isReconciled: boolean;
    paymentRequest: {
        url: string;
        paymentLinkRequestId: string;
        paymentRequestId: string;
        transactionReference: string;
        siteCode: string;
        countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
        currencyCode: import("../../generated/data-contracts").CurrencyEnum;
        bankReference: string;
        customer: string | null;
        cancelUrl: string;
        errorUrl: string;
        successUrl: string;
        notifyUrl: string;
        isTest: boolean;
        selectedBankId: string | null;
        bankId: string | null;
        bankAccountNumber: string | null;
        branchCode: string | null;
        bankAccountName: string | null;
        payeeDisplayName: string | null;
        allowVariableAmount: boolean;
        variableAmountMin: string | null;
        variableAmountMax: string | null;
        customerIdentifier: string | null;
        customerCellphoneNumber: string | null;
        generateShortUrl: boolean;
        amount?: unknown;
        expiryDateUtc?: unknown;
        errorMessage?: string | null | undefined;
    };
    createdAt?: unknown;
    amount?: unknown;
    errorMessage?: string | null | undefined;
    expiryDatetime?: unknown;
}>;
export declare const PaymentLinkRequestsSchemaResponse: z.ZodObject<z.objectUtil.extendShape<{
    _links: z.ZodRecord<z.ZodString, z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    _embedded: z.ZodRecord<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    metaData: z.ZodObject<{
        itemsCount: z.ZodNumber;
        limit: z.ZodNumber;
        page: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        limit: number;
        page: number;
        itemsCount: number;
    }, {
        limit: number;
        page: number;
        itemsCount: number;
    }>;
}, {
    paymentLinkRequests: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<Omit<{
        _links: z.ZodRecord<z.ZodString, z.ZodObject<{
            href: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            href: string;
        }, {
            href: string;
        }>>;
        _embedded: z.ZodRecord<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
        metaData: z.ZodObject<{
            itemsCount: z.ZodNumber;
            limit: z.ZodNumber;
            page: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            page: number;
            itemsCount: number;
        }, {
            limit: number;
            page: number;
            itemsCount: number;
        }>;
    }, "_embedded" | "metaData">, {
        id: z.ZodString;
        loanId: z.ZodString;
        amount: z.ZodEffects<z.ZodNumber, number, unknown>;
        bankReference: z.ZodString;
        expiryDatetime: z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>;
        createdAt: z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>;
        url: z.ZodString;
        errorMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        status: z.ZodNullable<z.ZodString>;
        isReconciled: z.ZodBoolean;
        paymentRequest: z.ZodObject<Omit<z.objectUtil.extendShape<Pick<{
            _links: z.ZodRecord<z.ZodString, z.ZodObject<{
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                href: string;
            }, {
                href: string;
            }>>;
            _embedded: z.ZodRecord<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
            metaData: z.ZodObject<{
                itemsCount: z.ZodNumber;
                limit: z.ZodNumber;
                page: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                limit: number;
                page: number;
                itemsCount: number;
            }, {
                limit: number;
                page: number;
                itemsCount: number;
            }>;
        }, "metaData">, {
            paymentLinkRequestId: z.ZodString;
            paymentRequestId: z.ZodString;
            transactionReference: z.ZodString;
            siteCode: z.ZodString;
            countryCode: z.ZodNativeEnum<typeof import("../../generated/data-contracts").IncorporationCountryEnum>;
            currencyCode: z.ZodNativeEnum<typeof import("../../generated/data-contracts").CurrencyEnum>;
            amount: z.ZodEffects<z.ZodNumber, number, unknown>;
            bankReference: z.ZodString;
            customer: z.ZodNullable<z.ZodString>;
            cancelUrl: z.ZodString;
            errorUrl: z.ZodString;
            successUrl: z.ZodString;
            notifyUrl: z.ZodString;
            isTest: z.ZodBoolean;
            selectedBankId: z.ZodNullable<z.ZodString>;
            bankId: z.ZodNullable<z.ZodString>;
            bankAccountNumber: z.ZodNullable<z.ZodString>;
            branchCode: z.ZodNullable<z.ZodString>;
            bankAccountName: z.ZodNullable<z.ZodString>;
            payeeDisplayName: z.ZodNullable<z.ZodString>;
            expiryDateUtc: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
            allowVariableAmount: z.ZodBoolean;
            variableAmountMin: z.ZodNullable<z.ZodString>;
            variableAmountMax: z.ZodNullable<z.ZodString>;
            customerIdentifier: z.ZodNullable<z.ZodString>;
            customerCellphoneNumber: z.ZodNullable<z.ZodString>;
            generateShortUrl: z.ZodBoolean;
            url: z.ZodString;
            errorMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }>, "metaData">, "strip", z.ZodTypeAny, {
            url: string;
            paymentLinkRequestId: string;
            paymentRequestId: string;
            transactionReference: string;
            siteCode: string;
            countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
            currencyCode: import("../../generated/data-contracts").CurrencyEnum;
            amount: number;
            bankReference: string;
            customer: string | null;
            cancelUrl: string;
            errorUrl: string;
            successUrl: string;
            notifyUrl: string;
            isTest: boolean;
            selectedBankId: string | null;
            bankId: string | null;
            bankAccountNumber: string | null;
            branchCode: string | null;
            bankAccountName: string | null;
            payeeDisplayName: string | null;
            allowVariableAmount: boolean;
            variableAmountMin: string | null;
            variableAmountMax: string | null;
            customerIdentifier: string | null;
            customerCellphoneNumber: string | null;
            generateShortUrl: boolean;
            expiryDateUtc?: string | null | undefined;
            errorMessage?: string | null | undefined;
        }, {
            url: string;
            paymentLinkRequestId: string;
            paymentRequestId: string;
            transactionReference: string;
            siteCode: string;
            countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
            currencyCode: import("../../generated/data-contracts").CurrencyEnum;
            bankReference: string;
            customer: string | null;
            cancelUrl: string;
            errorUrl: string;
            successUrl: string;
            notifyUrl: string;
            isTest: boolean;
            selectedBankId: string | null;
            bankId: string | null;
            bankAccountNumber: string | null;
            branchCode: string | null;
            bankAccountName: string | null;
            payeeDisplayName: string | null;
            allowVariableAmount: boolean;
            variableAmountMin: string | null;
            variableAmountMax: string | null;
            customerIdentifier: string | null;
            customerCellphoneNumber: string | null;
            generateShortUrl: boolean;
            amount?: unknown;
            expiryDateUtc?: unknown;
            errorMessage?: string | null | undefined;
        }>;
    }>, "strip", z.ZodTypeAny, {
        createdAt: string | null;
        loanId: string;
        url: string;
        status: string | null;
        _links: Record<string, {
            href: string;
        }>;
        amount: number;
        bankReference: string;
        id: string;
        expiryDatetime: string | null;
        isReconciled: boolean;
        paymentRequest: {
            url: string;
            paymentLinkRequestId: string;
            paymentRequestId: string;
            transactionReference: string;
            siteCode: string;
            countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
            currencyCode: import("../../generated/data-contracts").CurrencyEnum;
            amount: number;
            bankReference: string;
            customer: string | null;
            cancelUrl: string;
            errorUrl: string;
            successUrl: string;
            notifyUrl: string;
            isTest: boolean;
            selectedBankId: string | null;
            bankId: string | null;
            bankAccountNumber: string | null;
            branchCode: string | null;
            bankAccountName: string | null;
            payeeDisplayName: string | null;
            allowVariableAmount: boolean;
            variableAmountMin: string | null;
            variableAmountMax: string | null;
            customerIdentifier: string | null;
            customerCellphoneNumber: string | null;
            generateShortUrl: boolean;
            expiryDateUtc?: string | null | undefined;
            errorMessage?: string | null | undefined;
        };
        errorMessage?: string | null | undefined;
    }, {
        loanId: string;
        url: string;
        status: string | null;
        _links: Record<string, {
            href: string;
        }>;
        bankReference: string;
        id: string;
        isReconciled: boolean;
        paymentRequest: {
            url: string;
            paymentLinkRequestId: string;
            paymentRequestId: string;
            transactionReference: string;
            siteCode: string;
            countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
            currencyCode: import("../../generated/data-contracts").CurrencyEnum;
            bankReference: string;
            customer: string | null;
            cancelUrl: string;
            errorUrl: string;
            successUrl: string;
            notifyUrl: string;
            isTest: boolean;
            selectedBankId: string | null;
            bankId: string | null;
            bankAccountNumber: string | null;
            branchCode: string | null;
            bankAccountName: string | null;
            payeeDisplayName: string | null;
            allowVariableAmount: boolean;
            variableAmountMin: string | null;
            variableAmountMax: string | null;
            customerIdentifier: string | null;
            customerCellphoneNumber: string | null;
            generateShortUrl: boolean;
            amount?: unknown;
            expiryDateUtc?: unknown;
            errorMessage?: string | null | undefined;
        };
        createdAt?: unknown;
        amount?: unknown;
        errorMessage?: string | null | undefined;
        expiryDatetime?: unknown;
    }>, "many">;
    _embedded: z.ZodObject<{
        loan: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    }, "strip", z.ZodTypeAny, {
        loan: {};
    }, {
        loan: {};
    }>;
    _links: z.ZodOptional<z.ZodObject<{
        getPaymentLinkPaymentRequests: z.ZodOptional<z.ZodObject<{
            href: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            href: string;
        }, {
            href: string;
        }>>;
        emailPaymentLinkRequest: z.ZodOptional<z.ZodObject<{
            href: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            href: string;
        }, {
            href: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        getPaymentLinkPaymentRequests?: {
            href: string;
        } | undefined;
        emailPaymentLinkRequest?: {
            href: string;
        } | undefined;
    }, {
        getPaymentLinkPaymentRequests?: {
            href: string;
        } | undefined;
        emailPaymentLinkRequest?: {
            href: string;
        } | undefined;
    }>>;
}>, "strip", z.ZodTypeAny, {
    _embedded: {
        loan: {};
    };
    metaData: {
        limit: number;
        page: number;
        itemsCount: number;
    };
    paymentLinkRequests: {
        createdAt: string | null;
        loanId: string;
        url: string;
        status: string | null;
        _links: Record<string, {
            href: string;
        }>;
        amount: number;
        bankReference: string;
        id: string;
        expiryDatetime: string | null;
        isReconciled: boolean;
        paymentRequest: {
            url: string;
            paymentLinkRequestId: string;
            paymentRequestId: string;
            transactionReference: string;
            siteCode: string;
            countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
            currencyCode: import("../../generated/data-contracts").CurrencyEnum;
            amount: number;
            bankReference: string;
            customer: string | null;
            cancelUrl: string;
            errorUrl: string;
            successUrl: string;
            notifyUrl: string;
            isTest: boolean;
            selectedBankId: string | null;
            bankId: string | null;
            bankAccountNumber: string | null;
            branchCode: string | null;
            bankAccountName: string | null;
            payeeDisplayName: string | null;
            allowVariableAmount: boolean;
            variableAmountMin: string | null;
            variableAmountMax: string | null;
            customerIdentifier: string | null;
            customerCellphoneNumber: string | null;
            generateShortUrl: boolean;
            expiryDateUtc?: string | null | undefined;
            errorMessage?: string | null | undefined;
        };
        errorMessage?: string | null | undefined;
    }[];
    _links?: {
        getPaymentLinkPaymentRequests?: {
            href: string;
        } | undefined;
        emailPaymentLinkRequest?: {
            href: string;
        } | undefined;
    } | undefined;
}, {
    _embedded: {
        loan: {};
    };
    metaData: {
        limit: number;
        page: number;
        itemsCount: number;
    };
    paymentLinkRequests: {
        loanId: string;
        url: string;
        status: string | null;
        _links: Record<string, {
            href: string;
        }>;
        bankReference: string;
        id: string;
        isReconciled: boolean;
        paymentRequest: {
            url: string;
            paymentLinkRequestId: string;
            paymentRequestId: string;
            transactionReference: string;
            siteCode: string;
            countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
            currencyCode: import("../../generated/data-contracts").CurrencyEnum;
            bankReference: string;
            customer: string | null;
            cancelUrl: string;
            errorUrl: string;
            successUrl: string;
            notifyUrl: string;
            isTest: boolean;
            selectedBankId: string | null;
            bankId: string | null;
            bankAccountNumber: string | null;
            branchCode: string | null;
            bankAccountName: string | null;
            payeeDisplayName: string | null;
            allowVariableAmount: boolean;
            variableAmountMin: string | null;
            variableAmountMax: string | null;
            customerIdentifier: string | null;
            customerCellphoneNumber: string | null;
            generateShortUrl: boolean;
            amount?: unknown;
            expiryDateUtc?: unknown;
            errorMessage?: string | null | undefined;
        };
        createdAt?: unknown;
        amount?: unknown;
        errorMessage?: string | null | undefined;
        expiryDatetime?: unknown;
    }[];
    _links?: {
        getPaymentLinkPaymentRequests?: {
            href: string;
        } | undefined;
        emailPaymentLinkRequest?: {
            href: string;
        } | undefined;
    } | undefined;
}>;
export declare const CreatePaymentLinkRequestsSchemaResponse: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<Omit<{
    _links: z.ZodRecord<z.ZodString, z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    _embedded: z.ZodRecord<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    metaData: z.ZodObject<{
        itemsCount: z.ZodNumber;
        limit: z.ZodNumber;
        page: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        limit: number;
        page: number;
        itemsCount: number;
    }, {
        limit: number;
        page: number;
        itemsCount: number;
    }>;
}, "_embedded" | "metaData">, {
    id: z.ZodString;
    loanId: z.ZodString;
    amount: z.ZodEffects<z.ZodNumber, number, unknown>;
    bankReference: z.ZodString;
    expiryDatetime: z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>;
    createdAt: z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>;
    url: z.ZodString;
    errorMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodNullable<z.ZodString>;
    isReconciled: z.ZodBoolean;
    paymentRequest: z.ZodObject<Omit<z.objectUtil.extendShape<Pick<{
        _links: z.ZodRecord<z.ZodString, z.ZodObject<{
            href: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            href: string;
        }, {
            href: string;
        }>>;
        _embedded: z.ZodRecord<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
        metaData: z.ZodObject<{
            itemsCount: z.ZodNumber;
            limit: z.ZodNumber;
            page: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            limit: number;
            page: number;
            itemsCount: number;
        }, {
            limit: number;
            page: number;
            itemsCount: number;
        }>;
    }, "metaData">, {
        paymentLinkRequestId: z.ZodString;
        paymentRequestId: z.ZodString;
        transactionReference: z.ZodString;
        siteCode: z.ZodString;
        countryCode: z.ZodNativeEnum<typeof import("../../generated/data-contracts").IncorporationCountryEnum>;
        currencyCode: z.ZodNativeEnum<typeof import("../../generated/data-contracts").CurrencyEnum>;
        amount: z.ZodEffects<z.ZodNumber, number, unknown>;
        bankReference: z.ZodString;
        customer: z.ZodNullable<z.ZodString>;
        cancelUrl: z.ZodString;
        errorUrl: z.ZodString;
        successUrl: z.ZodString;
        notifyUrl: z.ZodString;
        isTest: z.ZodBoolean;
        selectedBankId: z.ZodNullable<z.ZodString>;
        bankId: z.ZodNullable<z.ZodString>;
        bankAccountNumber: z.ZodNullable<z.ZodString>;
        branchCode: z.ZodNullable<z.ZodString>;
        bankAccountName: z.ZodNullable<z.ZodString>;
        payeeDisplayName: z.ZodNullable<z.ZodString>;
        expiryDateUtc: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
        allowVariableAmount: z.ZodBoolean;
        variableAmountMin: z.ZodNullable<z.ZodString>;
        variableAmountMax: z.ZodNullable<z.ZodString>;
        customerIdentifier: z.ZodNullable<z.ZodString>;
        customerCellphoneNumber: z.ZodNullable<z.ZodString>;
        generateShortUrl: z.ZodBoolean;
        url: z.ZodString;
        errorMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }>, "metaData">, "strip", z.ZodTypeAny, {
        url: string;
        paymentLinkRequestId: string;
        paymentRequestId: string;
        transactionReference: string;
        siteCode: string;
        countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
        currencyCode: import("../../generated/data-contracts").CurrencyEnum;
        amount: number;
        bankReference: string;
        customer: string | null;
        cancelUrl: string;
        errorUrl: string;
        successUrl: string;
        notifyUrl: string;
        isTest: boolean;
        selectedBankId: string | null;
        bankId: string | null;
        bankAccountNumber: string | null;
        branchCode: string | null;
        bankAccountName: string | null;
        payeeDisplayName: string | null;
        allowVariableAmount: boolean;
        variableAmountMin: string | null;
        variableAmountMax: string | null;
        customerIdentifier: string | null;
        customerCellphoneNumber: string | null;
        generateShortUrl: boolean;
        expiryDateUtc?: string | null | undefined;
        errorMessage?: string | null | undefined;
    }, {
        url: string;
        paymentLinkRequestId: string;
        paymentRequestId: string;
        transactionReference: string;
        siteCode: string;
        countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
        currencyCode: import("../../generated/data-contracts").CurrencyEnum;
        bankReference: string;
        customer: string | null;
        cancelUrl: string;
        errorUrl: string;
        successUrl: string;
        notifyUrl: string;
        isTest: boolean;
        selectedBankId: string | null;
        bankId: string | null;
        bankAccountNumber: string | null;
        branchCode: string | null;
        bankAccountName: string | null;
        payeeDisplayName: string | null;
        allowVariableAmount: boolean;
        variableAmountMin: string | null;
        variableAmountMax: string | null;
        customerIdentifier: string | null;
        customerCellphoneNumber: string | null;
        generateShortUrl: boolean;
        amount?: unknown;
        expiryDateUtc?: unknown;
        errorMessage?: string | null | undefined;
    }>;
}>, {
    _embedded: z.ZodObject<{
        loanPaymentLinkRequests: z.ZodObject<z.objectUtil.extendShape<{
            _links: z.ZodRecord<z.ZodString, z.ZodObject<{
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                href: string;
            }, {
                href: string;
            }>>;
            _embedded: z.ZodRecord<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
            metaData: z.ZodObject<{
                itemsCount: z.ZodNumber;
                limit: z.ZodNumber;
                page: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                limit: number;
                page: number;
                itemsCount: number;
            }, {
                limit: number;
                page: number;
                itemsCount: number;
            }>;
        }, {
            paymentLinkRequests: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<Omit<{
                _links: z.ZodRecord<z.ZodString, z.ZodObject<{
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    href: string;
                }, {
                    href: string;
                }>>;
                _embedded: z.ZodRecord<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
                metaData: z.ZodObject<{
                    itemsCount: z.ZodNumber;
                    limit: z.ZodNumber;
                    page: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    limit: number;
                    page: number;
                    itemsCount: number;
                }, {
                    limit: number;
                    page: number;
                    itemsCount: number;
                }>;
            }, "_embedded" | "metaData">, {
                id: z.ZodString;
                loanId: z.ZodString;
                amount: z.ZodEffects<z.ZodNumber, number, unknown>;
                bankReference: z.ZodString;
                expiryDatetime: z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>;
                createdAt: z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>;
                url: z.ZodString;
                errorMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                status: z.ZodNullable<z.ZodString>;
                isReconciled: z.ZodBoolean;
                paymentRequest: z.ZodObject<Omit<z.objectUtil.extendShape<Pick<{
                    _links: z.ZodRecord<z.ZodString, z.ZodObject<{
                        href: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        href: string;
                    }, {
                        href: string;
                    }>>;
                    _embedded: z.ZodRecord<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
                    metaData: z.ZodObject<{
                        itemsCount: z.ZodNumber;
                        limit: z.ZodNumber;
                        page: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        limit: number;
                        page: number;
                        itemsCount: number;
                    }, {
                        limit: number;
                        page: number;
                        itemsCount: number;
                    }>;
                }, "metaData">, {
                    paymentLinkRequestId: z.ZodString;
                    paymentRequestId: z.ZodString;
                    transactionReference: z.ZodString;
                    siteCode: z.ZodString;
                    countryCode: z.ZodNativeEnum<typeof import("../../generated/data-contracts").IncorporationCountryEnum>;
                    currencyCode: z.ZodNativeEnum<typeof import("../../generated/data-contracts").CurrencyEnum>;
                    amount: z.ZodEffects<z.ZodNumber, number, unknown>;
                    bankReference: z.ZodString;
                    customer: z.ZodNullable<z.ZodString>;
                    cancelUrl: z.ZodString;
                    errorUrl: z.ZodString;
                    successUrl: z.ZodString;
                    notifyUrl: z.ZodString;
                    isTest: z.ZodBoolean;
                    selectedBankId: z.ZodNullable<z.ZodString>;
                    bankId: z.ZodNullable<z.ZodString>;
                    bankAccountNumber: z.ZodNullable<z.ZodString>;
                    branchCode: z.ZodNullable<z.ZodString>;
                    bankAccountName: z.ZodNullable<z.ZodString>;
                    payeeDisplayName: z.ZodNullable<z.ZodString>;
                    expiryDateUtc: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
                    allowVariableAmount: z.ZodBoolean;
                    variableAmountMin: z.ZodNullable<z.ZodString>;
                    variableAmountMax: z.ZodNullable<z.ZodString>;
                    customerIdentifier: z.ZodNullable<z.ZodString>;
                    customerCellphoneNumber: z.ZodNullable<z.ZodString>;
                    generateShortUrl: z.ZodBoolean;
                    url: z.ZodString;
                    errorMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }>, "metaData">, "strip", z.ZodTypeAny, {
                    url: string;
                    paymentLinkRequestId: string;
                    paymentRequestId: string;
                    transactionReference: string;
                    siteCode: string;
                    countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
                    currencyCode: import("../../generated/data-contracts").CurrencyEnum;
                    amount: number;
                    bankReference: string;
                    customer: string | null;
                    cancelUrl: string;
                    errorUrl: string;
                    successUrl: string;
                    notifyUrl: string;
                    isTest: boolean;
                    selectedBankId: string | null;
                    bankId: string | null;
                    bankAccountNumber: string | null;
                    branchCode: string | null;
                    bankAccountName: string | null;
                    payeeDisplayName: string | null;
                    allowVariableAmount: boolean;
                    variableAmountMin: string | null;
                    variableAmountMax: string | null;
                    customerIdentifier: string | null;
                    customerCellphoneNumber: string | null;
                    generateShortUrl: boolean;
                    expiryDateUtc?: string | null | undefined;
                    errorMessage?: string | null | undefined;
                }, {
                    url: string;
                    paymentLinkRequestId: string;
                    paymentRequestId: string;
                    transactionReference: string;
                    siteCode: string;
                    countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
                    currencyCode: import("../../generated/data-contracts").CurrencyEnum;
                    bankReference: string;
                    customer: string | null;
                    cancelUrl: string;
                    errorUrl: string;
                    successUrl: string;
                    notifyUrl: string;
                    isTest: boolean;
                    selectedBankId: string | null;
                    bankId: string | null;
                    bankAccountNumber: string | null;
                    branchCode: string | null;
                    bankAccountName: string | null;
                    payeeDisplayName: string | null;
                    allowVariableAmount: boolean;
                    variableAmountMin: string | null;
                    variableAmountMax: string | null;
                    customerIdentifier: string | null;
                    customerCellphoneNumber: string | null;
                    generateShortUrl: boolean;
                    amount?: unknown;
                    expiryDateUtc?: unknown;
                    errorMessage?: string | null | undefined;
                }>;
            }>, "strip", z.ZodTypeAny, {
                createdAt: string | null;
                loanId: string;
                url: string;
                status: string | null;
                _links: Record<string, {
                    href: string;
                }>;
                amount: number;
                bankReference: string;
                id: string;
                expiryDatetime: string | null;
                isReconciled: boolean;
                paymentRequest: {
                    url: string;
                    paymentLinkRequestId: string;
                    paymentRequestId: string;
                    transactionReference: string;
                    siteCode: string;
                    countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
                    currencyCode: import("../../generated/data-contracts").CurrencyEnum;
                    amount: number;
                    bankReference: string;
                    customer: string | null;
                    cancelUrl: string;
                    errorUrl: string;
                    successUrl: string;
                    notifyUrl: string;
                    isTest: boolean;
                    selectedBankId: string | null;
                    bankId: string | null;
                    bankAccountNumber: string | null;
                    branchCode: string | null;
                    bankAccountName: string | null;
                    payeeDisplayName: string | null;
                    allowVariableAmount: boolean;
                    variableAmountMin: string | null;
                    variableAmountMax: string | null;
                    customerIdentifier: string | null;
                    customerCellphoneNumber: string | null;
                    generateShortUrl: boolean;
                    expiryDateUtc?: string | null | undefined;
                    errorMessage?: string | null | undefined;
                };
                errorMessage?: string | null | undefined;
            }, {
                loanId: string;
                url: string;
                status: string | null;
                _links: Record<string, {
                    href: string;
                }>;
                bankReference: string;
                id: string;
                isReconciled: boolean;
                paymentRequest: {
                    url: string;
                    paymentLinkRequestId: string;
                    paymentRequestId: string;
                    transactionReference: string;
                    siteCode: string;
                    countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
                    currencyCode: import("../../generated/data-contracts").CurrencyEnum;
                    bankReference: string;
                    customer: string | null;
                    cancelUrl: string;
                    errorUrl: string;
                    successUrl: string;
                    notifyUrl: string;
                    isTest: boolean;
                    selectedBankId: string | null;
                    bankId: string | null;
                    bankAccountNumber: string | null;
                    branchCode: string | null;
                    bankAccountName: string | null;
                    payeeDisplayName: string | null;
                    allowVariableAmount: boolean;
                    variableAmountMin: string | null;
                    variableAmountMax: string | null;
                    customerIdentifier: string | null;
                    customerCellphoneNumber: string | null;
                    generateShortUrl: boolean;
                    amount?: unknown;
                    expiryDateUtc?: unknown;
                    errorMessage?: string | null | undefined;
                };
                createdAt?: unknown;
                amount?: unknown;
                errorMessage?: string | null | undefined;
                expiryDatetime?: unknown;
            }>, "many">;
            _embedded: z.ZodObject<{
                loan: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
            }, "strip", z.ZodTypeAny, {
                loan: {};
            }, {
                loan: {};
            }>;
            _links: z.ZodOptional<z.ZodObject<{
                getPaymentLinkPaymentRequests: z.ZodOptional<z.ZodObject<{
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    href: string;
                }, {
                    href: string;
                }>>;
                emailPaymentLinkRequest: z.ZodOptional<z.ZodObject<{
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    href: string;
                }, {
                    href: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                getPaymentLinkPaymentRequests?: {
                    href: string;
                } | undefined;
                emailPaymentLinkRequest?: {
                    href: string;
                } | undefined;
            }, {
                getPaymentLinkPaymentRequests?: {
                    href: string;
                } | undefined;
                emailPaymentLinkRequest?: {
                    href: string;
                } | undefined;
            }>>;
        }>, "strip", z.ZodTypeAny, {
            _embedded: {
                loan: {};
            };
            metaData: {
                limit: number;
                page: number;
                itemsCount: number;
            };
            paymentLinkRequests: {
                createdAt: string | null;
                loanId: string;
                url: string;
                status: string | null;
                _links: Record<string, {
                    href: string;
                }>;
                amount: number;
                bankReference: string;
                id: string;
                expiryDatetime: string | null;
                isReconciled: boolean;
                paymentRequest: {
                    url: string;
                    paymentLinkRequestId: string;
                    paymentRequestId: string;
                    transactionReference: string;
                    siteCode: string;
                    countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
                    currencyCode: import("../../generated/data-contracts").CurrencyEnum;
                    amount: number;
                    bankReference: string;
                    customer: string | null;
                    cancelUrl: string;
                    errorUrl: string;
                    successUrl: string;
                    notifyUrl: string;
                    isTest: boolean;
                    selectedBankId: string | null;
                    bankId: string | null;
                    bankAccountNumber: string | null;
                    branchCode: string | null;
                    bankAccountName: string | null;
                    payeeDisplayName: string | null;
                    allowVariableAmount: boolean;
                    variableAmountMin: string | null;
                    variableAmountMax: string | null;
                    customerIdentifier: string | null;
                    customerCellphoneNumber: string | null;
                    generateShortUrl: boolean;
                    expiryDateUtc?: string | null | undefined;
                    errorMessage?: string | null | undefined;
                };
                errorMessage?: string | null | undefined;
            }[];
            _links?: {
                getPaymentLinkPaymentRequests?: {
                    href: string;
                } | undefined;
                emailPaymentLinkRequest?: {
                    href: string;
                } | undefined;
            } | undefined;
        }, {
            _embedded: {
                loan: {};
            };
            metaData: {
                limit: number;
                page: number;
                itemsCount: number;
            };
            paymentLinkRequests: {
                loanId: string;
                url: string;
                status: string | null;
                _links: Record<string, {
                    href: string;
                }>;
                bankReference: string;
                id: string;
                isReconciled: boolean;
                paymentRequest: {
                    url: string;
                    paymentLinkRequestId: string;
                    paymentRequestId: string;
                    transactionReference: string;
                    siteCode: string;
                    countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
                    currencyCode: import("../../generated/data-contracts").CurrencyEnum;
                    bankReference: string;
                    customer: string | null;
                    cancelUrl: string;
                    errorUrl: string;
                    successUrl: string;
                    notifyUrl: string;
                    isTest: boolean;
                    selectedBankId: string | null;
                    bankId: string | null;
                    bankAccountNumber: string | null;
                    branchCode: string | null;
                    bankAccountName: string | null;
                    payeeDisplayName: string | null;
                    allowVariableAmount: boolean;
                    variableAmountMin: string | null;
                    variableAmountMax: string | null;
                    customerIdentifier: string | null;
                    customerCellphoneNumber: string | null;
                    generateShortUrl: boolean;
                    amount?: unknown;
                    expiryDateUtc?: unknown;
                    errorMessage?: string | null | undefined;
                };
                createdAt?: unknown;
                amount?: unknown;
                errorMessage?: string | null | undefined;
                expiryDatetime?: unknown;
            }[];
            _links?: {
                getPaymentLinkPaymentRequests?: {
                    href: string;
                } | undefined;
                emailPaymentLinkRequest?: {
                    href: string;
                } | undefined;
            } | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        loanPaymentLinkRequests: {
            _embedded: {
                loan: {};
            };
            metaData: {
                limit: number;
                page: number;
                itemsCount: number;
            };
            paymentLinkRequests: {
                createdAt: string | null;
                loanId: string;
                url: string;
                status: string | null;
                _links: Record<string, {
                    href: string;
                }>;
                amount: number;
                bankReference: string;
                id: string;
                expiryDatetime: string | null;
                isReconciled: boolean;
                paymentRequest: {
                    url: string;
                    paymentLinkRequestId: string;
                    paymentRequestId: string;
                    transactionReference: string;
                    siteCode: string;
                    countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
                    currencyCode: import("../../generated/data-contracts").CurrencyEnum;
                    amount: number;
                    bankReference: string;
                    customer: string | null;
                    cancelUrl: string;
                    errorUrl: string;
                    successUrl: string;
                    notifyUrl: string;
                    isTest: boolean;
                    selectedBankId: string | null;
                    bankId: string | null;
                    bankAccountNumber: string | null;
                    branchCode: string | null;
                    bankAccountName: string | null;
                    payeeDisplayName: string | null;
                    allowVariableAmount: boolean;
                    variableAmountMin: string | null;
                    variableAmountMax: string | null;
                    customerIdentifier: string | null;
                    customerCellphoneNumber: string | null;
                    generateShortUrl: boolean;
                    expiryDateUtc?: string | null | undefined;
                    errorMessage?: string | null | undefined;
                };
                errorMessage?: string | null | undefined;
            }[];
            _links?: {
                getPaymentLinkPaymentRequests?: {
                    href: string;
                } | undefined;
                emailPaymentLinkRequest?: {
                    href: string;
                } | undefined;
            } | undefined;
        };
    }, {
        loanPaymentLinkRequests: {
            _embedded: {
                loan: {};
            };
            metaData: {
                limit: number;
                page: number;
                itemsCount: number;
            };
            paymentLinkRequests: {
                loanId: string;
                url: string;
                status: string | null;
                _links: Record<string, {
                    href: string;
                }>;
                bankReference: string;
                id: string;
                isReconciled: boolean;
                paymentRequest: {
                    url: string;
                    paymentLinkRequestId: string;
                    paymentRequestId: string;
                    transactionReference: string;
                    siteCode: string;
                    countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
                    currencyCode: import("../../generated/data-contracts").CurrencyEnum;
                    bankReference: string;
                    customer: string | null;
                    cancelUrl: string;
                    errorUrl: string;
                    successUrl: string;
                    notifyUrl: string;
                    isTest: boolean;
                    selectedBankId: string | null;
                    bankId: string | null;
                    bankAccountNumber: string | null;
                    branchCode: string | null;
                    bankAccountName: string | null;
                    payeeDisplayName: string | null;
                    allowVariableAmount: boolean;
                    variableAmountMin: string | null;
                    variableAmountMax: string | null;
                    customerIdentifier: string | null;
                    customerCellphoneNumber: string | null;
                    generateShortUrl: boolean;
                    amount?: unknown;
                    expiryDateUtc?: unknown;
                    errorMessage?: string | null | undefined;
                };
                createdAt?: unknown;
                amount?: unknown;
                errorMessage?: string | null | undefined;
                expiryDatetime?: unknown;
            }[];
            _links?: {
                getPaymentLinkPaymentRequests?: {
                    href: string;
                } | undefined;
                emailPaymentLinkRequest?: {
                    href: string;
                } | undefined;
            } | undefined;
        };
    }>;
}>, "strip", z.ZodTypeAny, {
    createdAt: string | null;
    loanId: string;
    url: string;
    status: string | null;
    _links: Record<string, {
        href: string;
    }>;
    _embedded: {
        loanPaymentLinkRequests: {
            _embedded: {
                loan: {};
            };
            metaData: {
                limit: number;
                page: number;
                itemsCount: number;
            };
            paymentLinkRequests: {
                createdAt: string | null;
                loanId: string;
                url: string;
                status: string | null;
                _links: Record<string, {
                    href: string;
                }>;
                amount: number;
                bankReference: string;
                id: string;
                expiryDatetime: string | null;
                isReconciled: boolean;
                paymentRequest: {
                    url: string;
                    paymentLinkRequestId: string;
                    paymentRequestId: string;
                    transactionReference: string;
                    siteCode: string;
                    countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
                    currencyCode: import("../../generated/data-contracts").CurrencyEnum;
                    amount: number;
                    bankReference: string;
                    customer: string | null;
                    cancelUrl: string;
                    errorUrl: string;
                    successUrl: string;
                    notifyUrl: string;
                    isTest: boolean;
                    selectedBankId: string | null;
                    bankId: string | null;
                    bankAccountNumber: string | null;
                    branchCode: string | null;
                    bankAccountName: string | null;
                    payeeDisplayName: string | null;
                    allowVariableAmount: boolean;
                    variableAmountMin: string | null;
                    variableAmountMax: string | null;
                    customerIdentifier: string | null;
                    customerCellphoneNumber: string | null;
                    generateShortUrl: boolean;
                    expiryDateUtc?: string | null | undefined;
                    errorMessage?: string | null | undefined;
                };
                errorMessage?: string | null | undefined;
            }[];
            _links?: {
                getPaymentLinkPaymentRequests?: {
                    href: string;
                } | undefined;
                emailPaymentLinkRequest?: {
                    href: string;
                } | undefined;
            } | undefined;
        };
    };
    amount: number;
    bankReference: string;
    id: string;
    expiryDatetime: string | null;
    isReconciled: boolean;
    paymentRequest: {
        url: string;
        paymentLinkRequestId: string;
        paymentRequestId: string;
        transactionReference: string;
        siteCode: string;
        countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
        currencyCode: import("../../generated/data-contracts").CurrencyEnum;
        amount: number;
        bankReference: string;
        customer: string | null;
        cancelUrl: string;
        errorUrl: string;
        successUrl: string;
        notifyUrl: string;
        isTest: boolean;
        selectedBankId: string | null;
        bankId: string | null;
        bankAccountNumber: string | null;
        branchCode: string | null;
        bankAccountName: string | null;
        payeeDisplayName: string | null;
        allowVariableAmount: boolean;
        variableAmountMin: string | null;
        variableAmountMax: string | null;
        customerIdentifier: string | null;
        customerCellphoneNumber: string | null;
        generateShortUrl: boolean;
        expiryDateUtc?: string | null | undefined;
        errorMessage?: string | null | undefined;
    };
    errorMessage?: string | null | undefined;
}, {
    loanId: string;
    url: string;
    status: string | null;
    _links: Record<string, {
        href: string;
    }>;
    _embedded: {
        loanPaymentLinkRequests: {
            _embedded: {
                loan: {};
            };
            metaData: {
                limit: number;
                page: number;
                itemsCount: number;
            };
            paymentLinkRequests: {
                loanId: string;
                url: string;
                status: string | null;
                _links: Record<string, {
                    href: string;
                }>;
                bankReference: string;
                id: string;
                isReconciled: boolean;
                paymentRequest: {
                    url: string;
                    paymentLinkRequestId: string;
                    paymentRequestId: string;
                    transactionReference: string;
                    siteCode: string;
                    countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
                    currencyCode: import("../../generated/data-contracts").CurrencyEnum;
                    bankReference: string;
                    customer: string | null;
                    cancelUrl: string;
                    errorUrl: string;
                    successUrl: string;
                    notifyUrl: string;
                    isTest: boolean;
                    selectedBankId: string | null;
                    bankId: string | null;
                    bankAccountNumber: string | null;
                    branchCode: string | null;
                    bankAccountName: string | null;
                    payeeDisplayName: string | null;
                    allowVariableAmount: boolean;
                    variableAmountMin: string | null;
                    variableAmountMax: string | null;
                    customerIdentifier: string | null;
                    customerCellphoneNumber: string | null;
                    generateShortUrl: boolean;
                    amount?: unknown;
                    expiryDateUtc?: unknown;
                    errorMessage?: string | null | undefined;
                };
                createdAt?: unknown;
                amount?: unknown;
                errorMessage?: string | null | undefined;
                expiryDatetime?: unknown;
            }[];
            _links?: {
                getPaymentLinkPaymentRequests?: {
                    href: string;
                } | undefined;
                emailPaymentLinkRequest?: {
                    href: string;
                } | undefined;
            } | undefined;
        };
    };
    bankReference: string;
    id: string;
    isReconciled: boolean;
    paymentRequest: {
        url: string;
        paymentLinkRequestId: string;
        paymentRequestId: string;
        transactionReference: string;
        siteCode: string;
        countryCode: import("../../generated/data-contracts").IncorporationCountryEnum;
        currencyCode: import("../../generated/data-contracts").CurrencyEnum;
        bankReference: string;
        customer: string | null;
        cancelUrl: string;
        errorUrl: string;
        successUrl: string;
        notifyUrl: string;
        isTest: boolean;
        selectedBankId: string | null;
        bankId: string | null;
        bankAccountNumber: string | null;
        branchCode: string | null;
        bankAccountName: string | null;
        payeeDisplayName: string | null;
        allowVariableAmount: boolean;
        variableAmountMin: string | null;
        variableAmountMax: string | null;
        customerIdentifier: string | null;
        customerCellphoneNumber: string | null;
        generateShortUrl: boolean;
        amount?: unknown;
        expiryDateUtc?: unknown;
        errorMessage?: string | null | undefined;
    };
    createdAt?: unknown;
    amount?: unknown;
    errorMessage?: string | null | undefined;
    expiryDatetime?: unknown;
}>;
//# sourceMappingURL=PaymentRequest.schema.d.ts.map