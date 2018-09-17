import styled from '../../styled_components'

export interface CardMediaProps {
  image: string
}

export const CardMedia = styled.div<CardMediaProps>`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.image});
  overflow: hidden;
  height: 0;
  padding-top: 56%;
`
