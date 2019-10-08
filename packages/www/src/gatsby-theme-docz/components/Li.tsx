import { ListItem } from '@looker/components'
import styled from 'styled-components'

const Li = styled(ListItem)`
  ${({ theme: { lineHeights, space } }) => `
    line-height: ${lineHeights.medium};
    padding: 0 0 0 ${space.xxsmall};
  `}
`
export default Li
