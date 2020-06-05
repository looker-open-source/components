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

import React, { forwardRef, ReactNode, Ref } from 'react'
import styled from 'styled-components'
import { CompatibleHTMLProps } from '@looker/design-tokens'
import omit from 'lodash/omit'
import pick from 'lodash/pick'
import { Space, SpaceHelperProps, SpaceVertical } from '../../Layout'
import { Legend } from '../Legend'
import {
  Accordion,
  AccordionContent,
  AccordionControlProps,
  AccordionControlPropKeys,
  AccordionDisclosure,
  AccordionIndicatorProps,
} from '../../Accordion'

export interface FieldsetProps
  extends SpaceHelperProps,
    CompatibleHTMLProps<HTMLDivElement>,
    AccordionControlProps {
  /** If true, the Fieldset will be wrapped by an Accordion structure (i.e. a collapsible section)
   * @default false
   */
  accordion?: boolean
  ariaLabeledby?: string
  /** Determines where to place the label in relation to the input.
   * @default false
   */
  inline?: boolean
  /** Displayed above the children of Fieldset
   */
  legend?: ReactNode
}

const FieldsetLayout = forwardRef(
  (props: FieldsetProps, ref: Ref<HTMLDivElement>) => {
    const {
      accordion,
      inline,
      className,
      legend,
      children,
      ...restProps
    } = omit(props, [...AccordionControlPropKeys])
    const accordionIndicatorDefaults: AccordionIndicatorProps = {
      indicatorGap: 'xsmall',
      indicatorIcons: {
        close: 'ArrowRight',
        open: 'ArrowDown',
      },
      indicatorPosition: 'left',
      indicatorSize: 'medium',
    }
    const accordionProps = {
      ...pick(props, [...AccordionControlPropKeys]),
      ...accordionIndicatorDefaults,
    }
    const LayoutComponent = inline ? Space : SpaceVertical

    /**
     * Ideally this would be implemented by using `as="fieldset"` property on LayoutComponent directly
     * but a long-standing bug in Chrome prevents styling a fieldset with flex (or grid)
     * Chromium bug: https://bugs.chromium.org/p/chromium/issues/detail?id=375693
     *
     * Implemented using WAI-ARIA to create relationship between controls and legend or label:
     * https://www.w3.org/WAI/tutorials/forms/grouping/#associating-related-controls-with-wai-aria
     */

    const content = (
      <LayoutComponent
        {...restProps}
        gap={inline ? 'medium' : 'small'}
        ref={ref}
        role="group"
      >
        {children}
      </LayoutComponent>
    )

    !legend &&
      accordion &&
      // eslint-disable-next-line no-console
      console.warn(
        'Please provide a value for the "legend" prop if using accordion mode'
      )

    const renderedFieldset = legend ? (
      accordion ? (
        <Accordion {...accordionProps}>
          <AccordionDisclosure>{legend}</AccordionDisclosure>
          <AccordionContent>{content}</AccordionContent>
        </Accordion>
      ) : (
        <SpaceVertical>
          {typeof legend === 'string' ? <Legend>{legend}</Legend> : legend}
          {content}
        </SpaceVertical>
      )
    ) : (
      content
    )

    return <div className={className}>{renderedFieldset}</div>
  }
)

FieldsetLayout.displayName = 'FieldsetLayout'

export const Fieldset = styled(FieldsetLayout)`
  ${AccordionDisclosure} {
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    height: 24px;
    padding: ${({ theme }) => `${theme.space.xxsmall} 0`};
  }

  ${AccordionContent} {
    padding-top: ${({ theme }) => theme.space.medium};
  }
`

Fieldset.defaultProps = {
  padding: 'none',
}
