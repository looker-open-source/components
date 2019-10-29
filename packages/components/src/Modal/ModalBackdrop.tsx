/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.
 
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

import { CompatibleHTMLProps, reset } from 'looker-design-tokens'
import {
  OpacityProps,
  // opacity,
  BackgroundColorProps,
  // backgroundColor,
  color,
} from 'styled-system'
import styled, { CSSObject } from 'styled-components'

export interface ModalBackdropProps
  extends CompatibleHTMLProps<HTMLDivElement>,
    BackgroundColorProps,
    OpacityProps {
  visible?: boolean
  inlineStyle?: CSSObject
}

// Backdrop styles are applied here (rather than using the inline `style={...}` prop) to ensure that
// transitions will still apply to backdrop
export const ModalBackdrop = styled.div.attrs((props: ModalBackdropProps) => ({
  backgroundColor: props.visible ? props.backgroundColor : 'transparent',
}))<ModalBackdropProps>`
  ${reset}

  ${color}
  cursor: default;
  opacity: ${props => props.opacity || 0.4};
  transition: opacity ${props => props.theme.transitions.durationSimple};
  ${props => props.inlineStyle};

  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  position: fixed;

  &.entering,
  &.exiting {
    opacity: 0.01;
  }
`

ModalBackdrop.defaultProps = {
  backgroundColor: 'palette.charcoal200',
  opacity: 0.6,
  visible: true,
}
