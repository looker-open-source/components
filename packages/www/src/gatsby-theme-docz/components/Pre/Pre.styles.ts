import styled from 'styled-components'

export const PreWrapper = styled.pre`
  ${({ theme: { fontSizes, fonts, lineHeights, radii, space } }) => `
    border-radius: ${radii.medium}
    padding: ${space.medium};
    font-size: ${fontSizes.small};
    font-family: ${fonts.code};
    line-height: ${lineHeights.medium};
    margin: 0 0 ${lineHeights.medium};`};
`
