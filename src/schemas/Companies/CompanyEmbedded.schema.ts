import { z } from 'zod';

const CompanyEmbeddedSortFields = z.enum([
  'createdAt',
  'updatedAt',
  'companyType',
  'companySourceType',
  'loanOfficerUserId',
  'companyIdentifier',
  'ibfCreditLimit',
  'rbfCreditLimit',
  'creditLimit',
  'nextReviewDate',
  'isComplianceApproved',
  'nextComplianceReviewDate',
]);

const CompanyEmbeddedIncludeValues = z.enum([
  'incorporationDate',
  'companyType',
  'industry',
  'companySourceType',
  'partnerCompanyIdentifier',
  'email',
  'phone',
  'website',
  'isPartner',
  'contactName',
  'loanOfficerUserId',
  'ibfCreditLimit',
  'rbfCreditLimit',
  'creditLimit',
  'creditScore',
  'nextReviewDate',
  'isComplianceApproved',
  'nextComplianceReviewDate',
  'bankName',
  'iban',
  'swift',
  'bankAddress',
  'createdAt',
  'updatedAt',
  'updatedByUserId',
  'incorporationCountry',
  'currency',
  'partnerCompany',
  'utilizedCredit',
]);

export const CompanyEmbedded = z.object({
  sortFields: z.array(CompanyEmbeddedSortFields),
  includeValues: z.array(CompanyEmbeddedIncludeValues),
});
