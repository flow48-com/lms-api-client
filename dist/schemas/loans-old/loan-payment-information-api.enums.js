import { z } from 'zod';
export const RevioRequestPrioritySchema = z.enum(['NORMAL', 'URGENT']);
export const AccountTypeSchema = z.enum(['CURRENT', 'SAVINGS', 'TRANSMISSION']);
export const RevioPaymentStateSchema = z.enum([
    'NEW',
    'QUEUED',
    'SUBMITTED',
    'ACCEPTED',
    'COMPLETED',
    'VALIDATION_FAILURE',
    'TRANSACTION_FAILURE',
    'DISPUTED',
    'UNPAID',
    'UNPAID_WITH_RECOURSE',
    'INTERNAL_FAILURE',
    'CUTOFF',
]);
