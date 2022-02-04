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

import styled from 'styled-components'
import type {
  CompatibleHTMLProps,
  CursorProps,
  FlexboxProps,
  UserSelectProps,
} from '@looker/design-tokens'
import {
  cursor,
  flexbox,
  shouldForwardProp,
  userSelect,
} from '@looker/design-tokens'
import type { CommonLayoutProps } from '../utils/common'
import { commonLayoutCSS } from '../utils/common'

export type Box2Props = CompatibleHTMLProps<HTMLElement> &
  CommonLayoutProps &
  FlexboxProps &
  CursorProps &
  UserSelectProps

/**
 * The `Box2` component offers all the style functions that are exposed in @looker/design-tokens
 *
 * `Box2` is a replaces `Box` because it offers a more semantic set of `border*` properties
 * as well as excluding `boxShadow*` properties included on the (deprecated) `Box`
 *
 * Finally `Box2` does _not_ include a global `reset` strategy that `Box` relied on, instead
 * leveraging our `StyleDefender` pattern.
 */
export const Box2 = styled.div.withConfig({ shouldForwardProp })<Box2Props>`
  ${commonLayoutCSS}
  ${userSelect}
  ${flexbox}
  ${cursor}
`
