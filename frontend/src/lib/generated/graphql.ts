import client from "undefined";
import type {} from "@apollo/client";
import { readable } from "svelte/store";
import type { Readable } from "svelte/store";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  EmailAddress: any;
  JSON: any;
  JSONObject: any;
};

export type Access = {
  __typename?: "Access";
  canAccessAdmin: Scalars["Boolean"];
  evenements?: Maybe<EvenementAccess>;
  media?: Maybe<MediaAccess>;
  tickets?: Maybe<TicketAccess>;
  users?: Maybe<UserAccess>;
};

export type Evenement = {
  __typename?: "Evenement";
  Banner?: Maybe<Media>;
  Beschrijving?: Maybe<Scalars["String"]>;
  Datum?: Maybe<Scalars["DateTime"]>;
  Slug?: Maybe<Scalars["String"]>;
  Titel?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  id?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
};

export type EvenementAccess = {
  __typename?: "EvenementAccess";
  create?: Maybe<EvenementCreateAccess>;
  delete?: Maybe<EvenementDeleteAccess>;
  fields?: Maybe<EvenementFields>;
  read?: Maybe<EvenementReadAccess>;
  update?: Maybe<EvenementUpdateAccess>;
};

export type EvenementCreateAccess = {
  __typename?: "EvenementCreateAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type EvenementDeleteAccess = {
  __typename?: "EvenementDeleteAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type EvenementFields = {
  __typename?: "EvenementFields";
  Banner?: Maybe<EvenementFields_Banner>;
  Beschrijving?: Maybe<EvenementFields_Beschrijving>;
  Datum?: Maybe<EvenementFields_Datum>;
  Slug?: Maybe<EvenementFields_Slug>;
  Titel?: Maybe<EvenementFields_Titel>;
};

export type EvenementFields_Banner = {
  __typename?: "EvenementFields_Banner";
  create?: Maybe<EvenementFields_Banner_Create>;
  delete?: Maybe<EvenementFields_Banner_Delete>;
  read?: Maybe<EvenementFields_Banner_Read>;
  update?: Maybe<EvenementFields_Banner_Update>;
};

export type EvenementFields_Banner_Create = {
  __typename?: "EvenementFields_Banner_Create";
  permission: Scalars["Boolean"];
};

export type EvenementFields_Banner_Delete = {
  __typename?: "EvenementFields_Banner_Delete";
  permission: Scalars["Boolean"];
};

export type EvenementFields_Banner_Read = {
  __typename?: "EvenementFields_Banner_Read";
  permission: Scalars["Boolean"];
};

export type EvenementFields_Banner_Update = {
  __typename?: "EvenementFields_Banner_Update";
  permission: Scalars["Boolean"];
};

export type EvenementFields_Beschrijving = {
  __typename?: "EvenementFields_Beschrijving";
  create?: Maybe<EvenementFields_Beschrijving_Create>;
  delete?: Maybe<EvenementFields_Beschrijving_Delete>;
  read?: Maybe<EvenementFields_Beschrijving_Read>;
  update?: Maybe<EvenementFields_Beschrijving_Update>;
};

export type EvenementFields_Beschrijving_Create = {
  __typename?: "EvenementFields_Beschrijving_Create";
  permission: Scalars["Boolean"];
};

export type EvenementFields_Beschrijving_Delete = {
  __typename?: "EvenementFields_Beschrijving_Delete";
  permission: Scalars["Boolean"];
};

export type EvenementFields_Beschrijving_Read = {
  __typename?: "EvenementFields_Beschrijving_Read";
  permission: Scalars["Boolean"];
};

export type EvenementFields_Beschrijving_Update = {
  __typename?: "EvenementFields_Beschrijving_Update";
  permission: Scalars["Boolean"];
};

export type EvenementFields_Datum = {
  __typename?: "EvenementFields_Datum";
  create?: Maybe<EvenementFields_Datum_Create>;
  delete?: Maybe<EvenementFields_Datum_Delete>;
  read?: Maybe<EvenementFields_Datum_Read>;
  update?: Maybe<EvenementFields_Datum_Update>;
};

export type EvenementFields_Datum_Create = {
  __typename?: "EvenementFields_Datum_Create";
  permission: Scalars["Boolean"];
};

export type EvenementFields_Datum_Delete = {
  __typename?: "EvenementFields_Datum_Delete";
  permission: Scalars["Boolean"];
};

export type EvenementFields_Datum_Read = {
  __typename?: "EvenementFields_Datum_Read";
  permission: Scalars["Boolean"];
};

export type EvenementFields_Datum_Update = {
  __typename?: "EvenementFields_Datum_Update";
  permission: Scalars["Boolean"];
};

export type EvenementFields_Slug = {
  __typename?: "EvenementFields_Slug";
  create?: Maybe<EvenementFields_Slug_Create>;
  delete?: Maybe<EvenementFields_Slug_Delete>;
  read?: Maybe<EvenementFields_Slug_Read>;
  update?: Maybe<EvenementFields_Slug_Update>;
};

export type EvenementFields_Slug_Create = {
  __typename?: "EvenementFields_Slug_Create";
  permission: Scalars["Boolean"];
};

export type EvenementFields_Slug_Delete = {
  __typename?: "EvenementFields_Slug_Delete";
  permission: Scalars["Boolean"];
};

export type EvenementFields_Slug_Read = {
  __typename?: "EvenementFields_Slug_Read";
  permission: Scalars["Boolean"];
};

export type EvenementFields_Slug_Update = {
  __typename?: "EvenementFields_Slug_Update";
  permission: Scalars["Boolean"];
};

export type EvenementFields_Titel = {
  __typename?: "EvenementFields_Titel";
  create?: Maybe<EvenementFields_Titel_Create>;
  delete?: Maybe<EvenementFields_Titel_Delete>;
  read?: Maybe<EvenementFields_Titel_Read>;
  update?: Maybe<EvenementFields_Titel_Update>;
};

export type EvenementFields_Titel_Create = {
  __typename?: "EvenementFields_Titel_Create";
  permission: Scalars["Boolean"];
};

export type EvenementFields_Titel_Delete = {
  __typename?: "EvenementFields_Titel_Delete";
  permission: Scalars["Boolean"];
};

export type EvenementFields_Titel_Read = {
  __typename?: "EvenementFields_Titel_Read";
  permission: Scalars["Boolean"];
};

export type EvenementFields_Titel_Update = {
  __typename?: "EvenementFields_Titel_Update";
  permission: Scalars["Boolean"];
};

export type EvenementReadAccess = {
  __typename?: "EvenementReadAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type EvenementUpdateAccess = {
  __typename?: "EvenementUpdateAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type Evenement_Banner_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  not_equals?: InputMaybe<Scalars["String"]>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type Evenement_Beschrijving_Operator = {
  contains?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<Scalars["String"]>;
  not_equals?: InputMaybe<Scalars["String"]>;
};

export type Evenement_Datum_Operator = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["DateTime"]>;
  greater_than_equal?: InputMaybe<Scalars["DateTime"]>;
  less_than?: InputMaybe<Scalars["DateTime"]>;
  less_than_equal?: InputMaybe<Scalars["DateTime"]>;
  like?: InputMaybe<Scalars["DateTime"]>;
  not_equals?: InputMaybe<Scalars["DateTime"]>;
};

