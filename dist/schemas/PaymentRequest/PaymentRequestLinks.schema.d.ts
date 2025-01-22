import { z } from 'zod';
export declare const PaymentRequestLinksSchema: z.ZodOptional<z.ZodObject<{
    getPaymentLinkPaymentRequests: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    emailPaymentLinkRequest: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    getPaymentLinkPaymentRequests?: {
        href: string;
    } | undefined;
    emailPaymentLinkRequest?: {
        href: string;
    } | undefined;
}, {
    getPaymentLinkPaymentRequests?: {
        href: string;
    } | undefined;
    emailPaymentLinkRequest?: {
        href: string;
    } | undefined;
}>>;
//# sourceMappingURL=PaymentRequestLinks.schema.d.ts.map