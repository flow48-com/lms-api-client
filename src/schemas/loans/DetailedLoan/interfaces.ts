import { z } from 'zod';
import { BaseDetailedLoanSchema } from 'schemas/loans/DetailedLoan/BaseDetailedLoan.schema';
import { DetailedLoanLinksSchema } from 'schemas/loans/DetailedLoan/DetailedLoanLinks.schema';

export type TBaseDetailedLoanSchema = z.infer<typeof BaseDetailedLoanSchema>;
export type TBaseDetailedLoanSchemaInput = z.input<typeof BaseDetailedLoanSchema>;

export type TDetailedLoanLinksSchema = z.infer<typeof DetailedLoanLinksSchema>;
