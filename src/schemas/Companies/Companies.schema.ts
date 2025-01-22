import { z } from 'zod';
import { CurrencyEnumSchema } from 'schemas/common/enums';
import {
  BaseSchema,
  LoanOfficerUserSchema,
  ZodDateWithFormat,
} from 'schemas/common/SharedSchemas';
import {
  CompaniesLinksSchemaResponse,
  CompanyLinksSchema,
} from 'schemas/Companies/CompanyLinks.schema';
import { CompanyEmbedded } from 'schemas/Companies/CompanyEmbedded.schema';

export const _baseCompanySchema = BaseSchema.pick({
  _links: true,
}).extend({
  companyIdentifier: z.string(),
  companyLegalName: z.string(),
  currency: CurrencyEnumSchema,
  loanOfficerUser: LoanOfficerUserSchema,
  accountNumber: z.string().nullish(),
  branchCode: z.string().nullish(),
  salesforceAccountId: z.string().nullable(),
  industry: z.string().nullish(),
  isPartner: z.boolean().optional(),
  email: z.string().email().nullish(),
  phone: z.string().nullish(),
  website: z.string().nullish(),
  contactName: z.string().nullish(),
  loanOfficerUserId: z.string().uuid().nullish(),
  creditScore: z.number().nullish(),
  isComplianceApproved: z.boolean().nullish(),
  bankName: z.string().nullish(),
  iban: z.string().nullish(),
  swift: z.string().nullish(),
  bankAddress: z.string().nullish(),
  updatedByUserId: z.string().uuid().nullish(),
  ibfCreditLimit: z.number().nullish(),
  rbfCreditLimit: z.number().nullish(),
  creditLimit: z.number().nullish(),
  utilizedCredit: z.number().nullish(),
  partnerCompanyIdentifier: z.string().nullish(),
  incorporationCountry: z.string().nullish(),
  incorporationDate: z.string().nullish(),
  companySourceType: z.string().nullish(),
  companyType: z.string().nullish(),

  nextReviewDate: ZodDateWithFormat.nullish(),
  createdAt: ZodDateWithFormat.nullish(),
  updatedAt: ZodDateWithFormat.nullish(),
  nextComplianceReviewData: ZodDateWithFormat.nullish(),
  nextComplianceReviewDate: ZodDateWithFormat.nullish(),

  _links: CompanyLinksSchema.optional(),
});

export const BaseCompanySchema = _baseCompanySchema.extend({
  partnerCompany: z
    .lazy(() =>
      _baseCompanySchema.omit({
        _links: true,
      }),
    )
    .nullish(),
});

export const CompaniesSchemaResponse = BaseSchema.merge(
  z.object({
    companies: z.array(BaseCompanySchema),
    _links: CompaniesLinksSchemaResponse,
    _embedded: CompanyEmbedded,
  }),
);
