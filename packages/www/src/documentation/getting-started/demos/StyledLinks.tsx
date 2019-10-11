import { Link } from '@looker/components'
import styled from 'styled-components'

export const VisitedLink = styled(Link)`
  :visited {
    color: ${props => props.theme.colors.palette.red400};
  }
`

export const HoverLink = styled(Link)`
  :visited {
    color: ${props => props.theme.colors.palette.red400};
  }

  :hover {
    text-decoration: ${(props: any) =>
      props.visited ? 'line-through' : 'underline'};
  }
`
