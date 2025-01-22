import { z } from 'zod';
import { LinkSchema } from 'schemas/common/SharedSchemas';
export const CompanyLinksSchema = z.object({
    getCompany: LinkSchema.optional(),
    salesforce: LinkSchema.optional(),
});
export const CompaniesLinksSchemaResponse = z.object({
    getCompanies: LinkSchema.optional(),
    createCompany: LinkSchema.optional(),
    createLoan: LinkSchema.optional(),
    getLoans: LinkSchema.optional(),
});
