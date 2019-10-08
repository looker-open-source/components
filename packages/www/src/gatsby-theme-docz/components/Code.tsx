import { Code } from '@looker/components'
import styled from 'styled-components'

export default styled(Code)`
  display: inline-block;
  ${({ theme: { fonts, fontSizes, lineHeights, colors, radii, space } }) => `
    font-family: ${fonts.code};
    font-size: ${fontSizes.small};
    line-height: ${lineHeights.medium};
    background: ${colors.palette.charcoal100};
    border-radius: ${radii.small};
    padding: 0 ${space.xxsmall};
  `}
`
