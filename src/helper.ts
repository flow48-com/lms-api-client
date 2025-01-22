import { WithEmbedded, WithLinks, WithMeta } from 'types';

export type CustomType<Data, Links, Embedded = NonNullable<unknown>> = WithEmbedded<
  WithLinks<WithMeta<Data>, Links>,
  Embedded
>;


export const handleParamsSerializer = (params: Record<string, unknown> | URLSearchParams): string => {
  if (params instanceof URLSearchParams) {
    return params.toString();
  }

  return Object.entries(params)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value.map((val) => `${key}=${encodeURIComponent(val)}`).join('&');
      }
      return `${key}=${encodeURIComponent(value as string)}`;
    })
    .join('&');

}
