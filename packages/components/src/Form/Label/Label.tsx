import styled from 'styled-components'
import {
  CompatibleHTMLProps,
  CustomizableAttributes,
  color,
  ColorProps,
  reset,
  space,
  SpaceProps,
  textDecoration,
  TextDecorationProps,
  textTransform,
  TextTransformProps,
  typography,
  TypographyProps,
} from 'looker-design-tokens'

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

export const Label = styled.label.attrs((props: LabelProps) => ({
  color: props.color || CustomizableLabelAttributes.color,
  fontSize: props.fontSize || CustomizableLabelAttributes.fontSize,
  fontWeight: props.fontWeight || CustomizableLabelAttributes.fontWeight,
}))<LabelProps>`
  ${reset}
  ${color};
  ${space};
  ${textDecoration}
  ${textTransform};
  ${typography};

  display: inline-block; /* Ensure that applied padding/margin actually works */
`

Label.defaultProps = { marginRight: 'xsmall' }
