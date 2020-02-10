import { space, SpaceProps } from '@looker/design-tokens'
import styled from 'styled-components'

export const ActionListItemColumn = styled.div<SpaceProps>`
  ${space}
`

ActionListItemColumn.defaultProps = {
  px: 'small',
}
