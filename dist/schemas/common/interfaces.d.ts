import { z } from 'zod';
import { CountryCodeEnumSchema, CurrencyEnumSchema, LoanInterestAllocationTypeEnumSchema, LoanStatusEnumSchema, LoanTypeEnumSchema, LoanTypeRepaymentEnumSchema, PenaltyTypeEnumSchema, PurchaseStatusEnumSchema } from 'schemas/common/enums';
export type TCurrencyEnum = z.infer<typeof CurrencyEnumSchema>;
export type TPurchaseStatusEnumSchema = z.infer<typeof PurchaseStatusEnumSchema>;
export type TCountryCodeEnumSchema = z.infer<typeof CountryCodeEnumSchema>;
export type TPenaltyTypeEnumSchema = z.infer<typeof PenaltyTypeEnumSchema>;
export type TLoanStatusEnumSchema = z.infer<typeof LoanStatusEnumSchema>;
export type TLoanTypeEnumSchema = z.infer<typeof LoanTypeEnumSchema>;
export type TLoanTypeRepaymentEnumSchema = z.infer<typeof LoanTypeRepaymentEnumSchema>;
export type TLoanInterestAllocationTypeEnumSchema = z.infer<typeof LoanInterestAllocationTypeEnumSchema>;
//# sourceMappingURL=interfaces.d.ts.map