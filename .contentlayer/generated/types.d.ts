// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Author = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Author'
  title: string
  username?: string | undefined
  description?: string | undefined
  avatar: string
  twitter: string
  /** MDX file body */
  body: MDX
  slug: string
}

export type Post = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Post'
  title: string
  description?: string | undefined
  date: IsoDateTimeString
  featured?: boolean | undefined
  image: string
  category: string
  author: string
  /** MDX file body */
  body: MDX
  slug: string
}  

/** Nested types */
  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Author | Post
export type DocumentTypeNames = 'Author' | 'Post'

export type NestedTypes = never
export type NestedTypeNames = never

export type DataExports = {
  allDocuments: DocumentTypes[]
  allPosts: Post[]
  allAuthors: Author[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Author: Author
  Post: Post
}

export type NestedTypeMap = {

}

 