// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type Article1DocumentDataSlicesSlice = ArticleonesliceSlice;

/**
 * Content for article1 documents
 */
interface Article1DocumentData {
  /**
   * artcile1title field in *article1*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article1.artcile1title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  artcile1title: prismic.KeyTextField;

  /**
   * article1previewinfo field in *article1*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article1.article1previewinfo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  article1previewinfo: prismic.KeyTextField;

  /**
   * Slice Zone field in *article1*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: article1.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<Article1DocumentDataSlicesSlice> /**
   * Meta Description field in *article1*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: article1.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *article1*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article1.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *article1*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: article1.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * article1 document from Prismic
 *
 * - **API ID**: `article1`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type Article1Document<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<Article1DocumentData>,
    "article1",
    Lang
  >;

type Article2DocumentDataSlicesSlice = ArticletwosliceSlice;

/**
 * Content for article2 documents
 */
interface Article2DocumentData {
  /**
   * article2title field in *article2*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article2.article2title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  article2title: prismic.KeyTextField;

  /**
   * article2date field in *article2*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: article2.article2date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  article2date: prismic.DateField;

  /**
   * article2text field in *article2*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article2.article2text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  article2text: prismic.KeyTextField;

  /**
   * Slice Zone field in *article2*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: article2.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<Article2DocumentDataSlicesSlice>;
}

/**
 * article2 document from Prismic
 *
 * - **API ID**: `article2`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type Article2Document<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<Article2DocumentData>,
    "article2",
    Lang
  >;

type Article3DocumentDataSlicesSlice = ArticlethreesliceSlice;

/**
 * Content for article3 documents
 */
interface Article3DocumentData {
  /**
   * article2title field in *article3*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article3.article2title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  article2title: prismic.KeyTextField;

  /**
   * article3date field in *article3*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: article3.article3date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  article3date: prismic.DateField;

  /**
   * arrticle3text field in *article3*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article3.arrticle3text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  arrticle3text: prismic.KeyTextField;

  /**
   * Slice Zone field in *article3*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: article3.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<Article3DocumentDataSlicesSlice>;
}

/**
 * article3 document from Prismic
 *
 * - **API ID**: `article3`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type Article3Document<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<Article3DocumentData>,
    "article3",
    Lang
  >;

type Article4DocumentDataSlicesSlice = ArticlefoursliceSlice;

/**
 * Content for article4 documents
 */
interface Article4DocumentData {
  /**
   * article4title field in *article4*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article4.article4title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  article4title: prismic.KeyTextField;

  /**
   * article4previewinfo field in *article4*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article4.article4previewinfo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  article4previewinfo: prismic.KeyTextField;

  /**
   * Slice Zone field in *article4*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: article4.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<Article4DocumentDataSlicesSlice>;
}

/**
 * article4 document from Prismic
 *
 * - **API ID**: `article4`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type Article4Document<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<Article4DocumentData>,
    "article4",
    Lang
  >;

type Trending1DocumentDataSlicesSlice = TrendingonesliceSlice;

/**
 * Content for trending1 documents
 */
interface Trending1DocumentData {
  /**
   * Slice Zone field in *trending1*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: trending1.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<Trending1DocumentDataSlicesSlice>;
}

/**
 * trending1 document from Prismic
 *
 * - **API ID**: `trending1`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type Trending1Document<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<Trending1DocumentData>,
    "trending1",
    Lang
  >;

type Trending2DocumentDataSlicesSlice = TrendingtwosliceSlice;

/**
 * Content for trending2 documents
 */
interface Trending2DocumentData {
  /**
   * Slice Zone field in *trending2*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: trending2.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<Trending2DocumentDataSlicesSlice>;
}

/**
 * trending2 document from Prismic
 *
 * - **API ID**: `trending2`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type Trending2Document<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<Trending2DocumentData>,
    "trending2",
    Lang
  >;

type Trending3DocumentDataSlicesSlice =
  | TrendingthreeSliceSlice
  | Trending3SliceSlice;

/**
 * Content for trending3 documents
 */
interface Trending3DocumentData {
  /**
   * Slice Zone field in *trending3*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: trending3.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<Trending3DocumentDataSlicesSlice>;
}

/**
 * trending3 document from Prismic
 *
 * - **API ID**: `trending3`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type Trending3Document<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<Trending3DocumentData>,
    "trending3",
    Lang
  >;

type Trending4DocumentDataSlicesSlice = TrendingfoursliceSlice;

/**
 * Content for trending4 documents
 */
interface Trending4DocumentData {
  /**
   * Slice Zone field in *trending4*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: trending4.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<Trending4DocumentDataSlicesSlice>;
}

/**
 * trending4 document from Prismic
 *
 * - **API ID**: `trending4`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type Trending4Document<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<Trending4DocumentData>,
    "trending4",
    Lang
  >;

export type AllDocumentTypes =
  | Article1Document
  | Article2Document
  | Article3Document
  | Article4Document
  | Trending1Document
  | Trending2Document
  | Trending3Document
  | Trending4Document;

/**
 * Primary content in *Articlefourslice → Items*
 */
export interface ArticlefoursliceSliceDefaultItem {
  /**
   * article4image field in *Articlefourslice → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: articlefourslice.items[].article4image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  article4image: prismic.ImageField<never>;
}

/**
 * Default variation for Articlefourslice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticlefoursliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ArticlefoursliceSliceDefaultItem>
>;

/**
 * Slice variation for *Articlefourslice*
 */
type ArticlefoursliceSliceVariation = ArticlefoursliceSliceDefault;

/**
 * Articlefourslice Shared Slice
 *
 * - **API ID**: `articlefourslice`
 * - **Description**: Articlefourslice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticlefoursliceSlice = prismic.SharedSlice<
  "articlefourslice",
  ArticlefoursliceSliceVariation
>;

/**
 * Primary content in *Articleoneslice → Items*
 */
export interface ArticleonesliceSliceDefaultItem {
  /**
   * article1sliceimage field in *Articleoneslice → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: articleoneslice.items[].articlesliceimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  articlesliceimage: prismic.ImageField<never>;
}

/**
 * Default variation for Articleoneslice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticleonesliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ArticleonesliceSliceDefaultItem>
>;

/**
 * Slice variation for *Articleoneslice*
 */
type ArticleonesliceSliceVariation = ArticleonesliceSliceDefault;

/**
 * Articleoneslice Shared Slice
 *
 * - **API ID**: `articleoneslice`
 * - **Description**: Articleoneslice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticleonesliceSlice = prismic.SharedSlice<
  "articleoneslice",
  ArticleonesliceSliceVariation
>;

/**
 * Primary content in *Articlethreeslice → Items*
 */
export interface ArticlethreesliceSliceDefaultItem {
  /**
   * artcile3imageslice field in *Articlethreeslice → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: articlethreeslice.items[].artcile3imageslice
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  artcile3imageslice: prismic.ImageField<never>;
}

/**
 * Default variation for Articlethreeslice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticlethreesliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ArticlethreesliceSliceDefaultItem>
>;

/**
 * Slice variation for *Articlethreeslice*
 */
type ArticlethreesliceSliceVariation = ArticlethreesliceSliceDefault;

/**
 * Articlethreeslice Shared Slice
 *
 * - **API ID**: `articlethreeslice`
 * - **Description**: Articlethreeslice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticlethreesliceSlice = prismic.SharedSlice<
  "articlethreeslice",
  ArticlethreesliceSliceVariation
>;

/**
 * Primary content in *Articletwoslice → Items*
 */
export interface ArticletwosliceSliceDefaultItem {
  /**
   * article2sliceimage field in *Articletwoslice → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: articletwoslice.items[].article2sliceimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  article2sliceimage: prismic.ImageField<never>;
}

/**
 * Default variation for Articletwoslice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticletwosliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ArticletwosliceSliceDefaultItem>
>;

/**
 * Slice variation for *Articletwoslice*
 */
type ArticletwosliceSliceVariation = ArticletwosliceSliceDefault;

/**
 * Articletwoslice Shared Slice
 *
 * - **API ID**: `articletwoslice`
 * - **Description**: Articletwoslice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticletwosliceSlice = prismic.SharedSlice<
  "articletwoslice",
  ArticletwosliceSliceVariation
>;

/**
 * Default variation for Trending3Slice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Trending3SliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *Trending3Slice*
 */
type Trending3SliceSliceVariation = Trending3SliceSliceDefault;

/**
 * Trending3Slice Shared Slice
 *
 * - **API ID**: `trending3_slice`
 * - **Description**: Trending3Slice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Trending3SliceSlice = prismic.SharedSlice<
  "trending3_slice",
  Trending3SliceSliceVariation
>;

/**
 * Primary content in *Trendingfourslice → Primary*
 */
export interface TrendingfoursliceSliceDefaultPrimary {
  /**
   * trending4title field in *Trendingfourslice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trendingfourslice.primary.trending4title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  trending4title: prismic.KeyTextField;
}

/**
 * Primary content in *Trendingfourslice → Items*
 */
export interface TrendingfoursliceSliceDefaultItem {
  /**
   * trending4list1 field in *Trendingfourslice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trendingfourslice.items[].trending4list1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  trending4list1: prismic.KeyTextField;

  /**
   * trending4list2 field in *Trendingfourslice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trendingfourslice.items[].trending4list2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  trending4list2: prismic.KeyTextField;

  /**
   * trending4list3 field in *Trendingfourslice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trendingfourslice.items[].trending4list3
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  trending4list3: prismic.KeyTextField;
}

/**
 * Default variation for Trendingfourslice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TrendingfoursliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TrendingfoursliceSliceDefaultPrimary>,
  Simplify<TrendingfoursliceSliceDefaultItem>
>;

/**
 * Slice variation for *Trendingfourslice*
 */
type TrendingfoursliceSliceVariation = TrendingfoursliceSliceDefault;

/**
 * Trendingfourslice Shared Slice
 *
 * - **API ID**: `trendingfourslice`
 * - **Description**: Trendingfourslice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TrendingfoursliceSlice = prismic.SharedSlice<
  "trendingfourslice",
  TrendingfoursliceSliceVariation
>;

/**
 * Primary content in *Trendingoneslice → Primary*
 */
export interface TrendingonesliceSliceDefaultPrimary {
  /**
   * trendind1title field in *Trendingoneslice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trendingoneslice.primary.trendind1title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  trendind1title: prismic.KeyTextField;
}

/**
 * Primary content in *Trendingoneslice → Items*
 */
export interface TrendingonesliceSliceDefaultItem {
  /**
   * trending1list2 field in *Trendingoneslice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trendingoneslice.items[].trending1list2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  trending1list2: prismic.KeyTextField;

  /**
   * trending1list1 field in *Trendingoneslice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trendingoneslice.items[].trending1list1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  trending1list1: prismic.KeyTextField;

  /**
   * trending1list3 field in *Trendingoneslice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trendingoneslice.items[].trending1list3
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  trending1list3: prismic.KeyTextField;
}

/**
 * Default variation for Trendingoneslice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TrendingonesliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TrendingonesliceSliceDefaultPrimary>,
  Simplify<TrendingonesliceSliceDefaultItem>
>;

/**
 * Slice variation for *Trendingoneslice*
 */
type TrendingonesliceSliceVariation = TrendingonesliceSliceDefault;

/**
 * Trendingoneslice Shared Slice
 *
 * - **API ID**: `trendingoneslice`
 * - **Description**: Trendingoneslice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TrendingonesliceSlice = prismic.SharedSlice<
  "trendingoneslice",
  TrendingonesliceSliceVariation
>;

/**
 * Primary content in *TrendingthreeSlice → Primary*
 */
export interface TrendingthreeSliceSliceDefaultPrimary {
  /**
   * trending3title field in *TrendingthreeSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trendingthree_slice.primary.trending3title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  trending3title: prismic.KeyTextField;
}

/**
 * Primary content in *TrendingthreeSlice → Items*
 */
export interface TrendingthreeSliceSliceDefaultItem {
  /**
   * trending3list1 field in *TrendingthreeSlice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trendingthree_slice.items[].trending3list1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  trending3list1: prismic.KeyTextField;

  /**
   * trending3list2 field in *TrendingthreeSlice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trendingthree_slice.items[].trending3list2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  trending3list2: prismic.KeyTextField;

  /**
   * trending3list3 field in *TrendingthreeSlice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trendingthree_slice.items[].trending3list3
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  trending3list3: prismic.KeyTextField;
}

/**
 * Default variation for TrendingthreeSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TrendingthreeSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TrendingthreeSliceSliceDefaultPrimary>,
  Simplify<TrendingthreeSliceSliceDefaultItem>
>;

/**
 * Slice variation for *TrendingthreeSlice*
 */
type TrendingthreeSliceSliceVariation = TrendingthreeSliceSliceDefault;

/**
 * TrendingthreeSlice Shared Slice
 *
 * - **API ID**: `trendingthree_slice`
 * - **Description**: TrendingthreeSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TrendingthreeSliceSlice = prismic.SharedSlice<
  "trendingthree_slice",
  TrendingthreeSliceSliceVariation
>;

/**
 * Primary content in *Trendingtwoslice → Primary*
 */
export interface TrendingtwosliceSliceDefaultPrimary {
  /**
   * trending2title field in *Trendingtwoslice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trendingtwoslice.primary.trending2title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  trending2title: prismic.KeyTextField;
}

/**
 * Primary content in *Trendingtwoslice → Items*
 */
export interface TrendingtwosliceSliceDefaultItem {
  /**
   * trending2list1 field in *Trendingtwoslice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trendingtwoslice.items[].trending2list1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  trending2list1: prismic.KeyTextField;

  /**
   * trending2list2 field in *Trendingtwoslice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trendingtwoslice.items[].trending2list2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  trending2list2: prismic.KeyTextField;

  /**
   * trending2list3 field in *Trendingtwoslice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trendingtwoslice.items[].trending2list3
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  trending2list3: prismic.KeyTextField;
}

/**
 * Default variation for Trendingtwoslice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TrendingtwosliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TrendingtwosliceSliceDefaultPrimary>,
  Simplify<TrendingtwosliceSliceDefaultItem>
>;

/**
 * Slice variation for *Trendingtwoslice*
 */
type TrendingtwosliceSliceVariation = TrendingtwosliceSliceDefault;

/**
 * Trendingtwoslice Shared Slice
 *
 * - **API ID**: `trendingtwoslice`
 * - **Description**: Trendingtwoslice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TrendingtwosliceSlice = prismic.SharedSlice<
  "trendingtwoslice",
  TrendingtwosliceSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      Article1Document,
      Article1DocumentData,
      Article1DocumentDataSlicesSlice,
      Article2Document,
      Article2DocumentData,
      Article2DocumentDataSlicesSlice,
      Article3Document,
      Article3DocumentData,
      Article3DocumentDataSlicesSlice,
      Article4Document,
      Article4DocumentData,
      Article4DocumentDataSlicesSlice,
      Trending1Document,
      Trending1DocumentData,
      Trending1DocumentDataSlicesSlice,
      Trending2Document,
      Trending2DocumentData,
      Trending2DocumentDataSlicesSlice,
      Trending3Document,
      Trending3DocumentData,
      Trending3DocumentDataSlicesSlice,
      Trending4Document,
      Trending4DocumentData,
      Trending4DocumentDataSlicesSlice,
      AllDocumentTypes,
      ArticlefoursliceSlice,
      ArticlefoursliceSliceDefaultItem,
      ArticlefoursliceSliceVariation,
      ArticlefoursliceSliceDefault,
      ArticleonesliceSlice,
      ArticleonesliceSliceDefaultItem,
      ArticleonesliceSliceVariation,
      ArticleonesliceSliceDefault,
      ArticlethreesliceSlice,
      ArticlethreesliceSliceDefaultItem,
      ArticlethreesliceSliceVariation,
      ArticlethreesliceSliceDefault,
      ArticletwosliceSlice,
      ArticletwosliceSliceDefaultItem,
      ArticletwosliceSliceVariation,
      ArticletwosliceSliceDefault,
      Trending3SliceSlice,
      Trending3SliceSliceVariation,
      Trending3SliceSliceDefault,
      TrendingfoursliceSlice,
      TrendingfoursliceSliceDefaultPrimary,
      TrendingfoursliceSliceDefaultItem,
      TrendingfoursliceSliceVariation,
      TrendingfoursliceSliceDefault,
      TrendingonesliceSlice,
      TrendingonesliceSliceDefaultPrimary,
      TrendingonesliceSliceDefaultItem,
      TrendingonesliceSliceVariation,
      TrendingonesliceSliceDefault,
      TrendingthreeSliceSlice,
      TrendingthreeSliceSliceDefaultPrimary,
      TrendingthreeSliceSliceDefaultItem,
      TrendingthreeSliceSliceVariation,
      TrendingthreeSliceSliceDefault,
      TrendingtwosliceSlice,
      TrendingtwosliceSliceDefaultPrimary,
      TrendingtwosliceSliceDefaultItem,
      TrendingtwosliceSliceVariation,
      TrendingtwosliceSliceDefault,
    };
  }
}
