import { Paragraph as LookerParagraph } from '@looker/components'
import styled from 'styled-components'

const Paragraph = styled(LookerParagraph)`
  line-height: ${({ theme }) => theme.lineHeights.medium};
  margin-bottom: ${({ theme }) => theme.lineHeights.medium};
`

export default Paragraph
