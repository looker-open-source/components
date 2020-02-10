import {
  border,
  BorderProps,
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from '@looker/design-tokens'
import styled from 'styled-components'

// TODO: Create component that has on hover features
export interface ActionListItemProps
  extends BorderProps,
    ColorProps,
    SpaceProps,
    TypographyProps {}

// TODO: replace styled.div<SpaceProps> with styled(nameOfCustomComponent)
export const ActionListItem = styled.div<ActionListItemProps>`
  ${border}
  ${color}
  ${space}
  ${typography}
`

ActionListItem.defaultProps = {
  backgroundColor: 'palette.white',
  borderBottom: 'solid 1px',
  borderColor: 'palette.charcoal200',
  color: 'palette.charcoal700',
  fontSize: 'xsmall',
  fontWeight: 'normal',
  py: 'medium',
}
