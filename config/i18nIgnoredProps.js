/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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

const ours = [
  'icon',
  'iconBefore',
  'iconAfter',
  'gap',
  'grid-area',
  'textDecoration',
]
const aria = [
  'aria-autocomplete',
  'aria-haspopup',
  'aria-hidden',
  'aria-live',
  'aria-orientation',
]
const react = ['data-autofocus', 'data-testid', 'htmlFor']
const styledComponents = ['as']
const htmlXml = ['autoComplete', 'fill', 'role', 'xmlns']

const styledSystem = [
  'alignContent',
  'alignItems',
  'alignSelf',
  'background',
  'backgroundColor',
  'backgroundImage',
  'backgroundPosition',
  'backgroundRepeat',
  'backgroundSize',
  'bg',
  'bgImage',
  'bgPosition',
  'bgRepeat',
  'bgSize',
  'border',
  'borderBottom',
  'borderBottomColor',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderBottomStyle',
  'borderBottomWidth',
  'borderColor',
  'borderLeft',
  'borderLeftColor',
  'borderLeftStyle',
  'borderLeftWidth',
  'borderRadius',
  'borderRight',
  'borderRightColor',
  'borderRightStyle',
  'borderRightWidth',
  'borderStyle',
  'borderTop',
  'borderTopColor',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderTopStyle',
  'borderTopWidth',
  'borderWidth',
  'borderX',
  'borderY',
  'bottom',
  'boxShadow',
  'color',
  'display',
  'flex',
  'flexBasis',
  'flexDirection',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'gridArea',
  'gridAutoColumns',
  'gridAutoFlow',
  'gridAutoRows',
  'gridColumn',
  'gridColumnGap',
  'gridGap',
  'gridRow',
  'gridRowGap',
  'gridTemplateAreas',
  'gridTemplateColumns',
  'gridTemplateRows',
  'height',
  'justifyContent',
  'justifyItems',
  'justifySelf',
  'left',
  'letterSpacing',
  'lineHeight',
  'm',
  'margin',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginX',
  'marginY',
  'maxHeight',
  'maxWidth',
  'mb',
  'minHeight',
  'minWidth',
  'ml',
  'mr',
  'mt',
  'mx',
  'my',
  'opacity',
  'order',
  'overflow',
  'overflowX',
  'overflowY',
  'p',
  'padding',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingX',
  'paddingY',
  'pb',
  'pl',
  'position',
  'pr',
  'pt',
  'px',
  'py',
  'right',
  'size',
  'textAlign',
  'textShadow',
  'top',
  'verticalAlign',
  'width',
  'zIndex',
]

module.exports = [
  ...aria,
  ...ours,
  ...htmlXml,
  ...react,
  ...styledComponents,
  ...styledSystem,
]
