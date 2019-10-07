import styled from 'styled-components'
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  CompatibleHTMLProps,
  CustomizableAttributes,
  textTransform,
  TextTransformProps,
  SpacingSizes,
  typography,
  TypographyProps,
} from '@looker/design-tokens'

export interface CustomizableLegendAttributes extends CustomizableAttributes {
  bottomPadding: SpacingSizes
}

export const CustomizableLegendAttributes: CustomizableLegendAttributes = {
  bottomPadding: 'xsmall',
  color: 'palette.charcoal800',
  fontSize: 'xxxlarge',
  fontWeight: 'light',
}

export interface LegendProps
  extends ColorProps,
    LayoutProps,
    SpaceProps,
    TextTransformProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLLegendElement> {}

export const Legend = styled.legend.attrs(() => ({
  color: CustomizableLegendAttributes.color,
  fontSize: CustomizableLegendAttributes.fontSize,
  fontWeight: CustomizableLegendAttributes.fontWeight,
  paddingBottom: CustomizableLegendAttributes.bottomPadding,
}))<LegendProps>`
  ${color}
  ${layout}
  ${space}
  ${textTransform};
  ${typography}
`
