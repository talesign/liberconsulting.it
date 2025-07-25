export type Partner = {
  LogoListing: string;
  LogoSquare: string;
  Nome: string;
  Slug: string;
  TitleSeo: string;
  DescriptionSeo: string;
  Bodycopy: string;
  Gallery: string[];
};

export type Department = {
  Slug: string;
  TitleSeo: string;
  DescriptionSeo: string;
  ListingImage: string;
  Nome: string;
  ListingSubtitle: string;
  HeroImage: string;
};

export type Service = {
  Nome: string;
  ListDescription: string;
  Slug: string;
  ListIcon: string;
  Dipartimento: string;
  Partner: string;
  ImmagineEvidenza: string;
  TitleSeo: string;
  DescriptionSeo: string;
  Referente: string;
  Bodycopy: string;
};

export type Extra = {};
export type Referent = {
  Nome: string;
  Slug: string;
};
