export interface Post {
  id: number
  title: string
  type: string
  content?: string
  createdAt: string
  updatedAt: string
  tags?: string[]
  author: {
    id: number
    username: string
    email: string
    is_verified?: boolean
    name?: string
    organization?: boolean
    createdAt?: string
    updatedAt?: string
    avatar?: string
    bio?: string
  }
  images: Array<{
    id: number
    url: string
    format: string
    asset_id: string
    blurhash: string
    width: number
    height: number
    postId: number
    createdAt: string
    updatedAt: string
  }>
  location: {
    id: number
    latitude: number
    longitude: number
    country?: string
    establishment?: string
    locality?: string
    name?: string
    political?: string
    route?: string
    street_number?: string
  }
}
