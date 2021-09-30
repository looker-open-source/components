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

import type { FC } from 'react'
import React from 'react'
import styled from 'styled-components'
import type { TypographyProps } from '@looker/design-tokens'
import { typography } from '@looker/design-tokens'
import type { SimpleLayoutProps } from '../Layout/utils/simple'
import { simpleLayoutCSS } from '../Layout/utils/simple'
import { Accordion2Disclosure } from '../Accordion2/Accordion2Disclosure'

export type AccordionDisclosureProps = SimpleLayoutProps & TypographyProps

/**
 * NOTE: `focusVisible` & `indicator` props are overwritten within `AccordionLegacy`
 * & `Accordion` but are supplied here to meet type requirements of
 * `Accordion2Disclosure`
 */
const AccordionDisclosureInternal: FC<AccordionDisclosureProps> = props => (
  <Accordion2Disclosure focusVisible={false} indicator={null} {...props} />
)

/**
 * @deprecated Use `Accordion2` instead
 */
export const AccordionDisclosure = styled(AccordionDisclosureInternal).attrs(
  ({ px = 'none', py = 'xsmall' }) => ({
    px,
    py,
  })
)`
  ${typography}
  ${simpleLayoutCSS}
`
