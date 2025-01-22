import { z } from 'zod';
import { CreatePaymentLinkRequestsSchemaResponse, PaymentLinkRequestSchema, PaymentLinkRequestsSchemaResponse, PaymentRequestSchema, PaymentRequestsSchemaResponse } from 'schemas/PaymentRequest/PaymentRequest.schema';
export type TPaymentRequestSchema = z.infer<typeof PaymentRequestSchema>;
export type TPaymentLinkRequestsSchema = z.infer<typeof PaymentLinkRequestSchema>;
export type TPaymentRequestsSchemaResponse = z.infer<typeof PaymentRequestsSchemaResponse>;
export type TPaymentLinkRequestsSchemaResponse = z.infer<typeof PaymentLinkRequestsSchemaResponse>;
export type TCreatePaymentLinkRequestsSchemaResponse = z.infer<typeof CreatePaymentLinkRequestsSchemaResponse>;
//# sourceMappingURL=interfaces.d.ts.map