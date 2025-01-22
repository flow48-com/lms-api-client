import { z } from 'zod';
export declare const CompanyLinksSchema: z.ZodObject<{
    getCompany: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    salesforce: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    getCompany?: {
        href: string;
    } | undefined;
    salesforce?: {
        href: string;
    } | undefined;
}, {
    getCompany?: {
        href: string;
    } | undefined;
    salesforce?: {
        href: string;
    } | undefined;
}>;
export declare const CompaniesLinksSchemaResponse: z.ZodObject<{
    getCompanies: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    createCompany: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    createLoan: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    getLoans: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    createCompany?: {
        href: string;
    } | undefined;
    getCompanies?: {
        href: string;
    } | undefined;
    createLoan?: {
        href: string;
    } | undefined;
    getLoans?: {
        href: string;
    } | undefined;
}, {
    createCompany?: {
        href: string;
    } | undefined;
    getCompanies?: {
        href: string;
    } | undefined;
    createLoan?: {
        href: string;
    } | undefined;
    getLoans?: {
        href: string;
    } | undefined;
}>;
//# sourceMappingURL=CompanyLinks.schema.d.ts.map