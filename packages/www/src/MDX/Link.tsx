import { Link as LookerLink } from '@looker/components'
import styled from 'styled-components'

const Link = styled(LookerLink)`
  &:visited {
    color: ${props => props.theme.colors.palette.purple600};
  }
`

export default Link
