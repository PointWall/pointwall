export type Color = 'red' | 'orange' | 'yellow' | 'green' | 'pink' | 'blue'

export type ColorVariant = {
  [key in Color]: string
}

export interface IUser {
  id: number
  email: string
  providerId: string
  provider: string
  name?: string
  username: string
  bio?: string
  avatar?: string
  organization: Boolean
  is_verified: Boolean
  createdAt: Date
  updatedAt: Date
  posts: IPost[] | null
}

export interface IPost {
  id: number
  title?: string
  content?: string
  is_published: Boolean
  type: string
  authorId: number
  postLocationId?: number | null
  createdAt: Date
  updatedAt: Date
  author: IUser
  location?: IPostLocation | null
  images: IPostImage[] | null
}

export interface IPostImage {
  id: number
  url: string
  width: number
  height: number
  format: string
  blurhash: string
  asset_id: string
  postId: number
  createdAt: Date
  updatedAt: Date
  post?: IPost | null
}

export interface IPostLocation {
  id: number
  latitude: number
  longitude: number
  name: string
  posts: IPost[] | null
}
