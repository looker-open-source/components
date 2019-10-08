import styled from 'styled-components'
import {
  color,
  ColorProps,
  CompatibleHTMLProps,
  CustomizableAttributes,
  layout,
  LayoutProps,
  reset,
  space,
  SpaceProps,
  SpacingSizes,
  textTransform,
  TextTransformProps,
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

export const Legend = styled.legend.attrs((props: LegendProps) => ({
  color: props.color || CustomizableLegendAttributes.color,
  fontSize: props.fontSize || CustomizableLegendAttributes.fontSize,
  fontWeight: props.fontWeight || CustomizableLegendAttributes.fontWeight,
  pb:
    props.pb || props.py || props.p
      ? undefined
      : CustomizableLegendAttributes.bottomPadding,
}))<LegendProps>`
  ${reset}
  ${color}
  ${layout}
  ${space}
  ${textTransform};
  ${typography}
`
