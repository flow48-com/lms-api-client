import { z } from 'zod';
export declare const RevioRequestPrioritySchema: z.ZodEnum<["NORMAL", "URGENT"]>;
export type RevioRequestPriority = z.infer<typeof RevioRequestPrioritySchema>;
export declare const AccountTypeSchema: z.ZodEnum<["CURRENT", "SAVINGS", "TRANSMISSION"]>;
export type AccountType = z.infer<typeof AccountTypeSchema>;
export declare const RevioPaymentStateSchema: z.ZodEnum<["NEW", "QUEUED", "SUBMITTED", "ACCEPTED", "COMPLETED", "VALIDATION_FAILURE", "TRANSACTION_FAILURE", "DISPUTED", "UNPAID", "UNPAID_WITH_RECOURSE", "INTERNAL_FAILURE", "CUTOFF"]>;
export type RevioPaymentState = z.infer<typeof RevioPaymentStateSchema>;
//# sourceMappingURL=loan-payment-information-api.enums.d.ts.map