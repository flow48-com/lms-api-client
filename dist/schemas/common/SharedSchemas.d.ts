import { z } from 'zod';
export declare const ZodDateWithFormat: z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, unknown>, string | null, unknown>;
export declare const LinkSchema: z.ZodObject<{
    href: z.ZodString;
}, "strip", z.ZodTypeAny, {
    href: string;
}, {
    href: string;
}>;
export declare const MetadataSchema: z.ZodObject<{
    itemsCount: z.ZodNumber;
    limit: z.ZodNumber;
    page: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    limit: number;
    page: number;
    itemsCount: number;
}, {
    limit: number;
    page: number;
    itemsCount: number;
}>;
export declare const BaseSchema: z.ZodObject<{
    _links: z.ZodRecord<z.ZodString, z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    _embedded: z.ZodRecord<z.ZodString, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    metaData: z.ZodObject<{
        itemsCount: z.ZodNumber;
        limit: z.ZodNumber;
        page: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        limit: number;
        page: number;
        itemsCount: number;
    }, {
        limit: number;
        page: number;
        itemsCount: number;
    }>;
}, "strip", z.ZodTypeAny, {
    _links: Record<string, {
        href: string;
    }>;
    _embedded: Record<string, {}>;
    metaData: {
        limit: number;
        page: number;
        itemsCount: number;
    };
}, {
    _links: Record<string, {
        href: string;
    }>;
    _embedded: Record<string, {}>;
    metaData: {
        limit: number;
        page: number;
        itemsCount: number;
    };
}>;
export declare const LoanOfficerUserSchema: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodObject<{
    user_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    email: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string, string | null | undefined>;
}, "strip", z.ZodTypeAny, {
    email: string;
    user_id?: string | null | undefined;
}, {
    email?: string | null | undefined;
    user_id?: string | null | undefined;
}>>>, {
    user_id: string | null;
    email: string;
}, {
    email?: string | null | undefined;
    user_id?: string | null | undefined;
} | null | undefined>;
//# sourceMappingURL=SharedSchemas.d.ts.map