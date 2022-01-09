export interface ITripData {
  title: string
  eid: string
  url: string
  description: string[]
  photos: string[]
  tags: string[]
}

export interface ITripResponse {
  current: number
  allPages: number
  trips: {
    title: string
    eid: string
    url: string
    description: string
    photos: string[]
    tags: string[]
  }[]
}
