import {
  color,
  ColorProps,
  typography,
  TypographyProps,
} from '@looker/design-tokens'
import styled from 'styled-components'
import { ActionListHeader } from './ActionListHeader/ActionListHeader'

export interface ActionListProps extends ColorProps, TypographyProps {
  columns: string[]
}

export const ActionList = styled.div<ActionListProps>`
  /* TODO: Actually figure out width */
  width: 100%;
  ${color}
  ${typography}

  ${ActionListHeader} {
    display: grid;
    grid-template-columns: ${props => props.columns};
  }
`

ActionList.defaultProps = {
  color: 'palette.charcoal900',
  fontFamily: 'brand',
  fontSize: 'xsmall',
  fontWeight: 'semiBold',
}
