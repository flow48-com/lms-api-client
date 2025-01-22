import {
  AccountTypeSchema,
  RevioPaymentStateSchema,
  RevioRequestPrioritySchema,
} from './loan-payment-information-api.enums';
import { z } from 'zod';
import { CurrencyEnumSchema } from 'schemas/common/enums';

export const EftPaymentDataSchema = z.object({});

export const RevioEftPaymentSchema = z.object({
  paymentId: z.string(),
  referenceNumber: z.string(),
  externalReference: z.string(),
  paymentDate: z.date(),
  state: RevioPaymentStateSchema,
  amountCents: z.number(),
  currency: CurrencyEnumSchema,
  clientId: z.string(),
  eftPaymentData: EftPaymentDataSchema,
});

export const CreditorSchema = z.object({
  accountNumber: z.string(),
  accountType: AccountTypeSchema,
  branchCode: z.string(),
  name: z.string(),
  bank: z.string(),
  phoneNumber: z.string(),
  emailAddress: z.string().email(),
  idNumber: z.string(),
});

export const RevioDisbursementRequestSchema = z.object({
  disbursementRequestId: z.string(),
  userId: z.string(),
  loanId: z.string(),
  amount: z.number(),
  paymentDate: z.date(),
  priority: RevioRequestPrioritySchema,
  creditor: CreditorSchema,
  currency: CurrencyEnumSchema,
  status: RevioPaymentStateSchema,
});

export const RevioDisbursementSchema = RevioDisbursementRequestSchema.extend({
  paymentId: z.string(),
  payment: RevioEftPaymentSchema,
});

export const DisbursementsEmbeddedSchema = z.object({
  sortFields: z.array(z.string()),
  excludeValues: z.array(z.string()),
  loan: z.object({}),
});

export const ViewRevioDisbursementsResponseSchema = RevioDisbursementSchema.extend({
  _links: z.object({}),
});
export type ViewRevioDisbursementsResponse = z.infer<typeof ViewRevioDisbursementsResponseSchema>;

export const LoanRevioDisbursementsResponseSchema = z.object({
  revioDisbursements: z.array(ViewRevioDisbursementsResponseSchema),
  _links: z.object({}),
  _embedded: DisbursementsEmbeddedSchema,
});
export type LoanRevioDisbursementsResponse = z.infer<typeof LoanRevioDisbursementsResponseSchema>;
