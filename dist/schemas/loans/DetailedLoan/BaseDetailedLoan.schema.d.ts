import { z } from 'zod';
export declare const BaseDetailedLoanSchema: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<Pick<{
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
    loanId: z.ZodString;
    companyIdentifier: z.ZodDefault<z.ZodString>;
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
    currency: z.ZodDefault<z.ZodNativeEnum<typeof import("../../../generated/data-contracts").CurrencyEnum>>;
    loanStatus: z.ZodDefault<z.ZodNativeEnum<{
        Canceled: string;
        DefaultProvisioning: string;
        Pending: import("../../../generated/data-contracts").LoanResponseLoanStatusEnum.Pending;
        Approved: import("../../../generated/data-contracts").LoanResponseLoanStatusEnum.Approved;
        Active: import("../../../generated/data-contracts").LoanResponseLoanStatusEnum.Active;
        Late: import("../../../generated/data-contracts").LoanResponseLoanStatusEnum.Late;
        Overdue: import("../../../generated/data-contracts").LoanResponseLoanStatusEnum.Overdue;
        DefaultReview: import("../../../generated/data-contracts").LoanResponseLoanStatusEnum.DefaultReview;
        Restructured: import("../../../generated/data-contracts").LoanResponseLoanStatusEnum.Restructured;
        DefaultProvision: import("../../../generated/data-contracts").LoanResponseLoanStatusEnum.DefaultProvision;
        WrittenOff: import("../../../generated/data-contracts").LoanResponseLoanStatusEnum.WrittenOff;
        PaidOff: import("../../../generated/data-contracts").LoanResponseLoanStatusEnum.PaidOff;
    }>>;
    salesforceOpportunityId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    loanOfficerUserId: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    gracePeriodDays: z.ZodDefault<z.ZodNumber>;
    penaltyType: z.ZodDefault<z.ZodEffects<z.ZodNullable<z.ZodNativeEnum<{
        FIXED: string;
        VARIABLE: string;
    }>>, string | undefined, string | null>>;
    penaltyPercentage: z.ZodDefault<z.ZodNumber>;
    disbursementDate: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>;
    maturityDate: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    payoffDate: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    loanApprovalDate: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    timesDelinquent: z.ZodDefault<z.ZodNumber>;
    totalDisbursedAmount: z.ZodDefault<z.ZodNumber>;
    paidPrincipalAmount: z.ZodDefault<z.ZodNumber>;
    paidInterestAmount: z.ZodDefault<z.ZodNumber>;
    totalPenaltyAmount: z.ZodDefault<z.ZodNumber>;
    paidPenaltiesAmount: z.ZodDefault<z.ZodNumber>;
    totalOutstandingAmount: z.ZodDefault<z.ZodNumber>;
    createdAt: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    riskFlag: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    totalOverdueDays: z.ZodDefault<z.ZodNumber>;
    originationFee: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    invoicesDiscountRate: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    invoicesAmount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    loanType: z.ZodDefault<z.ZodNativeEnum<typeof import("../../../generated/data-contracts").CalculateLoanInterestLoanTypeEnum>>;
    principalAmount: z.ZodDefault<z.ZodNumber>;
    adjustedInterest: z.ZodDefault<z.ZodNumber>;
    netPayableTotal: z.ZodDefault<z.ZodNumber>;
    interestAmount: z.ZodDefault<z.ZodNumber>;
    repaymentAmount: z.ZodDefault<z.ZodNumber>;
    delinquentAmount: z.ZodDefault<z.ZodNumber>;
    totalExpensesAmount: z.ZodDefault<z.ZodNumber>;
    paidTotalAmount: z.ZodDefault<z.ZodNumber>;
    netPayablePrincipal: z.ZodDefault<z.ZodNumber>;
    netPayableInterest: z.ZodDefault<z.ZodNumber>;
    netPayablePenalties: z.ZodDefault<z.ZodNumber>;
    loanRate: z.ZodDefault<z.ZodNumber>;
    penaltyPercent: z.ZodDefault<z.ZodNumber>;
    annualRate: z.ZodDefault<z.ZodNumber>;
    monthlyRate: z.ZodDefault<z.ZodNumber>;
    dailyRate: z.ZodDefault<z.ZodNumber>;
    name: z.ZodDefault<z.ZodEffects<z.ZodNullable<z.ZodString>, string, string | null>>;
    productVersion: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    principalDisbursedAmount: z.ZodDefault<z.ZodNumber>;
    writtenOffPrincipalAmount: z.ZodDefault<z.ZodNumber>;
    accruedInterest: z.ZodDefault<z.ZodNumber>;
    adjustedInterestAmount: z.ZodDefault<z.ZodNumber>;
    currentExpectedInterest: z.ZodDefault<z.ZodNumber>;
    allocatedDiscountInterestAmount: z.ZodDefault<z.ZodNumber>;
    writtenOffInterestAmount: z.ZodDefault<z.ZodNumber>;
    waivedPenaltyAmount: z.ZodDefault<z.ZodNumber>;
    waivedAmount: z.ZodDefault<z.ZodNumber>;
    totalChargesAmount: z.ZodDefault<z.ZodNumber>;
    totalWrittenOffAmount: z.ZodDefault<z.ZodNumber>;
    totalOffsetAmount: z.ZodDefault<z.ZodNumber>;
    adjustedtInterest: z.ZodDefault<z.ZodNumber>;
    tenor: z.ZodDefault<z.ZodString>;
    collectionMethod: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    disbursementMethod: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    currentPaymentNumber: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    numberOfPayments: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    disbursedOffsetAmount: z.ZodDefault<z.ZodNumber>;
    originationFeeAmount: z.ZodDefault<z.ZodNumber>;
    nextPaymentDate: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    startPenaltyDate: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    startLatePeriodDate: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    firstInstalmentDate: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    startLoanDate: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    numberOfInstalments: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    daysTillNextPayment: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    canceledAt: z.ZodDefault<z.ZodNullable<z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>>>;
    cancelNote: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    interestAllocationType: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    repaymentType: z.ZodDefault<z.ZodString>;
    restructuredAmount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    wavedAmount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    writtenOffAmount: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    _links: z.ZodDefault<z.ZodOptional<z.ZodObject<{
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
        createLoan: z.ZodOptional<z.ZodObject<{
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
        addRepayments: z.ZodOptional<z.ZodObject<{
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
        createLoan?: {
            href: string;
        } | undefined;
        addRepayments?: {
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
        createLoan?: {
            href: string;
        } | undefined;
        addRepayments?: {
            href: string;
        } | undefined;
    }>>>;
}>, {
    company: z.ZodObject<Omit<z.objectUtil.extendShape<z.objectUtil.extendShape<Pick<{
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
        currency: z.ZodNativeEnum<typeof import("../../../generated/data-contracts").CurrencyEnum>;
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
            currency: z.ZodNativeEnum<typeof import("../../../generated/data-contracts").CurrencyEnum>;
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
            currency: import("../../../generated/data-contracts").CurrencyEnum;
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
            currency: import("../../../generated/data-contracts").CurrencyEnum;
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
    }>, "_links">, "strip", z.ZodTypeAny, {
        companyIdentifier: string;
        currency: import("../../../generated/data-contracts").CurrencyEnum;
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
            currency: import("../../../generated/data-contracts").CurrencyEnum;
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
        branchCode?: string | null | undefined;
        accountNumber?: string | null | undefined;
        companySourceType?: string | null | undefined;
        partnerCompanyIdentifier?: string | null | undefined;
        incorporationCountry?: string | null | undefined;
        utilizedCredit?: number | null | undefined;
        nextComplianceReviewData?: string | null | undefined;
    }, {
        companyIdentifier: string;
        currency: import("../../../generated/data-contracts").CurrencyEnum;
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
            currency: import("../../../generated/data-contracts").CurrencyEnum;
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
    companyIdentifier: z.ZodString;
    maxAllowableDisbursements: z.ZodDefault<z.ZodNumber>;
    _links: z.ZodDefault<z.ZodOptional<z.ZodObject<{
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
    }>>>;
}>, "strip", z.ZodTypeAny, {
    loanOfficerUserId: string | null;
    createdAt: string | null;
    companyIdentifier: string;
    loanType: import("../../../generated/data-contracts").CalculateLoanInterestLoanTypeEnum;
    gracePeriodDays: number;
    tenor: string;
    penaltyPercent: number;
    penaltyType: string;
    monthlyRate: number;
    loanStatus: string;
    disbursementDate: string | null;
    maturityDate: string | null;
    payoffDate: string | null;
    loanApprovalDate: string | null;
    timesDelinquent: number;
    principalAmount: number;
    interestAmount: number;
    totalDisbursedAmount: number;
    paidPrincipalAmount: number;
    paidInterestAmount: number;
    paidPenaltiesAmount: number;
    totalPenaltyAmount: number;
    salesforceOpportunityId: string | null;
    loanId: string;
    annualRate: number;
    cancelNote: string | null;
    company: {
        companyIdentifier: string;
        currency: import("../../../generated/data-contracts").CurrencyEnum;
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
            currency: import("../../../generated/data-contracts").CurrencyEnum;
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
        branchCode?: string | null | undefined;
        accountNumber?: string | null | undefined;
        companySourceType?: string | null | undefined;
        partnerCompanyIdentifier?: string | null | undefined;
        incorporationCountry?: string | null | undefined;
        utilizedCredit?: number | null | undefined;
        nextComplianceReviewData?: string | null | undefined;
    };
    currency: import("../../../generated/data-contracts").CurrencyEnum;
    dailyRate: number;
    delinquentAmount: number;
    loanRate: number;
    name: string;
    netPayableInterest: number;
    netPayablePenalties: number;
    netPayableTotal: number;
    nextPaymentDate: string | null;
    paidTotalAmount: number;
    productVersion: string | null;
    repaymentAmount: number;
    repaymentType: string;
    totalOutstandingAmount: number;
    daysTillNextPayment: number | null;
    interestAllocationType: string | null;
    invoicesAmount: number | null;
    invoicesDiscountRate: number | null;
    firstInstalmentDate: string | null;
    collectionMethod: string | null;
    _links: {
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
    };
    loanOfficerUser: {
        user_id: string | null;
        email: string;
    };
    totalChargesAmount: number;
    disbursementMethod: string | null;
    originationFee: number | null;
    accruedInterest: number;
    allocatedDiscountInterestAmount: number;
    canceledAt: string | null;
    adjustedInterestAmount: number;
    numberOfInstalments: number | null;
    netPayablePrincipal: number;
    startLoanDate: string | null;
    penaltyPercentage: number;
    riskFlag: string | null;
    totalOverdueDays: number;
    adjustedInterest: number;
    totalExpensesAmount: number;
    principalDisbursedAmount: number;
    writtenOffPrincipalAmount: number;
    currentExpectedInterest: number;
    writtenOffInterestAmount: number;
    waivedPenaltyAmount: number;
    waivedAmount: number;
    totalWrittenOffAmount: number;
    totalOffsetAmount: number;
    adjustedtInterest: number;
    currentPaymentNumber: number | null;
    numberOfPayments: number | null;
    disbursedOffsetAmount: number;
    originationFeeAmount: number;
    startPenaltyDate: string | null;
    startLatePeriodDate: string | null;
    restructuredAmount: number | null;
    wavedAmount: number | null;
    writtenOffAmount: number | null;
    maxAllowableDisbursements: number;
}, {
    companyIdentifier: string;
    loanId: string;
    company: {
        companyIdentifier: string;
        currency: import("../../../generated/data-contracts").CurrencyEnum;
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
            currency: import("../../../generated/data-contracts").CurrencyEnum;
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
    };
    loanOfficerUserId?: string | null | undefined;
    createdAt?: unknown;
    loanType?: import("../../../generated/data-contracts").CalculateLoanInterestLoanTypeEnum | undefined;
    gracePeriodDays?: number | undefined;
    tenor?: string | undefined;
    penaltyPercent?: number | undefined;
    penaltyType?: string | null | undefined;
    monthlyRate?: number | undefined;
    loanStatus?: string | undefined;
    disbursementDate?: unknown;
    maturityDate?: unknown;
    payoffDate?: unknown;
    loanApprovalDate?: unknown;
    timesDelinquent?: number | undefined;
    principalAmount?: number | undefined;
    interestAmount?: number | undefined;
    totalDisbursedAmount?: number | undefined;
    paidPrincipalAmount?: number | undefined;
    paidInterestAmount?: number | undefined;
    paidPenaltiesAmount?: number | undefined;
    totalPenaltyAmount?: number | undefined;
    salesforceOpportunityId?: string | null | undefined;
    annualRate?: number | undefined;
    cancelNote?: string | null | undefined;
    currency?: import("../../../generated/data-contracts").CurrencyEnum | undefined;
    dailyRate?: number | undefined;
    delinquentAmount?: number | undefined;
    loanRate?: number | undefined;
    name?: string | null | undefined;
    netPayableInterest?: number | undefined;
    netPayablePenalties?: number | undefined;
    netPayableTotal?: number | undefined;
    nextPaymentDate?: unknown;
    paidTotalAmount?: number | undefined;
    productVersion?: string | null | undefined;
    repaymentAmount?: number | undefined;
    repaymentType?: string | undefined;
    totalOutstandingAmount?: number | undefined;
    daysTillNextPayment?: number | null | undefined;
    interestAllocationType?: string | null | undefined;
    invoicesAmount?: number | null | undefined;
    invoicesDiscountRate?: number | null | undefined;
    firstInstalmentDate?: unknown;
    collectionMethod?: string | null | undefined;
    _links?: {
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
    } | undefined;
    loanOfficerUser?: {
        email?: string | null | undefined;
        user_id?: string | null | undefined;
    } | null | undefined;
    totalChargesAmount?: number | undefined;
    disbursementMethod?: string | null | undefined;
    originationFee?: number | null | undefined;
    accruedInterest?: number | undefined;
    allocatedDiscountInterestAmount?: number | undefined;
    canceledAt?: unknown;
    adjustedInterestAmount?: number | undefined;
    numberOfInstalments?: number | null | undefined;
    netPayablePrincipal?: number | undefined;
    startLoanDate?: unknown;
    penaltyPercentage?: number | undefined;
    riskFlag?: string | null | undefined;
    totalOverdueDays?: number | undefined;
    adjustedInterest?: number | undefined;
    totalExpensesAmount?: number | undefined;
    principalDisbursedAmount?: number | undefined;
    writtenOffPrincipalAmount?: number | undefined;
    currentExpectedInterest?: number | undefined;
    writtenOffInterestAmount?: number | undefined;
    waivedPenaltyAmount?: number | undefined;
    waivedAmount?: number | undefined;
    totalWrittenOffAmount?: number | undefined;
    totalOffsetAmount?: number | undefined;
    adjustedtInterest?: number | undefined;
    currentPaymentNumber?: number | null | undefined;
    numberOfPayments?: number | null | undefined;
    disbursedOffsetAmount?: number | undefined;
    originationFeeAmount?: number | undefined;
    startPenaltyDate?: unknown;
    startLatePeriodDate?: unknown;
    restructuredAmount?: number | null | undefined;
    wavedAmount?: number | null | undefined;
    writtenOffAmount?: number | null | undefined;
    maxAllowableDisbursements?: number | undefined;
}>;
//# sourceMappingURL=BaseDetailedLoan.schema.d.ts.map