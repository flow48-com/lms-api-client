import { z } from 'zod';
export declare const LoanLinksSchema: z.ZodObject<{
    getCompany: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    getLoan: z.ZodOptional<z.ZodObject<{
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
    approveLoan: z.ZodOptional<z.ZodObject<{
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        href: string;
    }, {
        href: string;
    }>>;
    addRepayments: z.ZodOptional<z.ZodObject<{
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
    approveLoan?: {
        href: string;
    } | undefined;
    getLoan?: {
        href: string;
    } | undefined;
    createLoan?: {
        href: string;
    } | undefined;
    addRepayments?: {
        href: string;
    } | undefined;
}, {
    getCompany?: {
        href: string;
    } | undefined;
    approveLoan?: {
        href: string;
    } | undefined;
    getLoan?: {
        href: string;
    } | undefined;
    createLoan?: {
        href: string;
    } | undefined;
    addRepayments?: {
        href: string;
    } | undefined;
}>;
export declare const LoansLinksSchemaResponse: z.ZodObject<{
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
//# sourceMappingURL=LoanLinks.schema.d.ts.map