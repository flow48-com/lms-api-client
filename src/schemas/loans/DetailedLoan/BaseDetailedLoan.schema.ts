import { BaseCompanySchema } from 'schemas/Companies';
import { BaseLoanSchema } from 'schemas/loans';
import { DetailedLoanLinksSchema } from 'schemas/loans/DetailedLoan/DetailedLoanLinks.schema';
import { z } from 'zod';

export const BaseDetailedLoanSchema = BaseLoanSchema.extend({
  company: BaseCompanySchema.omit({
    _links: true,
  }),
  companyIdentifier: z.string(),
  maxAllowableDisbursements: z.number().default(0),

  // productVersion: z.string().nullish(),
  // salesforceOpportunityId: z.string().nullish(),
  // loanOfficerUserId: z.string().nullish(),
  //
  // principalDisbursedAmount: z.number(),
  // writtenOffPrincipalAmount: z.number().optional(),
  // accruedInterest: z.number(),
  // adjustedInterestAmount: z.number().nullish(),
  // currentExpectedInterest: z.number(),
  // allocatedDiscountInterestAmount: z.number().nullish(),
  // paidInterestAmount: z.number(),
  // writtenOffInterestAmount: z.number().optional(),
  // waivedPenaltyAmount: z.number().optional(),
  // waivedAmount: z.number().optional(),
  // totalOutstandingAmount: z.number(),
  // totalChargesAmount: z.number().nullish(),
  // totalWrittenOffAmount: z.number().optional(),
  // totalOffsetAmount: z.number().optional(),
  // adjustedtInterest: z.number().nullish(),
  //
  // tenor: z.string().optional(),
  // collectionMethod: z.string().nullish(),
  // disbursementMethod: z.string().nullish(),
  // currentPaymentNumber: z.number().nullish(),
  // numberOfPayments: z.number().nullish(),
  // disbursedOffsetAmount: z.number().optional(),
  // originationFeeAmount: z.number().nullish(),
  //
  // nextPaymentDate: ZodDateWithFormat.nullish(),
  // startPenaltyDate: ZodDateWithFormat.nullish(),
  // startLatePeriodDate: ZodDateWithFormat.nullish(),
  // firstInstalmentDate: ZodDateWithFormat.nullish(),
  // startLoanDate: ZodDateWithFormat.nullish(),
  // numberOfInstalments: z.number().nullish(),
  // timesDelinquent: z.number().nullish(),
  // daysTillNextPayment: z.number().nullish(),
  //
  // canceledAt: ZodDateWithFormat.nullish(),
  // cancelNote: z.string().nullish(),
  // riskFlag: z.string().nullish(),
  // interestAllocationType: z.string().nullish(),
  // repaymentType: z.string().optional(),
  // penaltyType: z.string().optional(),
  // gracePeriodDays: z.number().nullish(),

  _links: DetailedLoanLinksSchema.optional().default({}),
});