export type Evenement_Slug_Operator = {
  contains?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<Scalars["String"]>;
  not_equals?: InputMaybe<Scalars["String"]>;
};

export type Evenement_Titel_Operator = {
  contains?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<Scalars["String"]>;
  not_equals?: InputMaybe<Scalars["String"]>;
};

export type Evenement_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["DateTime"]>;
  greater_than_equal?: InputMaybe<Scalars["DateTime"]>;
  less_than?: InputMaybe<Scalars["DateTime"]>;
  less_than_equal?: InputMaybe<Scalars["DateTime"]>;
  like?: InputMaybe<Scalars["DateTime"]>;
  not_equals?: InputMaybe<Scalars["DateTime"]>;
};

export type Evenement_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  equals?: InputMaybe<Scalars["JSON"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  not_equals?: InputMaybe<Scalars["JSON"]>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
};

export type Evenement_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["DateTime"]>;
  greater_than_equal?: InputMaybe<Scalars["DateTime"]>;
  less_than?: InputMaybe<Scalars["DateTime"]>;
  less_than_equal?: InputMaybe<Scalars["DateTime"]>;
  like?: InputMaybe<Scalars["DateTime"]>;
  not_equals?: InputMaybe<Scalars["DateTime"]>;
};

export type Evenement_Where = {
  AND?: InputMaybe<Array<InputMaybe<Evenement_Where_And>>>;
  Banner?: InputMaybe<Evenement_Banner_Operator>;
  Beschrijving?: InputMaybe<Evenement_Beschrijving_Operator>;
  Datum?: InputMaybe<Evenement_Datum_Operator>;
  OR?: InputMaybe<Array<InputMaybe<Evenement_Where_Or>>>;
  Slug?: InputMaybe<Evenement_Slug_Operator>;
  Titel?: InputMaybe<Evenement_Titel_Operator>;
  createdAt?: InputMaybe<Evenement_CreatedAt_Operator>;
  id?: InputMaybe<Evenement_Id_Operator>;
  updatedAt?: InputMaybe<Evenement_UpdatedAt_Operator>;
};

export type Evenement_Where_And = {
  Banner?: InputMaybe<Evenement_Banner_Operator>;
  Beschrijving?: InputMaybe<Evenement_Beschrijving_Operator>;
  Datum?: InputMaybe<Evenement_Datum_Operator>;
  Slug?: InputMaybe<Evenement_Slug_Operator>;
  Titel?: InputMaybe<Evenement_Titel_Operator>;
  createdAt?: InputMaybe<Evenement_CreatedAt_Operator>;
  id?: InputMaybe<Evenement_Id_Operator>;
  updatedAt?: InputMaybe<Evenement_UpdatedAt_Operator>;
};

export type Evenement_Where_Or = {
  Banner?: InputMaybe<Evenement_Banner_Operator>;
  Beschrijving?: InputMaybe<Evenement_Beschrijving_Operator>;
  Datum?: InputMaybe<Evenement_Datum_Operator>;
  Slug?: InputMaybe<Evenement_Slug_Operator>;
  Titel?: InputMaybe<Evenement_Titel_Operator>;
  createdAt?: InputMaybe<Evenement_CreatedAt_Operator>;
  id?: InputMaybe<Evenement_Id_Operator>;
  updatedAt?: InputMaybe<Evenement_UpdatedAt_Operator>;
};

export type Evenements = {
  __typename?: "Evenements";
  docs?: Maybe<Array<Maybe<Evenement>>>;
  hasNextPage?: Maybe<Scalars["Boolean"]>;
  hasPrevPage?: Maybe<Scalars["Boolean"]>;
  limit?: Maybe<Scalars["Int"]>;
  nextPage?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
  pagingCounter?: Maybe<Scalars["Int"]>;
  prevPage?: Maybe<Scalars["Int"]>;
  totalDocs?: Maybe<Scalars["Int"]>;
  totalPages?: Maybe<Scalars["Int"]>;
};

