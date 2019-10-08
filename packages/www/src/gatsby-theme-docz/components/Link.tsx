import { Link as LookerLink } from '@looker/components'
import styled from 'styled-components'

const Link = styled(LookerLink)`
  ${({ theme: { colors } }) => `
    color: ${colors.palette.blue600};
    &:visited {
      color: ${colors.palette.purple600};
    }
  `}
`

export default Link
