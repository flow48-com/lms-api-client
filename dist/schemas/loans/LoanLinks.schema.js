import { z } from 'zod';
import { LinkSchema } from 'schemas/common/SharedSchemas';
export const LoanLinksSchema = z.object({
    getCompany: LinkSchema.optional(),
    getLoan: LinkSchema.optional(),
    createLoan: LinkSchema.optional(),
    approveLoan: LinkSchema.optional(),
    addRepayments: LinkSchema.optional(),
});
export const LoansLinksSchemaResponse = z.object({
    getCompanies: LinkSchema.optional(),
    createCompany: LinkSchema.optional(),
    createLoan: LinkSchema.optional(),
    getLoans: LinkSchema.optional(),
});
