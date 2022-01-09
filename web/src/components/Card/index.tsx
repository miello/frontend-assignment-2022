import React, { useCallback } from 'react'
import { scrollToSmoothly } from 'utils/smoothScrolling'
import {
  CardContainer,
  CardTitle,
  CardContentImage,
  CardDescription,
  CardLeftImage,
  CardContentImageContainer,
  CardReadMore,
  CardCatagory,
} from './styled'
import { ICardProps } from './types'

export function Card(props: ICardProps) {
  const { trips: trip, onClickTag } = props

  const onClick = useCallback(
    (tags: string) => {
      if (onClickTag) {
        if (window.scrollY < 100) {
          onClickTag(tags)
          return
        }
        scrollToSmoothly(0, 500, () => onClickTag(tags))
      }
    },
    [onClickTag]
  )

  return (
    <CardContainer>
      <CardLeftImage alt={trip.title} src={trip.photos[0]} />
      <div>
        <CardTitle href={trip.url} target="_blank">
          {trip.title}
        </CardTitle>
        <div style={{ marginBottom: '10px' }}>
          {trip.description.map((description, idx) => (
            <CardDescription
              css={{
                display:
                  idx === trip.description.length - 1 ? 'inline' : 'block',
              }}
              key={`desc-${trip.eid}-${idx}`}
            >
              {description}
            </CardDescription>
          ))}
          <CardDescription
            css={{ marginLeft: '5px', marginRight: '5px', display: 'inline' }}
          >
            ....
          </CardDescription>
          <CardReadMore href={trip.url} target="_blank">
            อ่านต่อ
          </CardReadMore>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <CardCatagory>หมวดหมู่ - </CardCatagory>
          {trip.tags.map((tag, idx) => (
            <React.Fragment key={`tag-${trip.eid}-${idx}`}>
              {idx === trip.tags.length - 1 && (
                <CardCatagory style={{ marginRight: '4px' }}>และ</CardCatagory>
              )}
              <CardCatagory
                clickable={true}
                style={{ marginRight: '4px' }}
                onClick={() => onClick(tag)}
              >
                {tag}
              </CardCatagory>
            </React.Fragment>
          ))}
        </div>
        <CardContentImageContainer>
          {trip.photos.map((imgSrc, idx) => (
            <CardContentImage
              alt={trip.title}
              isFirst={idx === 0}
              key={`img-${trip.eid}-${idx}`}
              src={imgSrc}
            />
          ))}
        </CardContentImageContainer>
      </div>
    </CardContainer>
  )
}
