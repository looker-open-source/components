import styled from 'styled-components'

export const PreWrapper = styled.pre`
  ${({ theme: { lineHeights, radii, space } }) => `
    border-radius: ${radii.medium}
    padding: ${space.medium};
    line-height: ${lineHeights.medium};
    margin: 0 0 ${lineHeights.medium};`};
`
