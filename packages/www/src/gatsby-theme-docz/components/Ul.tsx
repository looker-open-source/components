import { List } from '@looker/components'
import styled from 'styled-components'

const Ul = styled(List)`
  list-style-type: disc;
  line-height: ${({ theme }) => theme.lineHeights.medium};
  margin-bottom: ${({ theme }) => theme.lineHeights.medium};
  margin-left: ${({ theme }) => theme.space.large};
`
export default Ul
