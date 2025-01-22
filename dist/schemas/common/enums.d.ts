import { z } from 'zod';
import { CalculateLoanInterestLoanTypeEnum, CurrencyEnum, IncorporationCountryEnum, LoanResponseLoanStatusEnum, NewLoanInterestAllocationTypeEnum, NewLoanRepaymentTypeEnum, PurchaseStatus } from 'generated/data-contracts';
export declare const CurrencyEnumSchema: z.ZodNativeEnum<typeof CurrencyEnum>;
export declare const PurchaseStatusEnumSchema: z.ZodNativeEnum<typeof PurchaseStatus>;
export declare const CountryCodeEnumSchema: z.ZodNativeEnum<typeof IncorporationCountryEnum>;
export declare const PenaltyTypeEnumSchema: z.ZodNativeEnum<{
    FIXED: string;
    VARIABLE: string;
}>;
export declare const LoanStatusEnumSchema: z.ZodNativeEnum<{
    Canceled: string;
    DefaultProvisioning: string;
    Pending: LoanResponseLoanStatusEnum.Pending;
    Approved: LoanResponseLoanStatusEnum.Approved;
    Active: LoanResponseLoanStatusEnum.Active;
    Late: LoanResponseLoanStatusEnum.Late;
    Overdue: LoanResponseLoanStatusEnum.Overdue;
    DefaultReview: LoanResponseLoanStatusEnum.DefaultReview;
    Restructured: LoanResponseLoanStatusEnum.Restructured;
    DefaultProvision: LoanResponseLoanStatusEnum.DefaultProvision;
    WrittenOff: LoanResponseLoanStatusEnum.WrittenOff;
    PaidOff: LoanResponseLoanStatusEnum.PaidOff;
}>;
export declare const LoanTypeEnumSchema: z.ZodNativeEnum<typeof CalculateLoanInterestLoanTypeEnum>;
export declare const LoanTypeRepaymentEnumSchema: z.ZodNativeEnum<typeof NewLoanRepaymentTypeEnum>;
export declare const LoanInterestAllocationTypeEnumSchema: z.ZodNativeEnum<typeof NewLoanInterestAllocationTypeEnum>;
//# sourceMappingURL=enums.d.ts.map