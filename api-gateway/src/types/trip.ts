export interface ISearchTripQuery {
  pages?: string
  search?: string
  limit?: string
}

export interface ITrip {
  title: string
  eid: string
  url: string
  description: string
  photos: string[]
  tags: string[]
}

export type TripDBResponse = ITrip[]
