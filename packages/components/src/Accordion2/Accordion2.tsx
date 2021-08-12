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

import React from 'react'
import styled from 'styled-components'
import { Accordion2Disclosure } from './Accordion2Disclosure'
import { accordionDimensions } from './accordionDimensions'
import { Accordion2Props } from './types'
import { useAccordion2 } from './useAccordion2'

const Accordion2Internal = (props: Accordion2Props) => {
  const { content, domProps, disclosureProps } = useAccordion2(props)

  return (
    <div {...domProps}>
      <Accordion2Disclosure {...disclosureProps} />
      {content}
    </div>
  )
}

/**
 * `Accordion2` manages the relationship between a `label` and the `children` within.
 * Links the the label and children using ARIA features and supports either controlled
 * or uncontrolled usage patterns.
 *
 * See `useAccordion2` hook to meet more complex compositional requirements
 *
 * Accordion2 is a modernized version of the `Accordion` component with an improved
 * interface that removes confusing props and offers a more opinionated approach to
 * styling.
 */
export const Accordion2 = styled(Accordion2Internal)<Accordion2Props>`
  font-size: ${({ theme, density }) =>
    theme.fontSizes[
      accordionDimensions(density || theme.defaults.density).fontSize
    ]};
  width: 100%;
`
