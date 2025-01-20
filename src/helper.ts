import { WithEmbedded, WithLinks, WithMeta } from 'lms-types';

export type CustomType<Data, Links, Embedded = NonNullable<unknown>> = WithEmbedded<
  WithLinks<WithMeta<Data>, Links>,
  Embedded
>;
