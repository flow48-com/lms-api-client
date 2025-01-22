import {
  BaseSchema,
  LoanOfficerUserSchema,
  ZodDateWithFormat,
} from 'schemas/common/SharedSchemas';
import { z } from 'zod';
import {
  CurrencyEnumSchema,
  LoanStatusEnumSchema,
  LoanTypeEnumSchema,
  PenaltyTypeEnumSchema,
} from 'schemas/common/enums';
import {
  LoanLinksSchema,
  LoansLinksSchemaResponse,
} from 'schemas/loans/LoanLinks.schema';
import { LoansEmbeddedSchema } from 'schemas/loans/LoanEmbedded.schema';

export const BaseLoanSchema = BaseSchema.pick({
  _links: true,
}).merge(
  z.object({
    loanId: z.string(),
    companyIdentifier: z.string().default(''),
    loanOfficerUser: LoanOfficerUserSchema,
    currency: CurrencyEnumSchema.default(CurrencyEnumSchema.enum.ZAR),
    loanStatus: LoanStatusEnumSchema.default(LoanStatusEnumSchema.enum.Active),
    salesforceOpportunityId: z.string().nullable().default(null),
    loanOfficerUserId: z.string().uuid().nullable().default(null),
    gracePeriodDays: z.number().default(0),
    penaltyType: PenaltyTypeEnumSchema.nullable()
      .transform((val) => val?.toLowerCase())
      .default(null),
    penaltyPercentage: z.number().default(0),
    disbursementDate: ZodDateWithFormat.default(null),
    maturityDate: ZodDateWithFormat.nullable().default(null),
    payoffDate: ZodDateWithFormat.nullable().default(null),
    loanApprovalDate: ZodDateWithFormat.nullable().default(null),
    timesDelinquent: z.number().default(0),
    totalDisbursedAmount: z.number().default(0),
    paidPrincipalAmount: z.number().default(0),
    paidInterestAmount: z.number().default(0),
    totalPenaltyAmount: z.number().default(0),
    paidPenaltiesAmount: z.number().default(0),
    totalOutstandingAmount: z.number().default(0),
    createdAt: ZodDateWithFormat.nullable().default(null),
    riskFlag: z.string().nullable().default(null),
    totalOverdueDays: z.number().default(0),
    originationFee: z.number().nullable().default(0),
    invoicesDiscountRate: z.number().nullable().default(null),
    invoicesAmount: z.number().nullable().default(0),
    loanType: LoanTypeEnumSchema.default(LoanTypeEnumSchema.enum.RBF),
    principalAmount: z.number().default(0),
    adjustedInterest: z.number().default(0),
    netPayableTotal: z.number().default(0),
    interestAmount: z.number().default(0),
    repaymentAmount: z.number().default(0),
    delinquentAmount: z.number().default(0),
    totalExpensesAmount: z.number().default(0),
    paidTotalAmount: z.number().default(0),
    netPayablePrincipal: z.number().default(0),
    netPayableInterest: z.number().default(0),
    netPayablePenalties: z.number().default(0),
    loanRate: z.number().default(0),
    penaltyPercent: z.number().default(0),
    annualRate: z.number().default(0),
    monthlyRate: z.number().default(0),
    dailyRate: z.number().default(0),
    name: z
      .string()
      .nullable()
      .transform((val) => val || '-')
      .default('-'),
    productVersion: z.string().nullable().default(null),
    principalDisbursedAmount: z.number().default(0),
    writtenOffPrincipalAmount: z.number().default(0),
    accruedInterest: z.number().default(0),
    adjustedInterestAmount: z.number().default(0),
    currentExpectedInterest: z.number().default(0),
    allocatedDiscountInterestAmount: z.number().default(0),
    writtenOffInterestAmount: z.number().default(0),
    waivedPenaltyAmount: z.number().default(0),
    waivedAmount: z.number().default(0),
    totalChargesAmount: z.number().default(0),
    totalWrittenOffAmount: z.number().default(0),
    totalOffsetAmount: z.number().default(0),
    adjustedtInterest: z.number().default(0),
    tenor: z.string().default(''),
    collectionMethod: z.string().nullable().default(null),
    disbursementMethod: z.string().nullable().default(null),
    currentPaymentNumber: z.number().nullish().default(0),
    numberOfPayments: z.number().nullish().default(0),
    disbursedOffsetAmount: z.number().default(0),
    originationFeeAmount: z.number().default(0),
    nextPaymentDate: ZodDateWithFormat.nullable().default(null),
    startPenaltyDate: ZodDateWithFormat.nullable().default(null),
    startLatePeriodDate: ZodDateWithFormat.nullable().default(null),
    firstInstalmentDate: ZodDateWithFormat.nullable().default(null),
    startLoanDate: ZodDateWithFormat.nullable().default(null),
    numberOfInstalments: z.number().nullable().default(0),
    daysTillNextPayment: z.number().nullable().default(0),
    canceledAt: ZodDateWithFormat.nullable().default(null),
    cancelNote: z.string().nullable().default(null),
    interestAllocationType: z.string().nullable().default(null),
    repaymentType: z.string().default(''),
    restructuredAmount: z.number().nullable().default(null),
    wavedAmount: z.number().nullable().default(null),
    writtenOffAmount: z.number().nullable().default(null),
    _links: LoanLinksSchema.optional().default({}),
  }),
);

export const LoansSchemaResponse = BaseSchema.merge(
  z.object({
    loans: z.array(BaseLoanSchema),
    _links: LoansLinksSchemaResponse,
    _embedded: LoansEmbeddedSchema,
  }),
);
