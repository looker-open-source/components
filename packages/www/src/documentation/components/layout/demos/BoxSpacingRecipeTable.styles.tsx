import { theme } from '@looker/design-tokens'
import styled from 'styled-components'

export const SpacingTable = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  margin: 2rem 0;
  & > div {
    border-right: 1px solid ${theme.colors.palette.charcoal200};
    &:last-child {
      border-right: none;
    }
  }
`
