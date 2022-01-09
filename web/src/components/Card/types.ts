import { ITripData } from 'hooks/useTripData/types'

export interface ICardProps {
  trips: ITripData
  onClickTag?: (tags: string) => void
}
