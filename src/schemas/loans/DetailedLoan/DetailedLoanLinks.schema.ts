import { LinkSchema } from 'schemas/common/SharedSchemas';
import { z } from 'zod';

export const DetailedLoanLinksSchema = z.object({
  getCompany: LinkSchema.optional(),
  getLoan: LinkSchema.optional(),
  getTransactions: LinkSchema.optional(),
  createLoan: LinkSchema.optional(),
  getLoanActionLogs: LinkSchema.optional(),
  addRepayments: LinkSchema.optional(),
  getLoanSchedule: LinkSchema.optional(),
  setLoanDefaultReviewStatus: LinkSchema.optional(),
  getLoanNotes: LinkSchema.optional(),
  getPaymentLinkRequests: LinkSchema.optional(),
  salesforce: LinkSchema.extend({
    title: z.string(),
  }).optional(),
  getApprovalPendingDisbursementRequest: LinkSchema.optional(),
  approveLoan: LinkSchema.optional(),
  requestDisbursement: LinkSchema.optional(),
  addDisbursement: LinkSchema.optional(),
  unsetLoanDefaultReviewStatus: LinkSchema.optional(),
  transitToDefaultProvision: LinkSchema.optional(),
  writeOffLoan: LinkSchema.optional(),
  resetRiskFlag: LinkSchema.optional(),
  cancelLoan: LinkSchema.optional(),
  getRevioDisbursements: LinkSchema.optional(),
  getRevioCollectionGatewayLoan: LinkSchema.optional(),
  getPurchases: LinkSchema.optional(),
});
