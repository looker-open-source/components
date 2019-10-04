import styled from 'styled-components'
import { fontSizes, palette, radii } from '@looker/design-tokens'

export const IconGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, 160px);
  margin-top: 2rem;
`

export const IconGridItem = styled.div`
  text-align: center;
  font-size: ${fontSizes.small};
  cursor: pointer;
  border: 1px solid ${palette.charcoal100};
  padding: 1rem;
  border-radius: ${radii.medium};
  color: ${palette.charcoal600};
  &:hover {
    border-color: ${palette.blue300};
    color: ${palette.blue600};
  }
`
