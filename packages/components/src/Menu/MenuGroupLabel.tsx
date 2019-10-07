import { color } from '@looker/design-tokens'
import styled from 'styled-components'
import { background, BackgroundProps, BoxShadowProps } from 'styled-system'

interface MenuGroupLabelProps extends BackgroundProps, BoxShadowProps {}

export const MenuGroupLabel = styled.div<MenuGroupLabelProps>`
  ${color}
  ${background}
  box-shadow: ${props => props.boxShadow};
  position: sticky;
  top: -1px;
  z-index: 2;
`

MenuGroupLabel.defaultProps = {
  background: 'palette.white',
}
