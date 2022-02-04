/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import type { CompatibleHTMLProps, FlexboxProps } from '@looker/design-tokens'
import { flexbox, shouldForwardProp } from '@looker/design-tokens'
import styled from 'styled-components'
import type { ComplexLayoutProps } from '../utils/complex'
import { complexLayoutCSS } from '../utils/complex'

/**
 * styled-system has its own FlexBoxProps, so we call this one FlexProps to disambiguate.
 */
export interface FlexProps
  extends CompatibleHTMLProps<HTMLDivElement>,
    Omit<ComplexLayoutProps, 'display'>,
    FlexboxProps {}

/**
 * @deprecated - Use a more specific layout helper such as `Space` or `SpaceVertical`,
 * Alternatively `<Box2 display="flex" />` fully replicates previous `Flex` behavior
 */
export const Flex = styled.div.withConfig({ shouldForwardProp })<FlexProps>`
  ${complexLayoutCSS}
  ${flexbox}
  display: flex;
`
