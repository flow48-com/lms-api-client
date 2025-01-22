import { z } from 'zod';
import { _baseCompanySchema, CompaniesSchemaResponse } from 'schemas/Companies/Companies.schema';
export type TBaseCompanySchema = z.infer<typeof _baseCompanySchema> & {
    partnerCompany?: Omit<z.infer<typeof _baseCompanySchema>, '_links'> | null;
};
export type TCompaniesSchemaResponse = z.infer<typeof CompaniesSchemaResponse>;
//# sourceMappingURL=interfaces.d.ts.map