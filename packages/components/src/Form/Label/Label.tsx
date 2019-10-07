import styled from 'styled-components'
import {
  CompatibleHTMLProps,
  CustomizableAttributes,
  color,
  ColorProps,
  space,
  SpaceProps,
  textDecoration,
  TextDecorationProps,
  textTransform,
  TextTransformProps,
  typography,
  TypographyProps,
} from '@looker/design-tokens'

export const CustomizableLabelAttributes: CustomizableAttributes = {
  color: 'palette.charcoal800',
  fontSize: 'small',
  fontWeight: 'semiBold',
}

export interface LabelProps
  extends ColorProps,
    SpaceProps,
    TextDecorationProps,
    TextTransformProps,
    TypographyProps,
    CompatibleHTMLProps<HTMLLabelElement> {}

export const Label = styled.label<LabelProps>`
  color: ${() => CustomizableLabelAttributes.color};
  font-size: ${() => CustomizableLabelAttributes.fontSize};
  font-weight: ${() => CustomizableLabelAttributes.fontWeight};
  margin-right: ${props => props.theme.space.xsmall};
  ${color};
  ${space};
  ${textDecoration}
  ${textTransform};
  ${typography};
`
