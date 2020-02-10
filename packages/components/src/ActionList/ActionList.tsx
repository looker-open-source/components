import { typography, TypographyProps } from '@looker/design-tokens'
import styled from 'styled-components'
import { ActionListHeader } from './ActionListHeader/ActionListHeader'
import { ActionListItem } from './ActionListItem'

export interface ActionListProps extends TypographyProps {
  columns: string[]
}

export const ActionList = styled.div<ActionListProps>`
  ${typography}

  width: 100%;

  ${ActionListHeader} {
    display: grid;
    grid-template-columns: ${props => props.columns};
  }
  ${ActionListItem} {
    display: grid;
    grid-template-columns: ${props => props.columns};
  }
`

ActionList.defaultProps = {
  fontFamily: 'brand',
}
