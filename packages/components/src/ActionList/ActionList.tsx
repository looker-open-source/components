import { typography, TypographyProps } from '@looker/design-tokens'
import styled from 'styled-components'
import { ActionListRowContainer } from './ActionListRowContainer'

export interface ActionListProps extends TypographyProps {
  columns: string[]
}

export const ActionList = styled.div<ActionListProps>`
  ${typography}

  ${ActionListRowContainer} {
    display: grid;
    grid-template-columns: ${props => props.columns};
  }
`

ActionList.defaultProps = {
  fontFamily: 'brand',
}
