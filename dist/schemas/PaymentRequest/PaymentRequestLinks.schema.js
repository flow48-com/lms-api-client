import { z } from 'zod';
import { LinkSchema } from 'schemas/common/SharedSchemas';
export const PaymentRequestLinksSchema = z
    .object({
    getPaymentLinkPaymentRequests: LinkSchema.optional(),
    emailPaymentLinkRequest: LinkSchema.optional(),
})
    .optional();
