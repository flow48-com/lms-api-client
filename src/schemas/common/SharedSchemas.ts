import { z } from 'zod';
import { formatDate } from 'utils/formatDate';
import { isValid } from 'date-fns';

// INVESTIGATE: Should be check how to use in self refference
export const ZodDateWithFormat = z
  .preprocess((arg) => {
    if (typeof arg !== 'string' || !arg) return null;

    const parsedDate = new Date(arg);
    return !isValid(parsedDate) ? null : formatDate(parsedDate);
  }, z.string().nullable())
  .transform((date) => (date ? formatDate(new Date(date)) : null));

export const LinkSchema = z.object({
  href: z.string(),
});

export const MetadataSchema = z.object({
  itemsCount: z.number(),
  limit: z.number(),
  page: z.number(),
});

export const BaseSchema = z.object({
  _links: z.record(z.object({ href: z.string() })),
  _embedded: z.record(z.object({})),
  metaData: MetadataSchema,
});

export const LoanOfficerUserSchema = z
  .object({
    user_id: z.string().uuid().nullish(),
    email: z
      .string()
      .email()
      .nullish()
      .transform((value) => value ?? '-'),
  })
  .nullish()
  .transform((value) => {
    return {
      user_id: value?.user_id ?? null,
      email: value?.email ?? '-',
    };
  });
