import {
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from '@looker/design-tokens'
import styled from 'styled-components'

interface ActionListItemColumnProps extends SpaceProps, TypographyProps {
  primaryKey?: boolean
}

export const ActionListItemColumn = styled.div<ActionListItemColumnProps>`
  ${space}
  ${typography}

  color: ${props =>
    props.primaryKey
      ? props.theme.colors.palette.charcoal900
      : props.theme.colors.palette.charcoal700};
  font-size: ${props =>
    props.primaryKey
      ? props.theme.fontSizes.small
      : props.theme.fontSizes.xsmall}
`

ActionListItemColumn.defaultProps = {
  fontWeight: 'normal',
  px: 'small',
  py: 'medium',
}
