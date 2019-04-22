import { styled } from '../../style'
import { Box } from '../Box'

export const VisuallyHidden = styled(Box)`
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`
