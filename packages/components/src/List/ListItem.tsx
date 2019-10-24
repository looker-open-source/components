import {
  CompatibleHTMLProps,
  reset,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  PositionProps,
  LayoutProps,
  position,
  layout,
} from 'looker-design-tokens'
import styled from 'styled-components'

export interface ListItemProps
  extends CompatibleHTMLProps<HTMLLIElement>,
    PositionProps,
    LayoutProps,
    SpaceProps,
    TypographyProps {}

export const ListItem = styled.li<ListItemProps>`
  ${reset}
  ${typography}
  ${space}

  ${position}
  ${layout}
`

ListItem.defaultProps = { mb: 'xxsmall' }
