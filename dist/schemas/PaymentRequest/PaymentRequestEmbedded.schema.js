import { z } from 'zod';
export const PaymentRequestEmbeddedSchema = z.object({
    loan: z.object({}),
});
