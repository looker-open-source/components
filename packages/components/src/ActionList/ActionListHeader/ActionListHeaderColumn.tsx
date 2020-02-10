import { space, SpaceProps } from '@looker/design-tokens'
import styled from 'styled-components'

export const ActionListHeaderColumn = styled.div<SpaceProps>`
  ${space}
`

ActionListHeaderColumn.defaultProps = {
  px: 'small',
}
