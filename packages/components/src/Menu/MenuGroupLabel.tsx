import styled from 'styled-components'
import { color, BackgroundColorProps, BoxShadowProps } from 'styled-system'

interface MenuGroupLabelProps extends BackgroundColorProps, BoxShadowProps {}

export const MenuGroupLabel = styled.div<MenuGroupLabelProps>`
  ${color}
  box-shadow: ${props => props.boxShadow};
  position: sticky;
  top: -1px;
  z-index: 2;
`

MenuGroupLabel.defaultProps = {
  backgroundColor: 'palette.white',
}
