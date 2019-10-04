import styled from 'styled-components'
import { backgroundPosition, BackgroundPositionProps } from 'styled-system'
import { CompatibleHTMLProps } from '@looker/design-tokens/src'

export interface CardMediaProps
  extends BackgroundPositionProps,
    CompatibleHTMLProps<HTMLDivElement> {
  image: string
}

export const CardMedia = styled.div<CardMediaProps>`
  background-size: cover;
  background-repeat: no-repeat;
  ${backgroundPosition}
  background-image: url(${props => props.image});
  overflow: hidden;
  height: 0;
  padding-top: 56%;
`
