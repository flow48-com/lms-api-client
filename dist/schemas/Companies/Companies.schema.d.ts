import { z } from 'zod';
export declare const _baseCompanySchema: z.ZodObject<z.objectUtil.extendShape<Pick<{
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
}, "_links">, {
    companyIdentifier: z.ZodString;
    companyLegalName: z.ZodString;
    currency: z.ZodNativeEnum<typeof import("../../generated/data-contracts").CurrencyEnum>;
    loanOfficerUser: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        user_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string, string | null | undefined>;
    }, "strip", z.ZodTypeAny, {
        email: string;
        user_id?: string | null | undefined;
    }, {
        email?: string | null | undefined;
        user_id?: string | null | undefined;
    }>>>, {
        user_id: string | null;
        email: string;
    }, {
        email?: string | null | undefined;
        user_id?: string | null | undefined;
    } | null | undefined>;
    accountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    branchCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    salesforceAccountId: z.ZodNullable<z.ZodString>;
    industry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isPartner: z.ZodOptional<z.ZodBoolean>;
    email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    website: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    contactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    loanOfficerUserId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    creditScore: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    isComplianceApproved: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    bankName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    iban: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    swift: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    bankAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updatedByUserId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ibfCreditLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rbfCreditLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    creditLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    utilizedCredit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    partnerCompanyIdentifier: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    incorporationCountry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    incorporationDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    companySourceType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    companyType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nextReviewDate: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    nextComplianceReviewData: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    nextComplianceReviewDate: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    _links: z.ZodOptional<z.ZodObject<{
        getCompany: z.ZodOptional<z.ZodObject<{
            href: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            href: string;
        }, {
            href: string;
        }>>;
        salesforce: z.ZodOptional<z.ZodObject<{
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
        salesforce?: {
            href: string;
        } | undefined;
    }, {
        getCompany?: {
            href: string;
        } | undefined;
        salesforce?: {
            href: string;
        } | undefined;
    }>>;
}>, "strip", z.ZodTypeAny, {
    companyIdentifier: string;
    currency: import("../../generated/data-contracts").CurrencyEnum;
    companyLegalName: string;
    loanOfficerUser: {
        user_id: string | null;
        email: string;
    };
    salesforceAccountId: string | null;
    email?: string | null | undefined;
    phone?: string | null | undefined;
    incorporationDate?: string | null | undefined;
    companyType?: string | null | undefined;
    industry?: string | null | undefined;
    isPartner?: boolean | undefined;
    website?: string | null | undefined;
    contactName?: string | null | undefined;
    loanOfficerUserId?: string | null | undefined;
    ibfCreditLimit?: number | null | undefined;
    rbfCreditLimit?: number | null | undefined;
    creditLimit?: number | null | undefined;
    creditScore?: number | null | undefined;
    nextReviewDate?: string | null | undefined;
    isComplianceApproved?: boolean | null | undefined;
    nextComplianceReviewDate?: string | null | undefined;
    bankName?: string | null | undefined;
    iban?: string | null | undefined;
    swift?: string | null | undefined;
    bankAddress?: string | null | undefined;
    createdAt?: string | null | undefined;
    updatedAt?: string | null | undefined;
    updatedByUserId?: string | null | undefined;
    _links?: {
        getCompany?: {
            href: string;
        } | undefined;
        salesforce?: {
            href: string;
        } | undefined;
    } | undefined;
    branchCode?: string | null | undefined;
    accountNumber?: string | null | undefined;
    companySourceType?: string | null | undefined;
    partnerCompanyIdentifier?: string | null | undefined;
    incorporationCountry?: string | null | undefined;
    utilizedCredit?: number | null | undefined;
    nextComplianceReviewData?: string | null | undefined;
}, {
    companyIdentifier: string;
    currency: import("../../generated/data-contracts").CurrencyEnum;
    companyLegalName: string;
    salesforceAccountId: string | null;
    email?: string | null | undefined;
    phone?: string | null | undefined;
    incorporationDate?: string | null | undefined;
    companyType?: string | null | undefined;
    industry?: string | null | undefined;
    isPartner?: boolean | undefined;
    website?: string | null | undefined;
    contactName?: string | null | undefined;
    loanOfficerUserId?: string | null | undefined;
    ibfCreditLimit?: number | null | undefined;
    rbfCreditLimit?: number | null | undefined;
    creditLimit?: number | null | undefined;
    creditScore?: number | null | undefined;
    nextReviewDate?: unknown;
    isComplianceApproved?: boolean | null | undefined;
    nextComplianceReviewDate?: unknown;
    bankName?: string | null | undefined;
    iban?: string | null | undefined;
    swift?: string | null | undefined;
    bankAddress?: string | null | undefined;
    createdAt?: unknown;
    updatedAt?: unknown;
    updatedByUserId?: string | null | undefined;
    _links?: {
        getCompany?: {
            href: string;
        } | undefined;
        salesforce?: {
            href: string;
        } | undefined;
    } | undefined;
    branchCode?: string | null | undefined;
    accountNumber?: string | null | undefined;
    companySourceType?: string | null | undefined;
    partnerCompanyIdentifier?: string | null | undefined;
    incorporationCountry?: string | null | undefined;
    utilizedCredit?: number | null | undefined;
    loanOfficerUser?: {
        email?: string | null | undefined;
        user_id?: string | null | undefined;
    } | null | undefined;
    nextComplianceReviewData?: unknown;
}>;
export declare const BaseCompanySchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<Pick<{
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
}, "_links">, {
    companyIdentifier: z.ZodString;
    companyLegalName: z.ZodString;
    currency: z.ZodNativeEnum<typeof import("../../generated/data-contracts").CurrencyEnum>;
    loanOfficerUser: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        user_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string, string | null | undefined>;
    }, "strip", z.ZodTypeAny, {
        email: string;
        user_id?: string | null | undefined;
    }, {
        email?: string | null | undefined;
        user_id?: string | null | undefined;
    }>>>, {
        user_id: string | null;
        email: string;
    }, {
        email?: string | null | undefined;
        user_id?: string | null | undefined;
    } | null | undefined>;
    accountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    branchCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    salesforceAccountId: z.ZodNullable<z.ZodString>;
    industry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isPartner: z.ZodOptional<z.ZodBoolean>;
    email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    website: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    contactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    loanOfficerUserId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    creditScore: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    isComplianceApproved: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    bankName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    iban: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    swift: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    bankAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updatedByUserId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ibfCreditLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rbfCreditLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    creditLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    utilizedCredit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    partnerCompanyIdentifier: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    incorporationCountry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    incorporationDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    companySourceType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    companyType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nextReviewDate: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    nextComplianceReviewData: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    nextComplianceReviewDate: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    _links: z.ZodOptional<z.ZodObject<{
        getCompany: z.ZodOptional<z.ZodObject<{
            href: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            href: string;
        }, {
            href: string;
        }>>;
        salesforce: z.ZodOptional<z.ZodObject<{
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
        salesforce?: {
            href: string;
        } | undefined;
    }, {
        getCompany?: {
            href: string;
        } | undefined;
        salesforce?: {
            href: string;
        } | undefined;
    }>>;
}>, {
    partnerCompany: z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<Omit<z.objectUtil.extendShape<Pick<{
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
    }, "_links">, {
        companyIdentifier: z.ZodString;
        companyLegalName: z.ZodString;
        currency: z.ZodNativeEnum<typeof import("../../generated/data-contracts").CurrencyEnum>;
        loanOfficerUser: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodObject<{
            user_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            email: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string, string | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            email: string;
            user_id?: string | null | undefined;
        }, {
            email?: string | null | undefined;
            user_id?: string | null | undefined;
        }>>>, {
            user_id: string | null;
            email: string;
        }, {
            email?: string | null | undefined;
            user_id?: string | null | undefined;
        } | null | undefined>;
        accountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        branchCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        salesforceAccountId: z.ZodNullable<z.ZodString>;
        industry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        isPartner: z.ZodOptional<z.ZodBoolean>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        website: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        contactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        loanOfficerUserId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        creditScore: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        isComplianceApproved: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        bankName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        iban: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        swift: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        bankAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        updatedByUserId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ibfCreditLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rbfCreditLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        creditLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        utilizedCredit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        partnerCompanyIdentifier: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        incorporationCountry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        incorporationDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        companySourceType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        companyType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nextReviewDate: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
        createdAt: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
        nextComplianceReviewData: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
        nextComplianceReviewDate: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
        _links: z.ZodOptional<z.ZodObject<{
            getCompany: z.ZodOptional<z.ZodObject<{
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                href: string;
            }, {
                href: string;
            }>>;
            salesforce: z.ZodOptional<z.ZodObject<{
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
            salesforce?: {
                href: string;
            } | undefined;
        }, {
            getCompany?: {
                href: string;
            } | undefined;
            salesforce?: {
                href: string;
            } | undefined;
        }>>;
    }>, "_links">, "strip", z.ZodTypeAny, {
        companyIdentifier: string;
        currency: import("../../generated/data-contracts").CurrencyEnum;
        companyLegalName: string;
        loanOfficerUser: {
            user_id: string | null;
            email: string;
        };
        salesforceAccountId: string | null;
        email?: string | null | undefined;
        phone?: string | null | undefined;
        incorporationDate?: string | null | undefined;
        companyType?: string | null | undefined;
        industry?: string | null | undefined;
        isPartner?: boolean | undefined;
        website?: string | null | undefined;
        contactName?: string | null | undefined;
        loanOfficerUserId?: string | null | undefined;
        ibfCreditLimit?: number | null | undefined;
        rbfCreditLimit?: number | null | undefined;
        creditLimit?: number | null | undefined;
        creditScore?: number | null | undefined;
        nextReviewDate?: string | null | undefined;
        isComplianceApproved?: boolean | null | undefined;
        nextComplianceReviewDate?: string | null | undefined;
        bankName?: string | null | undefined;
        iban?: string | null | undefined;
        swift?: string | null | undefined;
        bankAddress?: string | null | undefined;
        createdAt?: string | null | undefined;
        updatedAt?: string | null | undefined;
        updatedByUserId?: string | null | undefined;
        branchCode?: string | null | undefined;
        accountNumber?: string | null | undefined;
        companySourceType?: string | null | undefined;
        partnerCompanyIdentifier?: string | null | undefined;
        incorporationCountry?: string | null | undefined;
        utilizedCredit?: number | null | undefined;
        nextComplianceReviewData?: string | null | undefined;
    }, {
        companyIdentifier: string;
        currency: import("../../generated/data-contracts").CurrencyEnum;
        companyLegalName: string;
        salesforceAccountId: string | null;
        email?: string | null | undefined;
        phone?: string | null | undefined;
        incorporationDate?: string | null | undefined;
        companyType?: string | null | undefined;
        industry?: string | null | undefined;
        isPartner?: boolean | undefined;
        website?: string | null | undefined;
        contactName?: string | null | undefined;
        loanOfficerUserId?: string | null | undefined;
        ibfCreditLimit?: number | null | undefined;
        rbfCreditLimit?: number | null | undefined;
        creditLimit?: number | null | undefined;
        creditScore?: number | null | undefined;
        nextReviewDate?: unknown;
        isComplianceApproved?: boolean | null | undefined;
        nextComplianceReviewDate?: unknown;
        bankName?: string | null | undefined;
        iban?: string | null | undefined;
        swift?: string | null | undefined;
        bankAddress?: string | null | undefined;
        createdAt?: unknown;
        updatedAt?: unknown;
        updatedByUserId?: string | null | undefined;
        branchCode?: string | null | undefined;
        accountNumber?: string | null | undefined;
        companySourceType?: string | null | undefined;
        partnerCompanyIdentifier?: string | null | undefined;
        incorporationCountry?: string | null | undefined;
        utilizedCredit?: number | null | undefined;
        loanOfficerUser?: {
            email?: string | null | undefined;
            user_id?: string | null | undefined;
        } | null | undefined;
        nextComplianceReviewData?: unknown;
    }>>>>;
}>, "strip", z.ZodTypeAny, {
    companyIdentifier: string;
    currency: import("../../generated/data-contracts").CurrencyEnum;
    companyLegalName: string;
    loanOfficerUser: {
        user_id: string | null;
        email: string;
    };
    salesforceAccountId: string | null;
    email?: string | null | undefined;
    phone?: string | null | undefined;
    incorporationDate?: string | null | undefined;
    companyType?: string | null | undefined;
    industry?: string | null | undefined;
    isPartner?: boolean | undefined;
    partnerCompany?: {
        companyIdentifier: string;
        currency: import("../../generated/data-contracts").CurrencyEnum;
        companyLegalName: string;
        loanOfficerUser: {
            user_id: string | null;
            email: string;
        };
        salesforceAccountId: string | null;
        email?: string | null | undefined;
        phone?: string | null | undefined;
        incorporationDate?: string | null | undefined;
        companyType?: string | null | undefined;
        industry?: string | null | undefined;
        isPartner?: boolean | undefined;
        website?: string | null | undefined;
        contactName?: string | null | undefined;
        loanOfficerUserId?: string | null | undefined;
        ibfCreditLimit?: number | null | undefined;
        rbfCreditLimit?: number | null | undefined;
        creditLimit?: number | null | undefined;
        creditScore?: number | null | undefined;
        nextReviewDate?: string | null | undefined;
        isComplianceApproved?: boolean | null | undefined;
        nextComplianceReviewDate?: string | null | undefined;
        bankName?: string | null | undefined;
        iban?: string | null | undefined;
        swift?: string | null | undefined;
        bankAddress?: string | null | undefined;
        createdAt?: string | null | undefined;
        updatedAt?: string | null | undefined;
        updatedByUserId?: string | null | undefined;
        branchCode?: string | null | undefined;
        accountNumber?: string | null | undefined;
        companySourceType?: string | null | undefined;
        partnerCompanyIdentifier?: string | null | undefined;
        incorporationCountry?: string | null | undefined;
        utilizedCredit?: number | null | undefined;
        nextComplianceReviewData?: string | null | undefined;
    } | null | undefined;
    website?: string | null | undefined;
    contactName?: string | null | undefined;
    loanOfficerUserId?: string | null | undefined;
    ibfCreditLimit?: number | null | undefined;
    rbfCreditLimit?: number | null | undefined;
    creditLimit?: number | null | undefined;
    creditScore?: number | null | undefined;
    nextReviewDate?: string | null | undefined;
    isComplianceApproved?: boolean | null | undefined;
    nextComplianceReviewDate?: string | null | undefined;
    bankName?: string | null | undefined;
    iban?: string | null | undefined;
    swift?: string | null | undefined;
    bankAddress?: string | null | undefined;
    createdAt?: string | null | undefined;
    updatedAt?: string | null | undefined;
    updatedByUserId?: string | null | undefined;
    _links?: {
        getCompany?: {
            href: string;
        } | undefined;
        salesforce?: {
            href: string;
        } | undefined;
    } | undefined;
    branchCode?: string | null | undefined;
    accountNumber?: string | null | undefined;
    companySourceType?: string | null | undefined;
    partnerCompanyIdentifier?: string | null | undefined;
    incorporationCountry?: string | null | undefined;
    utilizedCredit?: number | null | undefined;
    nextComplianceReviewData?: string | null | undefined;
}, {
    companyIdentifier: string;
    currency: import("../../generated/data-contracts").CurrencyEnum;
    companyLegalName: string;
    salesforceAccountId: string | null;
    email?: string | null | undefined;
    phone?: string | null | undefined;
    incorporationDate?: string | null | undefined;
    companyType?: string | null | undefined;
    industry?: string | null | undefined;
    isPartner?: boolean | undefined;
    partnerCompany?: {
        companyIdentifier: string;
        currency: import("../../generated/data-contracts").CurrencyEnum;
        companyLegalName: string;
        salesforceAccountId: string | null;
        email?: string | null | undefined;
        phone?: string | null | undefined;
        incorporationDate?: string | null | undefined;
        companyType?: string | null | undefined;
        industry?: string | null | undefined;
        isPartner?: boolean | undefined;
        website?: string | null | undefined;
        contactName?: string | null | undefined;
        loanOfficerUserId?: string | null | undefined;
        ibfCreditLimit?: number | null | undefined;
        rbfCreditLimit?: number | null | undefined;
        creditLimit?: number | null | undefined;
        creditScore?: number | null | undefined;
        nextReviewDate?: unknown;
        isComplianceApproved?: boolean | null | undefined;
        nextComplianceReviewDate?: unknown;
        bankName?: string | null | undefined;
        iban?: string | null | undefined;
        swift?: string | null | undefined;
        bankAddress?: string | null | undefined;
        createdAt?: unknown;
        updatedAt?: unknown;
        updatedByUserId?: string | null | undefined;
        branchCode?: string | null | undefined;
        accountNumber?: string | null | undefined;
        companySourceType?: string | null | undefined;
        partnerCompanyIdentifier?: string | null | undefined;
        incorporationCountry?: string | null | undefined;
        utilizedCredit?: number | null | undefined;
        loanOfficerUser?: {
            email?: string | null | undefined;
            user_id?: string | null | undefined;
        } | null | undefined;
        nextComplianceReviewData?: unknown;
    } | null | undefined;
    website?: string | null | undefined;
    contactName?: string | null | undefined;
    loanOfficerUserId?: string | null | undefined;
    ibfCreditLimit?: number | null | undefined;
    rbfCreditLimit?: number | null | undefined;
    creditLimit?: number | null | undefined;
    creditScore?: number | null | undefined;
    nextReviewDate?: unknown;
    isComplianceApproved?: boolean | null | undefined;
    nextComplianceReviewDate?: unknown;
    bankName?: string | null | undefined;
    iban?: string | null | undefined;
    swift?: string | null | undefined;
    bankAddress?: string | null | undefined;
    createdAt?: unknown;
    updatedAt?: unknown;
    updatedByUserId?: string | null | undefined;
    _links?: {
        getCompany?: {
            href: string;
        } | undefined;
        salesforce?: {
            href: string;
        } | undefined;
    } | undefined;
    branchCode?: string | null | undefined;
    accountNumber?: string | null | undefined;
    companySourceType?: string | null | undefined;
    partnerCompanyIdentifier?: string | null | undefined;
    incorporationCountry?: string | null | undefined;
    utilizedCredit?: number | null | undefined;
    loanOfficerUser?: {
        email?: string | null | undefined;
        user_id?: string | null | undefined;
    } | null | undefined;
    nextComplianceReviewData?: unknown;
}>;
export declare const CompaniesSchemaResponse: z.ZodObject<z.objectUtil.extendShape<{
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
    companies: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<Pick<{
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
    }, "_links">, {
        companyIdentifier: z.ZodString;
        companyLegalName: z.ZodString;
        currency: z.ZodNativeEnum<typeof import("../../generated/data-contracts").CurrencyEnum>;
        loanOfficerUser: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodObject<{
            user_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            email: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string, string | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            email: string;
            user_id?: string | null | undefined;
        }, {
            email?: string | null | undefined;
            user_id?: string | null | undefined;
        }>>>, {
            user_id: string | null;
            email: string;
        }, {
            email?: string | null | undefined;
            user_id?: string | null | undefined;
        } | null | undefined>;
        accountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        branchCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        salesforceAccountId: z.ZodNullable<z.ZodString>;
        industry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        isPartner: z.ZodOptional<z.ZodBoolean>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        website: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        contactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        loanOfficerUserId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        creditScore: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        isComplianceApproved: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        bankName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        iban: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        swift: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        bankAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        updatedByUserId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        ibfCreditLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        rbfCreditLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        creditLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        utilizedCredit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        partnerCompanyIdentifier: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        incorporationCountry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        incorporationDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        companySourceType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        companyType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nextReviewDate: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
        createdAt: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
        nextComplianceReviewData: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
        nextComplianceReviewDate: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
        _links: z.ZodOptional<z.ZodObject<{
            getCompany: z.ZodOptional<z.ZodObject<{
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                href: string;
            }, {
                href: string;
            }>>;
            salesforce: z.ZodOptional<z.ZodObject<{
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
            salesforce?: {
                href: string;
            } | undefined;
        }, {
            getCompany?: {
                href: string;
            } | undefined;
            salesforce?: {
                href: string;
            } | undefined;
        }>>;
    }>, {
        partnerCompany: z.ZodOptional<z.ZodNullable<z.ZodLazy<z.ZodObject<Omit<z.objectUtil.extendShape<Pick<{
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
        }, "_links">, {
            companyIdentifier: z.ZodString;
            companyLegalName: z.ZodString;
            currency: z.ZodNativeEnum<typeof import("../../generated/data-contracts").CurrencyEnum>;
            loanOfficerUser: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodObject<{
                user_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                email: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string, string | null | undefined>;
            }, "strip", z.ZodTypeAny, {
                email: string;
                user_id?: string | null | undefined;
            }, {
                email?: string | null | undefined;
                user_id?: string | null | undefined;
            }>>>, {
                user_id: string | null;
                email: string;
            }, {
                email?: string | null | undefined;
                user_id?: string | null | undefined;
            } | null | undefined>;
            accountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            branchCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            salesforceAccountId: z.ZodNullable<z.ZodString>;
            industry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            isPartner: z.ZodOptional<z.ZodBoolean>;
            email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            website: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            contactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            loanOfficerUserId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            creditScore: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            isComplianceApproved: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            bankName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            iban: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            swift: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            bankAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            updatedByUserId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            ibfCreditLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            rbfCreditLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            creditLimit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            utilizedCredit: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            partnerCompanyIdentifier: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            incorporationCountry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            incorporationDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            companySourceType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            companyType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            nextReviewDate: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
            createdAt: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
            nextComplianceReviewData: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
            nextComplianceReviewDate: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
            _links: z.ZodOptional<z.ZodObject<{
                getCompany: z.ZodOptional<z.ZodObject<{
                    href: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    href: string;
                }, {
                    href: string;
                }>>;
                salesforce: z.ZodOptional<z.ZodObject<{
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
                salesforce?: {
                    href: string;
                } | undefined;
            }, {
                getCompany?: {
                    href: string;
                } | undefined;
                salesforce?: {
                    href: string;
                } | undefined;
            }>>;
        }>, "_links">, "strip", z.ZodTypeAny, {
            companyIdentifier: string;
            currency: import("../../generated/data-contracts").CurrencyEnum;
            companyLegalName: string;
            loanOfficerUser: {
                user_id: string | null;
                email: string;
            };
            salesforceAccountId: string | null;
            email?: string | null | undefined;
            phone?: string | null | undefined;
            incorporationDate?: string | null | undefined;
            companyType?: string | null | undefined;
            industry?: string | null | undefined;
            isPartner?: boolean | undefined;
            website?: string | null | undefined;
            contactName?: string | null | undefined;
            loanOfficerUserId?: string | null | undefined;
            ibfCreditLimit?: number | null | undefined;
            rbfCreditLimit?: number | null | undefined;
            creditLimit?: number | null | undefined;
            creditScore?: number | null | undefined;
            nextReviewDate?: string | null | undefined;
            isComplianceApproved?: boolean | null | undefined;
            nextComplianceReviewDate?: string | null | undefined;
            bankName?: string | null | undefined;
            iban?: string | null | undefined;
            swift?: string | null | undefined;
            bankAddress?: string | null | undefined;
            createdAt?: string | null | undefined;
            updatedAt?: string | null | undefined;
            updatedByUserId?: string | null | undefined;
            branchCode?: string | null | undefined;
            accountNumber?: string | null | undefined;
            companySourceType?: string | null | undefined;
            partnerCompanyIdentifier?: string | null | undefined;
            incorporationCountry?: string | null | undefined;
            utilizedCredit?: number | null | undefined;
            nextComplianceReviewData?: string | null | undefined;
        }, {
            companyIdentifier: string;
            currency: import("../../generated/data-contracts").CurrencyEnum;
            companyLegalName: string;
            salesforceAccountId: string | null;
            email?: string | null | undefined;
            phone?: string | null | undefined;
            incorporationDate?: string | null | undefined;
            companyType?: string | null | undefined;
            industry?: string | null | undefined;
            isPartner?: boolean | undefined;
            website?: string | null | undefined;
            contactName?: string | null | undefined;
            loanOfficerUserId?: string | null | undefined;
            ibfCreditLimit?: number | null | undefined;
            rbfCreditLimit?: number | null | undefined;
            creditLimit?: number | null | undefined;
            creditScore?: number | null | undefined;
            nextReviewDate?: unknown;
            isComplianceApproved?: boolean | null | undefined;
            nextComplianceReviewDate?: unknown;
            bankName?: string | null | undefined;
            iban?: string | null | undefined;
            swift?: string | null | undefined;
            bankAddress?: string | null | undefined;
            createdAt?: unknown;
            updatedAt?: unknown;
            updatedByUserId?: string | null | undefined;
            branchCode?: string | null | undefined;
            accountNumber?: string | null | undefined;
            companySourceType?: string | null | undefined;
            partnerCompanyIdentifier?: string | null | undefined;
            incorporationCountry?: string | null | undefined;
            utilizedCredit?: number | null | undefined;
            loanOfficerUser?: {
                email?: string | null | undefined;
                user_id?: string | null | undefined;
            } | null | undefined;
            nextComplianceReviewData?: unknown;
        }>>>>;
    }>, "strip", z.ZodTypeAny, {
        companyIdentifier: string;
        currency: import("../../generated/data-contracts").CurrencyEnum;
        companyLegalName: string;
        loanOfficerUser: {
            user_id: string | null;
            email: string;
        };
        salesforceAccountId: string | null;
        email?: string | null | undefined;
        phone?: string | null | undefined;
        incorporationDate?: string | null | undefined;
        companyType?: string | null | undefined;
        industry?: string | null | undefined;
        isPartner?: boolean | undefined;
        partnerCompany?: {
            companyIdentifier: string;
            currency: import("../../generated/data-contracts").CurrencyEnum;
            companyLegalName: string;
            loanOfficerUser: {
                user_id: string | null;
                email: string;
            };
            salesforceAccountId: string | null;
            email?: string | null | undefined;
            phone?: string | null | undefined;
            incorporationDate?: string | null | undefined;
            companyType?: string | null | undefined;
            industry?: string | null | undefined;
            isPartner?: boolean | undefined;
            website?: string | null | undefined;
            contactName?: string | null | undefined;
            loanOfficerUserId?: string | null | undefined;
            ibfCreditLimit?: number | null | undefined;
            rbfCreditLimit?: number | null | undefined;
            creditLimit?: number | null | undefined;
            creditScore?: number | null | undefined;
            nextReviewDate?: string | null | undefined;
            isComplianceApproved?: boolean | null | undefined;
            nextComplianceReviewDate?: string | null | undefined;
            bankName?: string | null | undefined;
            iban?: string | null | undefined;
            swift?: string | null | undefined;
            bankAddress?: string | null | undefined;
            createdAt?: string | null | undefined;
            updatedAt?: string | null | undefined;
            updatedByUserId?: string | null | undefined;
            branchCode?: string | null | undefined;
            accountNumber?: string | null | undefined;
            companySourceType?: string | null | undefined;
            partnerCompanyIdentifier?: string | null | undefined;
            incorporationCountry?: string | null | undefined;
            utilizedCredit?: number | null | undefined;
            nextComplianceReviewData?: string | null | undefined;
        } | null | undefined;
        website?: string | null | undefined;
        contactName?: string | null | undefined;
        loanOfficerUserId?: string | null | undefined;
        ibfCreditLimit?: number | null | undefined;
        rbfCreditLimit?: number | null | undefined;
        creditLimit?: number | null | undefined;
        creditScore?: number | null | undefined;
        nextReviewDate?: string | null | undefined;
        isComplianceApproved?: boolean | null | undefined;
        nextComplianceReviewDate?: string | null | undefined;
        bankName?: string | null | undefined;
        iban?: string | null | undefined;
        swift?: string | null | undefined;
        bankAddress?: string | null | undefined;
        createdAt?: string | null | undefined;
        updatedAt?: string | null | undefined;
        updatedByUserId?: string | null | undefined;
        _links?: {
            getCompany?: {
                href: string;
            } | undefined;
            salesforce?: {
                href: string;
            } | undefined;
        } | undefined;
        branchCode?: string | null | undefined;
        accountNumber?: string | null | undefined;
        companySourceType?: string | null | undefined;
        partnerCompanyIdentifier?: string | null | undefined;
        incorporationCountry?: string | null | undefined;
        utilizedCredit?: number | null | undefined;
        nextComplianceReviewData?: string | null | undefined;
    }, {
        companyIdentifier: string;
        currency: import("../../generated/data-contracts").CurrencyEnum;
        companyLegalName: string;
        salesforceAccountId: string | null;
        email?: string | null | undefined;
        phone?: string | null | undefined;
        incorporationDate?: string | null | undefined;
        companyType?: string | null | undefined;
        industry?: string | null | undefined;
        isPartner?: boolean | undefined;
        partnerCompany?: {
            companyIdentifier: string;
            currency: import("../../generated/data-contracts").CurrencyEnum;
            companyLegalName: string;
            salesforceAccountId: string | null;
            email?: string | null | undefined;
            phone?: string | null | undefined;
            incorporationDate?: string | null | undefined;
            companyType?: string | null | undefined;
            industry?: string | null | undefined;
            isPartner?: boolean | undefined;
            website?: string | null | undefined;
            contactName?: string | null | undefined;
            loanOfficerUserId?: string | null | undefined;
            ibfCreditLimit?: number | null | undefined;
            rbfCreditLimit?: number | null | undefined;
            creditLimit?: number | null | undefined;
            creditScore?: number | null | undefined;
            nextReviewDate?: unknown;
            isComplianceApproved?: boolean | null | undefined;
            nextComplianceReviewDate?: unknown;
            bankName?: string | null | undefined;
            iban?: string | null | undefined;
            swift?: string | null | undefined;
            bankAddress?: string | null | undefined;
            createdAt?: unknown;
            updatedAt?: unknown;
            updatedByUserId?: string | null | undefined;
            branchCode?: string | null | undefined;
            accountNumber?: string | null | undefined;
            companySourceType?: string | null | undefined;
            partnerCompanyIdentifier?: string | null | undefined;
            incorporationCountry?: string | null | undefined;
            utilizedCredit?: number | null | undefined;
            loanOfficerUser?: {
                email?: string | null | undefined;
                user_id?: string | null | undefined;
            } | null | undefined;
            nextComplianceReviewData?: unknown;
        } | null | undefined;
        website?: string | null | undefined;
        contactName?: string | null | undefined;
        loanOfficerUserId?: string | null | undefined;
        ibfCreditLimit?: number | null | undefined;
        rbfCreditLimit?: number | null | undefined;
        creditLimit?: number | null | undefined;
        creditScore?: number | null | undefined;
        nextReviewDate?: unknown;
        isComplianceApproved?: boolean | null | undefined;
        nextComplianceReviewDate?: unknown;
        bankName?: string | null | undefined;
        iban?: string | null | undefined;
        swift?: string | null | undefined;
        bankAddress?: string | null | undefined;
        createdAt?: unknown;
        updatedAt?: unknown;
        updatedByUserId?: string | null | undefined;
        _links?: {
            getCompany?: {
                href: string;
            } | undefined;
            salesforce?: {
                href: string;
            } | undefined;
        } | undefined;
        branchCode?: string | null | undefined;
        accountNumber?: string | null | undefined;
        companySourceType?: string | null | undefined;
        partnerCompanyIdentifier?: string | null | undefined;
        incorporationCountry?: string | null | undefined;
        utilizedCredit?: number | null | undefined;
        loanOfficerUser?: {
            email?: string | null | undefined;
            user_id?: string | null | undefined;
        } | null | undefined;
        nextComplianceReviewData?: unknown;
    }>, "many">;
    _links: z.ZodObject<{
        getCompanies: z.ZodOptional<z.ZodObject<{
            href: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            href: string;
        }, {
            href: string;
        }>>;
        createCompany: z.ZodOptional<z.ZodObject<{
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
        getLoans: z.ZodOptional<z.ZodObject<{
            href: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            href: string;
        }, {
            href: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        createCompany?: {
            href: string;
        } | undefined;
        getCompanies?: {
            href: string;
        } | undefined;
        createLoan?: {
            href: string;
        } | undefined;
        getLoans?: {
            href: string;
        } | undefined;
    }, {
        createCompany?: {
            href: string;
        } | undefined;
        getCompanies?: {
            href: string;
        } | undefined;
        createLoan?: {
            href: string;
        } | undefined;
        getLoans?: {
            href: string;
        } | undefined;
    }>;
    _embedded: z.ZodObject<{
        sortFields: z.ZodArray<z.ZodEnum<["createdAt", "updatedAt", "companyType", "companySourceType", "loanOfficerUserId", "companyIdentifier", "ibfCreditLimit", "rbfCreditLimit", "creditLimit", "nextReviewDate", "isComplianceApproved", "nextComplianceReviewDate"]>, "many">;
        includeValues: z.ZodArray<z.ZodEnum<["incorporationDate", "companyType", "industry", "companySourceType", "partnerCompanyIdentifier", "email", "phone", "website", "isPartner", "contactName", "loanOfficerUserId", "ibfCreditLimit", "rbfCreditLimit", "creditLimit", "creditScore", "nextReviewDate", "isComplianceApproved", "nextComplianceReviewDate", "bankName", "iban", "swift", "bankAddress", "createdAt", "updatedAt", "updatedByUserId", "incorporationCountry", "currency", "partnerCompany", "utilizedCredit"]>, "many">;
    }, "strip", z.ZodTypeAny, {
        sortFields: ("companyType" | "loanOfficerUserId" | "ibfCreditLimit" | "rbfCreditLimit" | "creditLimit" | "nextReviewDate" | "isComplianceApproved" | "nextComplianceReviewDate" | "createdAt" | "updatedAt" | "companyIdentifier" | "companySourceType")[];
        includeValues: ("email" | "phone" | "incorporationDate" | "companyType" | "industry" | "isPartner" | "partnerCompany" | "website" | "contactName" | "loanOfficerUserId" | "ibfCreditLimit" | "rbfCreditLimit" | "creditLimit" | "creditScore" | "nextReviewDate" | "isComplianceApproved" | "nextComplianceReviewDate" | "bankName" | "iban" | "swift" | "bankAddress" | "createdAt" | "updatedAt" | "updatedByUserId" | "currency" | "companySourceType" | "partnerCompanyIdentifier" | "incorporationCountry" | "utilizedCredit")[];
    }, {
        sortFields: ("companyType" | "loanOfficerUserId" | "ibfCreditLimit" | "rbfCreditLimit" | "creditLimit" | "nextReviewDate" | "isComplianceApproved" | "nextComplianceReviewDate" | "createdAt" | "updatedAt" | "companyIdentifier" | "companySourceType")[];
        includeValues: ("email" | "phone" | "incorporationDate" | "companyType" | "industry" | "isPartner" | "partnerCompany" | "website" | "contactName" | "loanOfficerUserId" | "ibfCreditLimit" | "rbfCreditLimit" | "creditLimit" | "creditScore" | "nextReviewDate" | "isComplianceApproved" | "nextComplianceReviewDate" | "bankName" | "iban" | "swift" | "bankAddress" | "createdAt" | "updatedAt" | "updatedByUserId" | "currency" | "companySourceType" | "partnerCompanyIdentifier" | "incorporationCountry" | "utilizedCredit")[];
    }>;
}>, "strip", z.ZodTypeAny, {
    _links: {
        createCompany?: {
            href: string;
        } | undefined;
        getCompanies?: {
            href: string;
        } | undefined;
        createLoan?: {
            href: string;
        } | undefined;
        getLoans?: {
            href: string;
        } | undefined;
    };
    _embedded: {
        sortFields: ("companyType" | "loanOfficerUserId" | "ibfCreditLimit" | "rbfCreditLimit" | "creditLimit" | "nextReviewDate" | "isComplianceApproved" | "nextComplianceReviewDate" | "createdAt" | "updatedAt" | "companyIdentifier" | "companySourceType")[];
        includeValues: ("email" | "phone" | "incorporationDate" | "companyType" | "industry" | "isPartner" | "partnerCompany" | "website" | "contactName" | "loanOfficerUserId" | "ibfCreditLimit" | "rbfCreditLimit" | "creditLimit" | "creditScore" | "nextReviewDate" | "isComplianceApproved" | "nextComplianceReviewDate" | "bankName" | "iban" | "swift" | "bankAddress" | "createdAt" | "updatedAt" | "updatedByUserId" | "currency" | "companySourceType" | "partnerCompanyIdentifier" | "incorporationCountry" | "utilizedCredit")[];
    };
    metaData: {
        limit: number;
        page: number;
        itemsCount: number;
    };
    companies: {
        companyIdentifier: string;
        currency: import("../../generated/data-contracts").CurrencyEnum;
        companyLegalName: string;
        loanOfficerUser: {
            user_id: string | null;
            email: string;
        };
        salesforceAccountId: string | null;
        email?: string | null | undefined;
        phone?: string | null | undefined;
        incorporationDate?: string | null | undefined;
        companyType?: string | null | undefined;
        industry?: string | null | undefined;
        isPartner?: boolean | undefined;
        partnerCompany?: {
            companyIdentifier: string;
            currency: import("../../generated/data-contracts").CurrencyEnum;
            companyLegalName: string;
            loanOfficerUser: {
                user_id: string | null;
                email: string;
            };
            salesforceAccountId: string | null;
            email?: string | null | undefined;
            phone?: string | null | undefined;
            incorporationDate?: string | null | undefined;
            companyType?: string | null | undefined;
            industry?: string | null | undefined;
            isPartner?: boolean | undefined;
            website?: string | null | undefined;
            contactName?: string | null | undefined;
            loanOfficerUserId?: string | null | undefined;
            ibfCreditLimit?: number | null | undefined;
            rbfCreditLimit?: number | null | undefined;
            creditLimit?: number | null | undefined;
            creditScore?: number | null | undefined;
            nextReviewDate?: string | null | undefined;
            isComplianceApproved?: boolean | null | undefined;
            nextComplianceReviewDate?: string | null | undefined;
            bankName?: string | null | undefined;
            iban?: string | null | undefined;
            swift?: string | null | undefined;
            bankAddress?: string | null | undefined;
            createdAt?: string | null | undefined;
            updatedAt?: string | null | undefined;
            updatedByUserId?: string | null | undefined;
            branchCode?: string | null | undefined;
            accountNumber?: string | null | undefined;
            companySourceType?: string | null | undefined;
            partnerCompanyIdentifier?: string | null | undefined;
            incorporationCountry?: string | null | undefined;
            utilizedCredit?: number | null | undefined;
            nextComplianceReviewData?: string | null | undefined;
        } | null | undefined;
        website?: string | null | undefined;
        contactName?: string | null | undefined;
        loanOfficerUserId?: string | null | undefined;
        ibfCreditLimit?: number | null | undefined;
        rbfCreditLimit?: number | null | undefined;
        creditLimit?: number | null | undefined;
        creditScore?: number | null | undefined;
        nextReviewDate?: string | null | undefined;
        isComplianceApproved?: boolean | null | undefined;
        nextComplianceReviewDate?: string | null | undefined;
        bankName?: string | null | undefined;
        iban?: string | null | undefined;
        swift?: string | null | undefined;
        bankAddress?: string | null | undefined;
        createdAt?: string | null | undefined;
        updatedAt?: string | null | undefined;
        updatedByUserId?: string | null | undefined;
        _links?: {
            getCompany?: {
                href: string;
            } | undefined;
            salesforce?: {
                href: string;
            } | undefined;
        } | undefined;
        branchCode?: string | null | undefined;
        accountNumber?: string | null | undefined;
        companySourceType?: string | null | undefined;
        partnerCompanyIdentifier?: string | null | undefined;
        incorporationCountry?: string | null | undefined;
        utilizedCredit?: number | null | undefined;
        nextComplianceReviewData?: string | null | undefined;
    }[];
}, {
    _links: {
        createCompany?: {
            href: string;
        } | undefined;
        getCompanies?: {
            href: string;
        } | undefined;
        createLoan?: {
            href: string;
        } | undefined;
        getLoans?: {
            href: string;
        } | undefined;
    };
    _embedded: {
        sortFields: ("companyType" | "loanOfficerUserId" | "ibfCreditLimit" | "rbfCreditLimit" | "creditLimit" | "nextReviewDate" | "isComplianceApproved" | "nextComplianceReviewDate" | "createdAt" | "updatedAt" | "companyIdentifier" | "companySourceType")[];
        includeValues: ("email" | "phone" | "incorporationDate" | "companyType" | "industry" | "isPartner" | "partnerCompany" | "website" | "contactName" | "loanOfficerUserId" | "ibfCreditLimit" | "rbfCreditLimit" | "creditLimit" | "creditScore" | "nextReviewDate" | "isComplianceApproved" | "nextComplianceReviewDate" | "bankName" | "iban" | "swift" | "bankAddress" | "createdAt" | "updatedAt" | "updatedByUserId" | "currency" | "companySourceType" | "partnerCompanyIdentifier" | "incorporationCountry" | "utilizedCredit")[];
    };
    metaData: {
        limit: number;
        page: number;
        itemsCount: number;
    };
    companies: {
        companyIdentifier: string;
        currency: import("../../generated/data-contracts").CurrencyEnum;
        companyLegalName: string;
        salesforceAccountId: string | null;
        email?: string | null | undefined;
        phone?: string | null | undefined;
        incorporationDate?: string | null | undefined;
        companyType?: string | null | undefined;
        industry?: string | null | undefined;
        isPartner?: boolean | undefined;
        partnerCompany?: {
            companyIdentifier: string;
            currency: import("../../generated/data-contracts").CurrencyEnum;
            companyLegalName: string;
            salesforceAccountId: string | null;
            email?: string | null | undefined;
            phone?: string | null | undefined;
            incorporationDate?: string | null | undefined;
            companyType?: string | null | undefined;
            industry?: string | null | undefined;
            isPartner?: boolean | undefined;
            website?: string | null | undefined;
            contactName?: string | null | undefined;
            loanOfficerUserId?: string | null | undefined;
            ibfCreditLimit?: number | null | undefined;
            rbfCreditLimit?: number | null | undefined;
            creditLimit?: number | null | undefined;
            creditScore?: number | null | undefined;
            nextReviewDate?: unknown;
            isComplianceApproved?: boolean | null | undefined;
            nextComplianceReviewDate?: unknown;
            bankName?: string | null | undefined;
            iban?: string | null | undefined;
            swift?: string | null | undefined;
            bankAddress?: string | null | undefined;
            createdAt?: unknown;
            updatedAt?: unknown;
            updatedByUserId?: string | null | undefined;
            branchCode?: string | null | undefined;
            accountNumber?: string | null | undefined;
            companySourceType?: string | null | undefined;
            partnerCompanyIdentifier?: string | null | undefined;
            incorporationCountry?: string | null | undefined;
            utilizedCredit?: number | null | undefined;
            loanOfficerUser?: {
                email?: string | null | undefined;
                user_id?: string | null | undefined;
            } | null | undefined;
            nextComplianceReviewData?: unknown;
        } | null | undefined;
        website?: string | null | undefined;
        contactName?: string | null | undefined;
        loanOfficerUserId?: string | null | undefined;
        ibfCreditLimit?: number | null | undefined;
        rbfCreditLimit?: number | null | undefined;
        creditLimit?: number | null | undefined;
        creditScore?: number | null | undefined;
        nextReviewDate?: unknown;
        isComplianceApproved?: boolean | null | undefined;
        nextComplianceReviewDate?: unknown;
        bankName?: string | null | undefined;
        iban?: string | null | undefined;
        swift?: string | null | undefined;
        bankAddress?: string | null | undefined;
        createdAt?: unknown;
        updatedAt?: unknown;
        updatedByUserId?: string | null | undefined;
        _links?: {
            getCompany?: {
                href: string;
            } | undefined;
            salesforce?: {
                href: string;
            } | undefined;
        } | undefined;
        branchCode?: string | null | undefined;
        accountNumber?: string | null | undefined;
        companySourceType?: string | null | undefined;
        partnerCompanyIdentifier?: string | null | undefined;
        incorporationCountry?: string | null | undefined;
        utilizedCredit?: number | null | undefined;
        loanOfficerUser?: {
            email?: string | null | undefined;
            user_id?: string | null | undefined;
        } | null | undefined;
        nextComplianceReviewData?: unknown;
    }[];
}>;
//# sourceMappingURL=Companies.schema.d.ts.map