import {
  CompatibleHTMLProps,
  reset,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'looker-design-tokens'
import styled from 'styled-components'

export interface ListItemProps
  extends CompatibleHTMLProps<HTMLLIElement>,
    TypographyProps,
    SpaceProps {}

export const ListItem = styled.li<ListItemProps>`
  ${reset}
  ${typography}
  ${space}
`

ListItem.defaultProps = { mb: 'xxsmall' }
