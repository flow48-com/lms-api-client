import { z } from 'zod';
import { BaseLoanSchema, LoansSchemaResponse } from 'schemas/loans/BaseLoan.schema';
import {
  LoanEmbeddedIncludeValues,
  LoansEmbeddedSchema,
} from 'schemas/loans/LoanEmbedded.schema';
import { LoanLinksSchema } from 'schemas/loans/LoanLinks.schema';

export type TBaseLoanSchema = z.infer<typeof BaseLoanSchema>;
export type TLoansSchemaSchemaResponse = z.infer<typeof LoansSchemaResponse>;

export type TLoanEmbeddedSchema = z.infer<typeof LoansEmbeddedSchema>;
export type TLoanLinksSchema = z.infer<typeof LoanLinksSchema>;

export type TLoanEmbeddedIncludeValues = z.infer<typeof LoanEmbeddedIncludeValues>;
