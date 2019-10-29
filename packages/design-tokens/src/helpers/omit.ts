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

import omit from 'lodash/omit'

export const typographyProps = [
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'lineHeight',
  'letterSpacing',
  'textAlign',
]

const borderProps = [
  'BorderWidthProps',
  'BorderStyleProps',
  'BorderColorProps',
  'BorderRadiusProps',
  'BorderTopProps',
  'BorderRightProps',
  'BorderBottomProps',
  'BorderLeftProps',
]
const colorProps = ['backgroundColor', 'bg', 'color', 'opacity']
const flexProps = [
  'AlignItemsProps',
  'AlignContentProps',
  'JustifyItemsProps',
  'JustifyContentProps',
  'FlexWrapProps',
  'FlexDirectionProps',
  'FlexProps',
  'FlexGrowProps',
  'FlexShrinkProps',
  'FlexBasisProps',
  'JustifySelfProps',
  'AlignSelfProps',
  'OrderProps',
]
const positionProps = ['bottom', 'left', 'position', 'right', 'top', 'zIndex']
const layoutProps = [
  'display',
  'height',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'overflow',
  'overflowX',
  'overFlowY',
  'size',
  'verticalAlign',
  'width',
]
const spaceProps = [
  'm',
  'mb',
  'mt',
  'mr',
  'mb',
  'mx',
  'my',
  'margin',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginX',
  'marginY',
  'p',
  'pb',
  'pt',
  'pr',
  'pb',
  'px',
  'py',
  'padding',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingX',
  'paddingY',
]

const otherProps = ['animation', 'color']
const pseudoProps = ['activeStyle', 'focusStyle', 'hoverStyle', 'userSelect']

const styledSystemProps = [
  ...borderProps,
  'boxShaodw',
  ...colorProps,
  ...flexProps,
  ...positionProps,
  ...layoutProps,
  ...spaceProps,
  ...typographyProps,
  ...otherProps,
  ...pseudoProps,
]

export const omitStyledProps = (props: any) => {
  return omit(props, styledSystemProps)
}
