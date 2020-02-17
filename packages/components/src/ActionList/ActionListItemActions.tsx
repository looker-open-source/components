import styled from 'styled-components'
import { Icon } from '../Icon'

// TODO: Use IconButton
export const ActionListItemActions = styled(Icon).attrs(() => {
  return {
    name: 'DotsVert',
    size: 36,
  }
})`
  height: 100%;
  cursor: pointer;
`
