import styled from 'styled-components'
import {
  FlexboxProps,
  flexbox,
  reset,
  space,
  SpaceProps,
} from '@looker/design-tokens'
import { layout, LayoutProps } from 'styled-system'

interface PopoverContent extends SpaceProps, LayoutProps, FlexboxProps {}

export const PopoverContent = styled.div<PopoverContent>`
  ${reset}
  ${space}
  ${layout}
  ${flexbox}
`

PopoverContent.defaultProps = { p: 'small' }
