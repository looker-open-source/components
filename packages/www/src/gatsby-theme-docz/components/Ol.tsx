import { List } from '@looker/components'
import styled from 'styled-components'

const Ol = styled(List)`
  list-style-type: decimal;
  line-height: ${({ theme }) => theme.lineHeights.medium};
  margin-bottom: ${({ theme }) => theme.lineHeights.medium};
  margin-left: ${({ theme }) => theme.space.xxlarge};
`
export default Ol
