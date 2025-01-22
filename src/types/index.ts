export type WithLinks<T, K> = T & {
  _links: K;
};

export type WithEmbedded<T, K> = T & {
  _embedded: K;
};

export type WithMeta<T> = T & {
  metaData: {
    itemsCount: number;
    limit: number;
    page: number;
  };
};

export type Link = {
  href: string;
};

export type CustomType<Data, Links, Embedded = NonNullable<unknown>> = WithEmbedded<
  WithLinks<WithMeta<Data>, Links>,
  Embedded
>;
