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
  _links: DetailedLoanLinksSchema.optional().default({}),
});
