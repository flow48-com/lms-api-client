import { z } from 'zod';
import { BaseSchema, ZodDateWithFormat } from 'schemas/common/SharedSchemas';
import { CountryCodeEnumSchema, CurrencyEnumSchema } from 'schemas/common/enums';
import { PaymentRequestEmbeddedSchema } from 'schemas/PaymentRequest/PaymentRequestEmbedded.schema';
import { PaymentRequestLinksSchema } from 'schemas/PaymentRequest/PaymentRequestLinks.schema';
export const BasePaymentRequestSchema = z.object({
    paymentLinkRequestId: z.string(),
    paymentRequestId: z.string(),
    transactionReference: z.string(),
    siteCode: z.string(),
    countryCode: CountryCodeEnumSchema,
    currencyCode: CurrencyEnumSchema,
    amount: z.preprocess((arg) => (typeof arg === 'string' ? Number(arg) : arg), z.number()),
    bankReference: z.string(),
    customer: z.string().nullable(),
    cancelUrl: z.string(),
    errorUrl: z.string(),
    successUrl: z.string(),
    notifyUrl: z.string(),
    isTest: z.boolean(),
    selectedBankId: z.string().nullable(),
    bankId: z.string().nullable(),
    bankAccountNumber: z.string().nullable(),
    branchCode: z.string().nullable(),
    bankAccountName: z.string().nullable(),
    payeeDisplayName: z.string().nullable(),
    expiryDateUtc: ZodDateWithFormat.nullish(),
    allowVariableAmount: z.boolean(),
    variableAmountMin: z.string().nullable(),
    variableAmountMax: z.string().nullable(),
    customerIdentifier: z.string().nullable(),
    customerCellphoneNumber: z.string().nullable(),
    generateShortUrl: z.boolean(),
    url: z.string().url(),
    errorMessage: z.string().nullish(),
});
export const PaymentRequestSchema = BaseSchema.pick({
    metaData: true,
}).merge(BasePaymentRequestSchema);
export const PaymentRequestsSchemaResponse = BaseSchema.pick({
    metaData: true,
}).merge(z.object({
    paymentRequests: z.array(PaymentRequestSchema.omit({ metaData: true })),
}));
export const PaymentLinkRequestSchema = BaseSchema.omit({
    _embedded: true,
    metaData: true,
}).merge(z.object({
    id: z.string(),
    loanId: z.string(),
    amount: z.preprocess((arg) => (typeof arg === 'string' ? Number(arg) : arg), z.number()),
    bankReference: z.string(),
    expiryDatetime: ZodDateWithFormat,
    createdAt: ZodDateWithFormat,
    url: z.string(),
    errorMessage: z.string().nullish(),
    status: z.string().nullable(),
    isReconciled: z.boolean(),
    paymentRequest: PaymentRequestSchema.omit({ metaData: true }),
}));
export const PaymentLinkRequestsSchemaResponse = BaseSchema.merge(z.object({
    paymentLinkRequests: z.array(PaymentLinkRequestSchema),
    _embedded: PaymentRequestEmbeddedSchema,
    _links: PaymentRequestLinksSchema,
}));
export const CreatePaymentLinkRequestsSchemaResponse = PaymentLinkRequestSchema.extend({
    _embedded: z.object({
        loanPaymentLinkRequests: PaymentLinkRequestsSchemaResponse,
    }),
});
