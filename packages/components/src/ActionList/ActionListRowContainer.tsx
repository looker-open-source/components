import styled from 'styled-components'
import { layout, LayoutProps } from '@looker/design-tokens'

export const ActionListRowContainer = styled.div<LayoutProps>`
  ${layout}
`

ActionListRowContainer.defaultProps = {
  width: '100%',
}
