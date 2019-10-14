import styled from 'styled-components'

export const PlaygroundWrapper = styled.div`
  ${({ theme: { lineHeights, colors, space, radii, fontSizes, fonts } }) => `
    line-height: ${lineHeights.medium};
    margin-bottom: ${lineHeights.medium};
    background: ${colors.palette.charcoal100};
    padding: ${space.small}
    border-radius: ${radii.medium};
    [class*="Playground"] {
      background: transparent;
      padding: 0;
    }
    [class*="LivePreviewWrapper"] {
      position:relative;
      z-index: 1;
    }
    [data-testid="live-editor"] {
      background: transparent !important;
      font-size: ${fontSizes.small};
      font-family: ${fonts.code};
      line-height: ${lineHeights.medium}
    }
  `}
`