export type Media = {
  __typename?: "Media";
  Titel?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  filename?: Maybe<Scalars["String"]>;
  filesize?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  mimeType?: Maybe<Scalars["String"]>;
  sizes?: Maybe<Media_Sizes>;
  updatedAt: Scalars["DateTime"];
  url?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type MediaAccess = {
  __typename?: "MediaAccess";
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaCreateAccess = {
  __typename?: "MediaCreateAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type MediaDeleteAccess = {
  __typename?: "MediaDeleteAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type MediaFields = {
  __typename?: "MediaFields";
  Titel?: Maybe<MediaFields_Titel>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  sizes?: Maybe<MediaFields_Sizes>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Titel = {
  __typename?: "MediaFields_Titel";
  create?: Maybe<MediaFields_Titel_Create>;
  delete?: Maybe<MediaFields_Titel_Delete>;
  read?: Maybe<MediaFields_Titel_Read>;
  update?: Maybe<MediaFields_Titel_Update>;
};

export type MediaFields_Titel_Create = {
  __typename?: "MediaFields_Titel_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Titel_Delete = {
  __typename?: "MediaFields_Titel_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Titel_Read = {
  __typename?: "MediaFields_Titel_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Titel_Update = {
  __typename?: "MediaFields_Titel_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Filename = {
  __typename?: "MediaFields_filename";
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: "MediaFields_filename_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Filename_Delete = {
  __typename?: "MediaFields_filename_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Filename_Read = {
  __typename?: "MediaFields_filename_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Filename_Update = {
  __typename?: "MediaFields_filename_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Filesize = {
  __typename?: "MediaFields_filesize";
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: "MediaFields_filesize_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Filesize_Delete = {
  __typename?: "MediaFields_filesize_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Filesize_Read = {
  __typename?: "MediaFields_filesize_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Filesize_Update = {
  __typename?: "MediaFields_filesize_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Height = {
  __typename?: "MediaFields_height";
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: "MediaFields_height_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Height_Delete = {
  __typename?: "MediaFields_height_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Height_Read = {
  __typename?: "MediaFields_height_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Height_Update = {
  __typename?: "MediaFields_height_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_MimeType = {
  __typename?: "MediaFields_mimeType";
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: "MediaFields_mimeType_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_MimeType_Delete = {
  __typename?: "MediaFields_mimeType_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_MimeType_Read = {
  __typename?: "MediaFields_mimeType_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_MimeType_Update = {
  __typename?: "MediaFields_mimeType_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes = {
  __typename?: "MediaFields_sizes";
  create?: Maybe<MediaFields_Sizes_Create>;
  delete?: Maybe<MediaFields_Sizes_Delete>;
  fields?: Maybe<MediaFields_Sizes_Fields>;
  read?: Maybe<MediaFields_Sizes_Read>;
  update?: Maybe<MediaFields_Sizes_Update>;
};

export type MediaFields_Sizes_Create = {
  __typename?: "MediaFields_sizes_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Delete = {
  __typename?: "MediaFields_sizes_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Fields = {
  __typename?: "MediaFields_sizes_Fields";
  card?: Maybe<MediaFields_Sizes_Card>;
  tablet?: Maybe<MediaFields_Sizes_Tablet>;
  thumbnail?: Maybe<MediaFields_Sizes_Thumbnail>;
};

export type MediaFields_Sizes_Read = {
  __typename?: "MediaFields_sizes_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Update = {
  __typename?: "MediaFields_sizes_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card = {
  __typename?: "MediaFields_sizes_card";
  create?: Maybe<MediaFields_Sizes_Card_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Delete>;
  fields?: Maybe<MediaFields_Sizes_Card_Fields>;
  read?: Maybe<MediaFields_Sizes_Card_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Update>;
};

export type MediaFields_Sizes_Card_Create = {
  __typename?: "MediaFields_sizes_card_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Delete = {
  __typename?: "MediaFields_sizes_card_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Fields = {
  __typename?: "MediaFields_sizes_card_Fields";
  filename?: Maybe<MediaFields_Sizes_Card_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Card_Filesize>;
  height?: Maybe<MediaFields_Sizes_Card_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Card_MimeType>;
  url?: Maybe<MediaFields_Sizes_Card_Url>;
  width?: Maybe<MediaFields_Sizes_Card_Width>;
};

export type MediaFields_Sizes_Card_Read = {
  __typename?: "MediaFields_sizes_card_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Update = {
  __typename?: "MediaFields_sizes_card_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Filename = {
  __typename?: "MediaFields_sizes_card_filename";
  create?: Maybe<MediaFields_Sizes_Card_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Filename_Update>;
};

export type MediaFields_Sizes_Card_Filename_Create = {
  __typename?: "MediaFields_sizes_card_filename_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Filename_Delete = {
  __typename?: "MediaFields_sizes_card_filename_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Filename_Read = {
  __typename?: "MediaFields_sizes_card_filename_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Filename_Update = {
  __typename?: "MediaFields_sizes_card_filename_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Filesize = {
  __typename?: "MediaFields_sizes_card_filesize";
  create?: Maybe<MediaFields_Sizes_Card_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Filesize_Update>;
};

export type MediaFields_Sizes_Card_Filesize_Create = {
  __typename?: "MediaFields_sizes_card_filesize_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Filesize_Delete = {
  __typename?: "MediaFields_sizes_card_filesize_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Filesize_Read = {
  __typename?: "MediaFields_sizes_card_filesize_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Filesize_Update = {
  __typename?: "MediaFields_sizes_card_filesize_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Height = {
  __typename?: "MediaFields_sizes_card_height";
  create?: Maybe<MediaFields_Sizes_Card_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Height_Update>;
};

export type MediaFields_Sizes_Card_Height_Create = {
  __typename?: "MediaFields_sizes_card_height_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Height_Delete = {
  __typename?: "MediaFields_sizes_card_height_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Height_Read = {
  __typename?: "MediaFields_sizes_card_height_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Height_Update = {
  __typename?: "MediaFields_sizes_card_height_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_MimeType = {
  __typename?: "MediaFields_sizes_card_mimeType";
  create?: Maybe<MediaFields_Sizes_Card_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Card_MimeType_Update>;
};

export type MediaFields_Sizes_Card_MimeType_Create = {
  __typename?: "MediaFields_sizes_card_mimeType_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_MimeType_Delete = {
  __typename?: "MediaFields_sizes_card_mimeType_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_MimeType_Read = {
  __typename?: "MediaFields_sizes_card_mimeType_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_MimeType_Update = {
  __typename?: "MediaFields_sizes_card_mimeType_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Url = {
  __typename?: "MediaFields_sizes_card_url";
  create?: Maybe<MediaFields_Sizes_Card_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Url_Update>;
};

export type MediaFields_Sizes_Card_Url_Create = {
  __typename?: "MediaFields_sizes_card_url_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Url_Delete = {
  __typename?: "MediaFields_sizes_card_url_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Url_Read = {
  __typename?: "MediaFields_sizes_card_url_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Url_Update = {
  __typename?: "MediaFields_sizes_card_url_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Width = {
  __typename?: "MediaFields_sizes_card_width";
  create?: Maybe<MediaFields_Sizes_Card_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Width_Update>;
};

export type MediaFields_Sizes_Card_Width_Create = {
  __typename?: "MediaFields_sizes_card_width_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Width_Delete = {
  __typename?: "MediaFields_sizes_card_width_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Width_Read = {
  __typename?: "MediaFields_sizes_card_width_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Card_Width_Update = {
  __typename?: "MediaFields_sizes_card_width_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet = {
  __typename?: "MediaFields_sizes_tablet";
  create?: Maybe<MediaFields_Sizes_Tablet_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Delete>;
  fields?: Maybe<MediaFields_Sizes_Tablet_Fields>;
  read?: Maybe<MediaFields_Sizes_Tablet_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Update>;
};

export type MediaFields_Sizes_Tablet_Create = {
  __typename?: "MediaFields_sizes_tablet_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Delete = {
  __typename?: "MediaFields_sizes_tablet_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Fields = {
  __typename?: "MediaFields_sizes_tablet_Fields";
  filename?: Maybe<MediaFields_Sizes_Tablet_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Tablet_Filesize>;
  height?: Maybe<MediaFields_Sizes_Tablet_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Tablet_MimeType>;
  url?: Maybe<MediaFields_Sizes_Tablet_Url>;
  width?: Maybe<MediaFields_Sizes_Tablet_Width>;
};

export type MediaFields_Sizes_Tablet_Read = {
  __typename?: "MediaFields_sizes_tablet_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Update = {
  __typename?: "MediaFields_sizes_tablet_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Filename = {
  __typename?: "MediaFields_sizes_tablet_filename";
  create?: Maybe<MediaFields_Sizes_Tablet_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Filename_Update>;
};

export type MediaFields_Sizes_Tablet_Filename_Create = {
  __typename?: "MediaFields_sizes_tablet_filename_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Filename_Delete = {
  __typename?: "MediaFields_sizes_tablet_filename_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Filename_Read = {
  __typename?: "MediaFields_sizes_tablet_filename_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Filename_Update = {
  __typename?: "MediaFields_sizes_tablet_filename_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Filesize = {
  __typename?: "MediaFields_sizes_tablet_filesize";
  create?: Maybe<MediaFields_Sizes_Tablet_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Filesize_Update>;
};

export type MediaFields_Sizes_Tablet_Filesize_Create = {
  __typename?: "MediaFields_sizes_tablet_filesize_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Filesize_Delete = {
  __typename?: "MediaFields_sizes_tablet_filesize_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Filesize_Read = {
  __typename?: "MediaFields_sizes_tablet_filesize_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Filesize_Update = {
  __typename?: "MediaFields_sizes_tablet_filesize_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Height = {
  __typename?: "MediaFields_sizes_tablet_height";
  create?: Maybe<MediaFields_Sizes_Tablet_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Height_Update>;
};

export type MediaFields_Sizes_Tablet_Height_Create = {
  __typename?: "MediaFields_sizes_tablet_height_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Height_Delete = {
  __typename?: "MediaFields_sizes_tablet_height_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Height_Read = {
  __typename?: "MediaFields_sizes_tablet_height_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Height_Update = {
  __typename?: "MediaFields_sizes_tablet_height_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_MimeType = {
  __typename?: "MediaFields_sizes_tablet_mimeType";
  create?: Maybe<MediaFields_Sizes_Tablet_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_MimeType_Update>;
};

export type MediaFields_Sizes_Tablet_MimeType_Create = {
  __typename?: "MediaFields_sizes_tablet_mimeType_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_MimeType_Delete = {
  __typename?: "MediaFields_sizes_tablet_mimeType_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_MimeType_Read = {
  __typename?: "MediaFields_sizes_tablet_mimeType_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_MimeType_Update = {
  __typename?: "MediaFields_sizes_tablet_mimeType_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Url = {
  __typename?: "MediaFields_sizes_tablet_url";
  create?: Maybe<MediaFields_Sizes_Tablet_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Url_Update>;
};

export type MediaFields_Sizes_Tablet_Url_Create = {
  __typename?: "MediaFields_sizes_tablet_url_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Url_Delete = {
  __typename?: "MediaFields_sizes_tablet_url_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Url_Read = {
  __typename?: "MediaFields_sizes_tablet_url_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Url_Update = {
  __typename?: "MediaFields_sizes_tablet_url_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Width = {
  __typename?: "MediaFields_sizes_tablet_width";
  create?: Maybe<MediaFields_Sizes_Tablet_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Tablet_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Tablet_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Tablet_Width_Update>;
};

export type MediaFields_Sizes_Tablet_Width_Create = {
  __typename?: "MediaFields_sizes_tablet_width_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Width_Delete = {
  __typename?: "MediaFields_sizes_tablet_width_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Width_Read = {
  __typename?: "MediaFields_sizes_tablet_width_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Tablet_Width_Update = {
  __typename?: "MediaFields_sizes_tablet_width_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail = {
  __typename?: "MediaFields_sizes_thumbnail";
  create?: Maybe<MediaFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<MediaFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Update>;
};

export type MediaFields_Sizes_Thumbnail_Create = {
  __typename?: "MediaFields_sizes_thumbnail_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Delete = {
  __typename?: "MediaFields_sizes_thumbnail_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Fields = {
  __typename?: "MediaFields_sizes_thumbnail_Fields";
  filename?: Maybe<MediaFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<MediaFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<MediaFields_Sizes_Thumbnail_Url>;
  width?: Maybe<MediaFields_Sizes_Thumbnail_Width>;
};

export type MediaFields_Sizes_Thumbnail_Read = {
  __typename?: "MediaFields_sizes_thumbnail_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Update = {
  __typename?: "MediaFields_sizes_thumbnail_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Filename = {
  __typename?: "MediaFields_sizes_thumbnail_filename";
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filename_Create = {
  __typename?: "MediaFields_sizes_thumbnail_filename_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Filename_Delete = {
  __typename?: "MediaFields_sizes_thumbnail_filename_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Filename_Read = {
  __typename?: "MediaFields_sizes_thumbnail_filename_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Filename_Update = {
  __typename?: "MediaFields_sizes_thumbnail_filename_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Filesize = {
  __typename?: "MediaFields_sizes_thumbnail_filesize";
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filesize_Create = {
  __typename?: "MediaFields_sizes_thumbnail_filesize_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Delete = {
  __typename?: "MediaFields_sizes_thumbnail_filesize_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Read = {
  __typename?: "MediaFields_sizes_thumbnail_filesize_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Update = {
  __typename?: "MediaFields_sizes_thumbnail_filesize_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Height = {
  __typename?: "MediaFields_sizes_thumbnail_height";
  create?: Maybe<MediaFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaFields_Sizes_Thumbnail_Height_Create = {
  __typename?: "MediaFields_sizes_thumbnail_height_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Height_Delete = {
  __typename?: "MediaFields_sizes_thumbnail_height_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Height_Read = {
  __typename?: "MediaFields_sizes_thumbnail_height_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Height_Update = {
  __typename?: "MediaFields_sizes_thumbnail_height_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_MimeType = {
  __typename?: "MediaFields_sizes_thumbnail_mimeType";
  create?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaFields_Sizes_Thumbnail_MimeType_Create = {
  __typename?: "MediaFields_sizes_thumbnail_mimeType_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Delete = {
  __typename?: "MediaFields_sizes_thumbnail_mimeType_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Read = {
  __typename?: "MediaFields_sizes_thumbnail_mimeType_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Update = {
  __typename?: "MediaFields_sizes_thumbnail_mimeType_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Url = {
  __typename?: "MediaFields_sizes_thumbnail_url";
  create?: Maybe<MediaFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaFields_Sizes_Thumbnail_Url_Create = {
  __typename?: "MediaFields_sizes_thumbnail_url_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Url_Delete = {
  __typename?: "MediaFields_sizes_thumbnail_url_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Url_Read = {
  __typename?: "MediaFields_sizes_thumbnail_url_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Url_Update = {
  __typename?: "MediaFields_sizes_thumbnail_url_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Width = {
  __typename?: "MediaFields_sizes_thumbnail_width";
  create?: Maybe<MediaFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaFields_Sizes_Thumbnail_Width_Create = {
  __typename?: "MediaFields_sizes_thumbnail_width_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Width_Delete = {
  __typename?: "MediaFields_sizes_thumbnail_width_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Width_Read = {
  __typename?: "MediaFields_sizes_thumbnail_width_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Sizes_Thumbnail_Width_Update = {
  __typename?: "MediaFields_sizes_thumbnail_width_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Url = {
  __typename?: "MediaFields_url";
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: "MediaFields_url_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Url_Delete = {
  __typename?: "MediaFields_url_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Url_Read = {
  __typename?: "MediaFields_url_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Url_Update = {
  __typename?: "MediaFields_url_Update";
  permission: Scalars["Boolean"];
};

export type MediaFields_Width = {
  __typename?: "MediaFields_width";
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: "MediaFields_width_Create";
  permission: Scalars["Boolean"];
};

export type MediaFields_Width_Delete = {
  __typename?: "MediaFields_width_Delete";
  permission: Scalars["Boolean"];
};

export type MediaFields_Width_Read = {
  __typename?: "MediaFields_width_Read";
  permission: Scalars["Boolean"];
};

export type MediaFields_Width_Update = {
  __typename?: "MediaFields_width_Update";
  permission: Scalars["Boolean"];
};

export type MediaReadAccess = {
  __typename?: "MediaReadAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type MediaUpdateAccess = {
  __typename?: "MediaUpdateAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type Media_Sizes = {
  __typename?: "Media_Sizes";
  card?: Maybe<Media_Sizes_Card>;
  tablet?: Maybe<Media_Sizes_Tablet>;
  thumbnail?: Maybe<Media_Sizes_Thumbnail>;
};

export type Media_Sizes_Card = {
  __typename?: "Media_Sizes_card";
  filename?: Maybe<Scalars["String"]>;
  filesize?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type Media_Sizes_Tablet = {
  __typename?: "Media_Sizes_tablet";
  filename?: Maybe<Scalars["String"]>;
  filesize?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type Media_Sizes_Thumbnail = {
  __typename?: "Media_Sizes_thumbnail";
  filename?: Maybe<Scalars["String"]>;
  filesize?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type Media_Titel_Operator = {
  contains?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<Scalars["String"]>;
  not_equals?: InputMaybe<Scalars["String"]>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["DateTime"]>;
  greater_than_equal?: InputMaybe<Scalars["DateTime"]>;
  less_than?: InputMaybe<Scalars["DateTime"]>;
  less_than_equal?: InputMaybe<Scalars["DateTime"]>;
  like?: InputMaybe<Scalars["DateTime"]>;
  not_equals?: InputMaybe<Scalars["DateTime"]>;
};

export type Media_Filename_Operator = {
  contains?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<Scalars["String"]>;
  not_equals?: InputMaybe<Scalars["String"]>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars["Float"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["Float"]>;
  greater_than_equal?: InputMaybe<Scalars["Float"]>;
  less_than?: InputMaybe<Scalars["Float"]>;
  less_than_equal?: InputMaybe<Scalars["Float"]>;
  not_equals?: InputMaybe<Scalars["Float"]>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars["Float"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["Float"]>;
  greater_than_equal?: InputMaybe<Scalars["Float"]>;
  less_than?: InputMaybe<Scalars["Float"]>;
  less_than_equal?: InputMaybe<Scalars["Float"]>;
  not_equals?: InputMaybe<Scalars["Float"]>;
};

export type Media_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  equals?: InputMaybe<Scalars["JSON"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  not_equals?: InputMaybe<Scalars["JSON"]>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
};

export type Media_MimeType_Operator = {
  contains?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<Scalars["String"]>;
  not_equals?: InputMaybe<Scalars["String"]>;
};

export type Media_Sizes__Card__Filename_Operator = {
  contains?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<Scalars["String"]>;
  not_equals?: InputMaybe<Scalars["String"]>;
};

export type Media_Sizes__Card__Filesize_Operator = {
  equals?: InputMaybe<Scalars["Float"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["Float"]>;
  greater_than_equal?: InputMaybe<Scalars["Float"]>;
  less_than?: InputMaybe<Scalars["Float"]>;
  less_than_equal?: InputMaybe<Scalars["Float"]>;
  not_equals?: InputMaybe<Scalars["Float"]>;
};

export type Media_Sizes__Card__Height_Operator = {
  equals?: InputMaybe<Scalars["Float"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["Float"]>;
  greater_than_equal?: InputMaybe<Scalars["Float"]>;
  less_than?: InputMaybe<Scalars["Float"]>;
  less_than_equal?: InputMaybe<Scalars["Float"]>;
  not_equals?: InputMaybe<Scalars["Float"]>;
};

export type Media_Sizes__Card__MimeType_Operator = {
  contains?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<Scalars["String"]>;
  not_equals?: InputMaybe<Scalars["String"]>;
};

export type Media_Sizes__Card__Url_Operator = {
  contains?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<Scalars["String"]>;
  not_equals?: InputMaybe<Scalars["String"]>;
};

export type Media_Sizes__Card__Width_Operator = {
  equals?: InputMaybe<Scalars["Float"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["Float"]>;
  greater_than_equal?: InputMaybe<Scalars["Float"]>;
  less_than?: InputMaybe<Scalars["Float"]>;
  less_than_equal?: InputMaybe<Scalars["Float"]>;
  not_equals?: InputMaybe<Scalars["Float"]>;
};

export type Media_Sizes__Tablet__Filename_Operator = {
  contains?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<Scalars["String"]>;
  not_equals?: InputMaybe<Scalars["String"]>;
};

export type Media_Sizes__Tablet__Filesize_Operator = {
  equals?: InputMaybe<Scalars["Float"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["Float"]>;
  greater_than_equal?: InputMaybe<Scalars["Float"]>;
  less_than?: InputMaybe<Scalars["Float"]>;
  less_than_equal?: InputMaybe<Scalars["Float"]>;
  not_equals?: InputMaybe<Scalars["Float"]>;
};

export type Media_Sizes__Tablet__Height_Operator = {
  equals?: InputMaybe<Scalars["Float"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["Float"]>;
  greater_than_equal?: InputMaybe<Scalars["Float"]>;
  less_than?: InputMaybe<Scalars["Float"]>;
  less_than_equal?: InputMaybe<Scalars["Float"]>;
  not_equals?: InputMaybe<Scalars["Float"]>;
};

export type Media_Sizes__Tablet__MimeType_Operator = {
  contains?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<Scalars["String"]>;
  not_equals?: InputMaybe<Scalars["String"]>;
};

export type Media_Sizes__Tablet__Url_Operator = {
  contains?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<Scalars["String"]>;
  not_equals?: InputMaybe<Scalars["String"]>;
};

export type Media_Sizes__Tablet__Width_Operator = {
  equals?: InputMaybe<Scalars["Float"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["Float"]>;
  greater_than_equal?: InputMaybe<Scalars["Float"]>;
  less_than?: InputMaybe<Scalars["Float"]>;
  less_than_equal?: InputMaybe<Scalars["Float"]>;
  not_equals?: InputMaybe<Scalars["Float"]>;
};

export type Media_Sizes__Thumbnail__Filename_Operator = {
  contains?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<Scalars["String"]>;
  not_equals?: InputMaybe<Scalars["String"]>;
};

export type Media_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars["Float"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["Float"]>;
  greater_than_equal?: InputMaybe<Scalars["Float"]>;
  less_than?: InputMaybe<Scalars["Float"]>;
  less_than_equal?: InputMaybe<Scalars["Float"]>;
  not_equals?: InputMaybe<Scalars["Float"]>;
};

export type Media_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars["Float"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["Float"]>;
  greater_than_equal?: InputMaybe<Scalars["Float"]>;
  less_than?: InputMaybe<Scalars["Float"]>;
  less_than_equal?: InputMaybe<Scalars["Float"]>;
  not_equals?: InputMaybe<Scalars["Float"]>;
};

export type Media_Sizes__Thumbnail__MimeType_Operator = {
  contains?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<Scalars["String"]>;
  not_equals?: InputMaybe<Scalars["String"]>;
};

export type Media_Sizes__Thumbnail__Url_Operator = {
  contains?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<Scalars["String"]>;
  not_equals?: InputMaybe<Scalars["String"]>;
};

export type Media_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars["Float"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["Float"]>;
  greater_than_equal?: InputMaybe<Scalars["Float"]>;
  less_than?: InputMaybe<Scalars["Float"]>;
  less_than_equal?: InputMaybe<Scalars["Float"]>;
  not_equals?: InputMaybe<Scalars["Float"]>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["DateTime"]>;
  greater_than_equal?: InputMaybe<Scalars["DateTime"]>;
  less_than?: InputMaybe<Scalars["DateTime"]>;
  less_than_equal?: InputMaybe<Scalars["DateTime"]>;
  like?: InputMaybe<Scalars["DateTime"]>;
  not_equals?: InputMaybe<Scalars["DateTime"]>;
};

export type Media_Url_Operator = {
  contains?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<Scalars["String"]>;
  not_equals?: InputMaybe<Scalars["String"]>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  Titel?: InputMaybe<Media_Titel_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Media_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Media_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Media_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Media_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Media_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Media_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  Titel?: InputMaybe<Media_Titel_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Media_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Media_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Media_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Media_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Media_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Media_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  Titel?: InputMaybe<Media_Titel_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__tablet__filename?: InputMaybe<Media_Sizes__Tablet__Filename_Operator>;
  sizes__tablet__filesize?: InputMaybe<Media_Sizes__Tablet__Filesize_Operator>;
  sizes__tablet__height?: InputMaybe<Media_Sizes__Tablet__Height_Operator>;
  sizes__tablet__mimeType?: InputMaybe<Media_Sizes__Tablet__MimeType_Operator>;
  sizes__tablet__url?: InputMaybe<Media_Sizes__Tablet__Url_Operator>;
  sizes__tablet__width?: InputMaybe<Media_Sizes__Tablet__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars["Float"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["Float"]>;
  greater_than_equal?: InputMaybe<Scalars["Float"]>;
  less_than?: InputMaybe<Scalars["Float"]>;
  less_than_equal?: InputMaybe<Scalars["Float"]>;
  not_equals?: InputMaybe<Scalars["Float"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createEvenement?: Maybe<Evenement>;
  createMedia?: Maybe<Media>;
  createTicket?: Maybe<Ticket>;
  createUser?: Maybe<User>;
  deleteEvenement?: Maybe<Evenement>;
  deleteMedia?: Maybe<Media>;
  deletePreference?: Maybe<Preference>;
  deleteTicket?: Maybe<Ticket>;
  deleteUser?: Maybe<User>;
  forgotPasswordUser: Scalars["Boolean"];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars["String"]>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  unlockUser: Scalars["Boolean"];
  updateEvenement?: Maybe<Evenement>;
  updateMedia?: Maybe<Media>;
  updatePreference?: Maybe<Preference>;
  updateTicket?: Maybe<Ticket>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars["Boolean"]>;
};

export type MutationCreateEvenementArgs = {
  data: MutationEvenementInput;
  draft?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationCreateTicketArgs = {
  data: MutationTicketInput;
  draft?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationDeleteEvenementArgs = {
  id: Scalars["String"];
};

export type MutationDeleteMediaArgs = {
  id: Scalars["String"];
};

export type MutationDeletePreferenceArgs = {
  key: Scalars["String"];
};

export type MutationDeleteTicketArgs = {
  id: Scalars["String"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["String"];
};

export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars["Boolean"]>;
  email: Scalars["String"];
  expiration?: InputMaybe<Scalars["Int"]>;
};

export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
};

export type MutationRefreshTokenUserArgs = {
  token?: InputMaybe<Scalars["String"]>;
};

export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars["String"]>;
  token?: InputMaybe<Scalars["String"]>;
};

export type MutationUnlockUserArgs = {
  email: Scalars["String"];
};

export type MutationUpdateEvenementArgs = {
  autosave?: InputMaybe<Scalars["Boolean"]>;
  data: MutationEvenementUpdateInput;
  draft?: InputMaybe<Scalars["Boolean"]>;
  id: Scalars["String"];
};

export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars["Boolean"]>;
  data: MutationMediaUpdateInput;
  draft?: InputMaybe<Scalars["Boolean"]>;
  id: Scalars["String"];
};

export type MutationUpdatePreferenceArgs = {
  key: Scalars["String"];
  value?: InputMaybe<Scalars["JSON"]>;
};

export type MutationUpdateTicketArgs = {
  autosave?: InputMaybe<Scalars["Boolean"]>;
  data: MutationTicketUpdateInput;
  draft?: InputMaybe<Scalars["Boolean"]>;
  id: Scalars["String"];
};

export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars["Boolean"]>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars["Boolean"]>;
  id: Scalars["String"];
};

export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars["String"]>;
};

export type Preference = {
  __typename?: "Preference";
  createdAt: Scalars["DateTime"];
  key: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  value?: Maybe<Scalars["JSON"]>;
};

export type Query = {
  __typename?: "Query";
  Access?: Maybe<Access>;
  Evenement?: Maybe<Evenement>;
  Evenements?: Maybe<Evenements>;
  Media?: Maybe<Media>;
  Preference?: Maybe<Preference>;
  Ticket?: Maybe<Ticket>;
  Tickets?: Maybe<Tickets>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<AllMedia>;
  initializedUser?: Maybe<Scalars["Boolean"]>;
  meUser?: Maybe<UsersMe>;
};

export type QueryEvenementArgs = {
  draft?: InputMaybe<Scalars["Boolean"]>;
  id: Scalars["String"];
};

export type QueryEvenementsArgs = {
  draft?: InputMaybe<Scalars["Boolean"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<Evenement_Where>;
};

export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars["Boolean"]>;
  id: Scalars["String"];
};

export type QueryPreferenceArgs = {
  key?: InputMaybe<Scalars["String"]>;
};

export type QueryTicketArgs = {
  draft?: InputMaybe<Scalars["Boolean"]>;
  id: Scalars["String"];
};

export type QueryTicketsArgs = {
  draft?: InputMaybe<Scalars["Boolean"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<Ticket_Where>;
};

export type QueryUserArgs = {
  draft?: InputMaybe<Scalars["Boolean"]>;
  id: Scalars["String"];
};

export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars["Boolean"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<User_Where>;
};

export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars["Boolean"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<Scalars["String"]>;
  where?: InputMaybe<Media_Where>;
};

export type Ticket = {
  __typename?: "Ticket";
  Evenement?: Maybe<Evenement>;
  createdAt: Scalars["DateTime"];
  id?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
};

export type TicketAccess = {
  __typename?: "TicketAccess";
  create?: Maybe<TicketCreateAccess>;
  delete?: Maybe<TicketDeleteAccess>;
  fields?: Maybe<TicketFields>;
  read?: Maybe<TicketReadAccess>;
  update?: Maybe<TicketUpdateAccess>;
};

export type TicketCreateAccess = {
  __typename?: "TicketCreateAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type TicketDeleteAccess = {
  __typename?: "TicketDeleteAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type TicketFields = {
  __typename?: "TicketFields";
  Evenement?: Maybe<TicketFields_Evenement>;
};

export type TicketFields_Evenement = {
  __typename?: "TicketFields_Evenement";
  create?: Maybe<TicketFields_Evenement_Create>;
  delete?: Maybe<TicketFields_Evenement_Delete>;
  read?: Maybe<TicketFields_Evenement_Read>;
  update?: Maybe<TicketFields_Evenement_Update>;
};

export type TicketFields_Evenement_Create = {
  __typename?: "TicketFields_Evenement_Create";
  permission: Scalars["Boolean"];
};

export type TicketFields_Evenement_Delete = {
  __typename?: "TicketFields_Evenement_Delete";
  permission: Scalars["Boolean"];
};

export type TicketFields_Evenement_Read = {
  __typename?: "TicketFields_Evenement_Read";
  permission: Scalars["Boolean"];
};

export type TicketFields_Evenement_Update = {
  __typename?: "TicketFields_Evenement_Update";
  permission: Scalars["Boolean"];
};

export type TicketReadAccess = {
  __typename?: "TicketReadAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type TicketUpdateAccess = {
  __typename?: "TicketUpdateAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type Ticket_Evenement_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  not_equals?: InputMaybe<Scalars["String"]>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type Ticket_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["DateTime"]>;
  greater_than_equal?: InputMaybe<Scalars["DateTime"]>;
  less_than?: InputMaybe<Scalars["DateTime"]>;
  less_than_equal?: InputMaybe<Scalars["DateTime"]>;
  like?: InputMaybe<Scalars["DateTime"]>;
  not_equals?: InputMaybe<Scalars["DateTime"]>;
};

export type Ticket_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  equals?: InputMaybe<Scalars["JSON"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  not_equals?: InputMaybe<Scalars["JSON"]>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
};

export type Ticket_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["DateTime"]>;
  greater_than_equal?: InputMaybe<Scalars["DateTime"]>;
  less_than?: InputMaybe<Scalars["DateTime"]>;
  less_than_equal?: InputMaybe<Scalars["DateTime"]>;
  like?: InputMaybe<Scalars["DateTime"]>;
  not_equals?: InputMaybe<Scalars["DateTime"]>;
};

export type Ticket_Where = {
  AND?: InputMaybe<Array<InputMaybe<Ticket_Where_And>>>;
  Evenement?: InputMaybe<Ticket_Evenement_Operator>;
  OR?: InputMaybe<Array<InputMaybe<Ticket_Where_Or>>>;
  createdAt?: InputMaybe<Ticket_CreatedAt_Operator>;
  id?: InputMaybe<Ticket_Id_Operator>;
  updatedAt?: InputMaybe<Ticket_UpdatedAt_Operator>;
};

export type Ticket_Where_And = {
  Evenement?: InputMaybe<Ticket_Evenement_Operator>;
  createdAt?: InputMaybe<Ticket_CreatedAt_Operator>;
  id?: InputMaybe<Ticket_Id_Operator>;
  updatedAt?: InputMaybe<Ticket_UpdatedAt_Operator>;
};

export type Ticket_Where_Or = {
  Evenement?: InputMaybe<Ticket_Evenement_Operator>;
  createdAt?: InputMaybe<Ticket_CreatedAt_Operator>;
  id?: InputMaybe<Ticket_Id_Operator>;
  updatedAt?: InputMaybe<Ticket_UpdatedAt_Operator>;
};

export type Tickets = {
  __typename?: "Tickets";
  docs?: Maybe<Array<Maybe<Ticket>>>;
  hasNextPage?: Maybe<Scalars["Boolean"]>;
  hasPrevPage?: Maybe<Scalars["Boolean"]>;
  limit?: Maybe<Scalars["Int"]>;
  nextPage?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
  pagingCounter?: Maybe<Scalars["Int"]>;
  prevPage?: Maybe<Scalars["Int"]>;
  totalDocs?: Maybe<Scalars["Int"]>;
  totalPages?: Maybe<Scalars["Int"]>;
};

export type User = {
  __typename?: "User";
  Betaald?: Maybe<Scalars["Boolean"]>;
  Tickets?: Maybe<Array<Ticket>>;
  createdAt: Scalars["DateTime"];
  email?: Maybe<Scalars["EmailAddress"]>;
  id?: Maybe<Scalars["String"]>;
  lockUntil?: Maybe<Scalars["DateTime"]>;
  loginAttempts?: Maybe<Scalars["Float"]>;
  password: Scalars["String"];
  resetPasswordExpiration?: Maybe<Scalars["DateTime"]>;
  resetPasswordToken?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
};

export type UserAccess = {
  __typename?: "UserAccess";
  create?: Maybe<UserCreateAccess>;
  delete?: Maybe<UserDeleteAccess>;
  fields?: Maybe<UserFields>;
  read?: Maybe<UserReadAccess>;
  unlock?: Maybe<UserUnlockAccess>;
  update?: Maybe<UserUpdateAccess>;
};

export type UserCreateAccess = {
  __typename?: "UserCreateAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type UserDeleteAccess = {
  __typename?: "UserDeleteAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type UserFields = {
  __typename?: "UserFields";
  Betaald?: Maybe<UserFields_Betaald>;
  Tickets?: Maybe<UserFields_Tickets>;
  email?: Maybe<UserFields_Email>;
  password?: Maybe<UserFields_Password>;
};

export type UserFields_Betaald = {
  __typename?: "UserFields_Betaald";
  create?: Maybe<UserFields_Betaald_Create>;
  delete?: Maybe<UserFields_Betaald_Delete>;
  read?: Maybe<UserFields_Betaald_Read>;
  update?: Maybe<UserFields_Betaald_Update>;
};

export type UserFields_Betaald_Create = {
  __typename?: "UserFields_Betaald_Create";
  permission: Scalars["Boolean"];
};

export type UserFields_Betaald_Delete = {
  __typename?: "UserFields_Betaald_Delete";
  permission: Scalars["Boolean"];
};

export type UserFields_Betaald_Read = {
  __typename?: "UserFields_Betaald_Read";
  permission: Scalars["Boolean"];
};

export type UserFields_Betaald_Update = {
  __typename?: "UserFields_Betaald_Update";
  permission: Scalars["Boolean"];
};

export type UserFields_Tickets = {
  __typename?: "UserFields_Tickets";
  create?: Maybe<UserFields_Tickets_Create>;
  delete?: Maybe<UserFields_Tickets_Delete>;
  read?: Maybe<UserFields_Tickets_Read>;
  update?: Maybe<UserFields_Tickets_Update>;
};

export type UserFields_Tickets_Create = {
  __typename?: "UserFields_Tickets_Create";
  permission: Scalars["Boolean"];
};

export type UserFields_Tickets_Delete = {
  __typename?: "UserFields_Tickets_Delete";
  permission: Scalars["Boolean"];
};

export type UserFields_Tickets_Read = {
  __typename?: "UserFields_Tickets_Read";
  permission: Scalars["Boolean"];
};

export type UserFields_Tickets_Update = {
  __typename?: "UserFields_Tickets_Update";
  permission: Scalars["Boolean"];
};

export type UserFields_Email = {
  __typename?: "UserFields_email";
  create?: Maybe<UserFields_Email_Create>;
  delete?: Maybe<UserFields_Email_Delete>;
  read?: Maybe<UserFields_Email_Read>;
  update?: Maybe<UserFields_Email_Update>;
};

export type UserFields_Email_Create = {
  __typename?: "UserFields_email_Create";
  permission: Scalars["Boolean"];
};

export type UserFields_Email_Delete = {
  __typename?: "UserFields_email_Delete";
  permission: Scalars["Boolean"];
};

export type UserFields_Email_Read = {
  __typename?: "UserFields_email_Read";
  permission: Scalars["Boolean"];
};

export type UserFields_Email_Update = {
  __typename?: "UserFields_email_Update";
  permission: Scalars["Boolean"];
};

export type UserFields_Password = {
  __typename?: "UserFields_password";
  create?: Maybe<UserFields_Password_Create>;
  delete?: Maybe<UserFields_Password_Delete>;
  read?: Maybe<UserFields_Password_Read>;
  update?: Maybe<UserFields_Password_Update>;
};

export type UserFields_Password_Create = {
  __typename?: "UserFields_password_Create";
  permission: Scalars["Boolean"];
};

export type UserFields_Password_Delete = {
  __typename?: "UserFields_password_Delete";
  permission: Scalars["Boolean"];
};

export type UserFields_Password_Read = {
  __typename?: "UserFields_password_Read";
  permission: Scalars["Boolean"];
};

export type UserFields_Password_Update = {
  __typename?: "UserFields_password_Update";
  permission: Scalars["Boolean"];
};

export type UserReadAccess = {
  __typename?: "UserReadAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type UserUnlockAccess = {
  __typename?: "UserUnlockAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type UserUpdateAccess = {
  __typename?: "UserUpdateAccess";
  permission: Scalars["Boolean"];
  where?: Maybe<Scalars["JSONObject"]>;
};

export type User_Betaald_Operator = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  not_equals?: InputMaybe<Scalars["Boolean"]>;
};

export type User_Tickets_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  equals?: InputMaybe<Scalars["String"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  not_equals?: InputMaybe<Scalars["String"]>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["DateTime"]>;
  greater_than_equal?: InputMaybe<Scalars["DateTime"]>;
  less_than?: InputMaybe<Scalars["DateTime"]>;
  less_than_equal?: InputMaybe<Scalars["DateTime"]>;
  like?: InputMaybe<Scalars["DateTime"]>;
  not_equals?: InputMaybe<Scalars["DateTime"]>;
};

export type User_Email_Operator = {
  contains?: InputMaybe<Scalars["EmailAddress"]>;
  equals?: InputMaybe<Scalars["EmailAddress"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<Scalars["EmailAddress"]>;
  not_equals?: InputMaybe<Scalars["EmailAddress"]>;
};

export type User_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  equals?: InputMaybe<Scalars["JSON"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  not_equals?: InputMaybe<Scalars["JSON"]>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  exists?: InputMaybe<Scalars["Boolean"]>;
  greater_than?: InputMaybe<Scalars["DateTime"]>;
  greater_than_equal?: InputMaybe<Scalars["DateTime"]>;
  less_than?: InputMaybe<Scalars["DateTime"]>;
  less_than_equal?: InputMaybe<Scalars["DateTime"]>;
  like?: InputMaybe<Scalars["DateTime"]>;
  not_equals?: InputMaybe<Scalars["DateTime"]>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  Betaald?: InputMaybe<User_Betaald_Operator>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  Tickets?: InputMaybe<User_Tickets_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  Betaald?: InputMaybe<User_Betaald_Operator>;
  Tickets?: InputMaybe<User_Tickets_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  Betaald?: InputMaybe<User_Betaald_Operator>;
  Tickets?: InputMaybe<User_Tickets_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: "Users";
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars["Boolean"]>;
  hasPrevPage?: Maybe<Scalars["Boolean"]>;
  limit?: Maybe<Scalars["Int"]>;
  nextPage?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
  pagingCounter?: Maybe<Scalars["Int"]>;
  prevPage?: Maybe<Scalars["Int"]>;
  totalDocs?: Maybe<Scalars["Int"]>;
  totalPages?: Maybe<Scalars["Int"]>;
};

export type AllMedia = {
  __typename?: "allMedia";
  docs?: Maybe<Array<Maybe<Media>>>;
  hasNextPage?: Maybe<Scalars["Boolean"]>;
  hasPrevPage?: Maybe<Scalars["Boolean"]>;
  limit?: Maybe<Scalars["Int"]>;
  nextPage?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
  pagingCounter?: Maybe<Scalars["Int"]>;
  prevPage?: Maybe<Scalars["Int"]>;
  totalDocs?: Maybe<Scalars["Int"]>;
  totalPages?: Maybe<Scalars["Int"]>;
};

export type MutationEvenementInput = {
  Banner?: InputMaybe<Scalars["String"]>;
  Beschrijving?: InputMaybe<Scalars["String"]>;
  Datum?: InputMaybe<Scalars["String"]>;
  Slug?: InputMaybe<Scalars["String"]>;
  Titel?: InputMaybe<Scalars["String"]>;
};

export type MutationEvenementUpdateInput = {
  Banner?: InputMaybe<Scalars["String"]>;
  Beschrijving?: InputMaybe<Scalars["String"]>;
  Datum?: InputMaybe<Scalars["String"]>;
  Slug?: InputMaybe<Scalars["String"]>;
  Titel?: InputMaybe<Scalars["String"]>;
};

export type MutationMediaInput = {
  Titel?: InputMaybe<Scalars["String"]>;
  filename?: InputMaybe<Scalars["String"]>;
  filesize?: InputMaybe<Scalars["Float"]>;
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  sizes?: InputMaybe<MutationMedia_SizesInput>;
  url?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type MutationMediaUpdateInput = {
  Titel?: InputMaybe<Scalars["String"]>;
  filename?: InputMaybe<Scalars["String"]>;
  filesize?: InputMaybe<Scalars["Float"]>;
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  sizes?: InputMaybe<MutationMediaUpdate_SizesInput>;
  url?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type MutationMediaUpdate_SizesInput = {
  card?: InputMaybe<MutationMediaUpdate_Sizes_CardInput>;
  tablet?: InputMaybe<MutationMediaUpdate_Sizes_TabletInput>;
  thumbnail?: InputMaybe<MutationMediaUpdate_Sizes_ThumbnailInput>;
};

export type MutationMediaUpdate_Sizes_CardInput = {
  filename?: InputMaybe<Scalars["String"]>;
  filesize?: InputMaybe<Scalars["Float"]>;
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type MutationMediaUpdate_Sizes_TabletInput = {
  filename?: InputMaybe<Scalars["String"]>;
  filesize?: InputMaybe<Scalars["Float"]>;
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type MutationMediaUpdate_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars["String"]>;
  filesize?: InputMaybe<Scalars["Float"]>;
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type MutationMedia_SizesInput = {
  card?: InputMaybe<MutationMedia_Sizes_CardInput>;
  tablet?: InputMaybe<MutationMedia_Sizes_TabletInput>;
  thumbnail?: InputMaybe<MutationMedia_Sizes_ThumbnailInput>;
};

export type MutationMedia_Sizes_CardInput = {
  filename?: InputMaybe<Scalars["String"]>;
  filesize?: InputMaybe<Scalars["Float"]>;
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type MutationMedia_Sizes_TabletInput = {
  filename?: InputMaybe<Scalars["String"]>;
  filesize?: InputMaybe<Scalars["Float"]>;
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type MutationMedia_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars["String"]>;
  filesize?: InputMaybe<Scalars["Float"]>;
  height?: InputMaybe<Scalars["Float"]>;
  mimeType?: InputMaybe<Scalars["String"]>;
  url?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type MutationTicketInput = {
  Evenement?: InputMaybe<Scalars["String"]>;
};

export type MutationTicketUpdateInput = {
  Evenement?: InputMaybe<Scalars["String"]>;
};

export type MutationUserInput = {
  Betaald?: InputMaybe<Scalars["Boolean"]>;
  Tickets?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  email?: InputMaybe<Scalars["String"]>;
  lockUntil?: InputMaybe<Scalars["String"]>;
  loginAttempts?: InputMaybe<Scalars["Float"]>;
  password: Scalars["String"];
  resetPasswordExpiration?: InputMaybe<Scalars["String"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]>;
};

export type MutationUserUpdateInput = {
  Betaald?: InputMaybe<Scalars["Boolean"]>;
  Tickets?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  email?: InputMaybe<Scalars["String"]>;
  lockUntil?: InputMaybe<Scalars["String"]>;
  loginAttempts?: InputMaybe<Scalars["Float"]>;
  password?: InputMaybe<Scalars["String"]>;
  resetPasswordExpiration?: InputMaybe<Scalars["String"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]>;
};

export type UsersJwt = {
  __typename?: "usersJWT";
  collection: Scalars["String"];
  email: Scalars["EmailAddress"];
};

export type UsersLoginResult = {
  __typename?: "usersLoginResult";
  exp?: Maybe<Scalars["Int"]>;
  token?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: "usersMe";
  collection?: Maybe<Scalars["String"]>;
  exp?: Maybe<Scalars["Int"]>;
  token?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: "usersRefreshedUser";
  exp?: Maybe<Scalars["Int"]>;
  refreshedToken?: Maybe<Scalars["String"]>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: "usersResetPassword";
  token?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};
