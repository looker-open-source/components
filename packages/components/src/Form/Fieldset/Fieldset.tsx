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

import React, { createContext, forwardRef, ReactNode, Ref } from 'react'
import styled from 'styled-components'
import {
  CompatibleHTMLProps,
  SpacingSizes,
  omitStyledProps,
} from '@looker/design-tokens'
import omit from 'lodash/omit'
import pick from 'lodash/pick'
import { Space, SpaceVertical } from '../../Layout'
import { SimpleLayoutProps, simpleLayoutCSS } from '../../Layout/utils/simple'
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
  extends Omit<CompatibleHTMLProps<HTMLDivElement>, 'wrap'>,
    SimpleLayoutProps,
    AccordionControlProps {
  /**
   * If true, the Fieldset will be wrapped by an Accordion structure (i.e. a collapsible section)
   * @default false
   */
  accordion?: boolean
  ariaLabeledby?: string
  /**
   * Determines where to place the label in relation to the input.
   * @default false
   */
  inline?: boolean

  /**
   * Allowed fields to wrap if they exceed the container width
   * @default false
   */
  wrap?: boolean

  /**
   *  Displayed above the children of Fieldset
   */
  legend?: ReactNode
  /*
   * Hide labels on Fields within this Fieldset
   * @default false
   */
  fieldsHideLabel?: boolean
  /**
   * Amount of space between fields
   * @default 'inline ? 'medium' : 'small'
   */
  gap?: SpacingSizes
}

const accordionIndicatorDefaults: AccordionIndicatorProps = {
  indicatorGap: 'xsmall',
  indicatorIcons: {
    close: 'ArrowRight',
    open: 'ArrowDown',
  },
  indicatorPosition: 'left',
  indicatorSize: 'medium',
}

export interface FieldsetContext {
  fieldsHideLabel?: boolean
}

export const FieldsetContext = createContext<FieldsetContext>({})

const FieldsetLayout = forwardRef(
  (props: FieldsetProps, ref: Ref<HTMLDivElement>) => {
    const {
      accordion,
      className,
      inline,
      gap,
      legend,
      fieldsHideLabel,
      children,
      wrap,
      ...restProps
    } = omit(props, [...AccordionControlPropKeys])

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
        gap={gap || (inline ? 'medium' : 'small')}
        ref={ref}
        role="group"
        align="start"
        flexWrap={wrap ? 'wrap' : undefined}
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

    return (
      <FieldsetContext.Provider
        value={{ fieldsHideLabel: fieldsHideLabel || false }}
      >
        <div {...omitStyledProps(restProps)} className={className}>
          {renderedFieldset}
        </div>
      </FieldsetContext.Provider>
    )
  }
)

FieldsetLayout.displayName = 'FieldsetLayout'

export const Fieldset = styled(FieldsetLayout)`
  ${simpleLayoutCSS}

  ${AccordionContent} {
    padding-left: ${({ theme }) => {
      const borderWidth = '1px'
      const defaultIndicatorSize = theme.space.medium
      const defaultIndicatorGap = theme.space.xsmall

      return `calc(${borderWidth} + ${defaultIndicatorSize} + ${defaultIndicatorGap})`
    }};
    padding-top: ${({ theme }) => theme.space.medium};
  }

  ${AccordionDisclosure} {
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    height: 24px;
    padding: ${({ theme: { space } }) => space.xxsmall} 0;
  }
`

Fieldset.defaultProps = { width: '100%' }
