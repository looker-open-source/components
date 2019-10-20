import styled from 'styled-components'

const Blockquote = styled.blockquote`
  font-weight: 300;
  ${({ theme: { fontSizes, lineHeights, space, colors, radii } }) => `
    font-size: ${fontSizes.large};
    line-height: ${lineHeights.medium};
    margin: 0 0 ${lineHeights.medium} ${lineHeights.medium};
    padding: 0 0 0 ${space.medium};
    border-left: 5px solid ${colors.palette.primary500};
    color: ${colors.palette.primary600};
    border-radius: ${radii.medium};
  `}
  strong {
    font-weight: 600;
  }
`

export default Blockquote
