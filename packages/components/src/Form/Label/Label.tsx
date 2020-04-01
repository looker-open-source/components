/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

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
} from '@looker/design-tokens'

export const CustomizableLabelAttributes: CustomizableAttributes = {
  color: 'palette.charcoal700',
  fontSize: 'xsmall',
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
