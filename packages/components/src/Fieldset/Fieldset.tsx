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

import type { ReactNode, Ref } from 'react'
import React, { createContext, forwardRef } from 'react'
import styled from 'styled-components'
import type { CompatibleHTMLProps, SpacingSizes } from '@looker/design-tokens'
import { omitStyledProps } from '@looker/design-tokens'
import { Space, SpaceVertical } from '../Layout'
import type { SimpleLayoutProps } from '../Layout/utils/simple'
import { simpleLayoutCSS } from '../Layout/utils/simple'
import type { LegendProps } from '../Form/Legend'
import { Legend } from '../Form/Legend'
import type { Accordion2Props } from '../Accordion2'
import { Accordion2 } from '../Accordion2'
import type { ControlledLoosely } from '../Accordion2/controlTypes'
import { accordionDimensions } from '../Accordion2/accordionDimensions'

export type FieldsetProps = Omit<CompatibleHTMLProps<HTMLDivElement>, 'wrap'> &
  SimpleLayoutProps &
  ControlledLoosely & {
    /**
     * If true, the Fieldset will be wrapped by an Accordion structure (i.e. a collapsible section)
     * @default false
     */
    accordion?: boolean
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
     * Displayed above the children of Fieldset
     * I18n recommended: content that is user visible should be treated for i18n
     */
    legend?: ReactNode
    /*
     * Hide labels on Fields within this Fieldset
     * @default false
     */
    fieldsHideLabel?: boolean
    /**
     * Amount of space between fields
     * @default medium
     */
    gap?: SpacingSizes
  }

export interface FieldsetContextProps {
  fieldsHideLabel?: boolean
}

export const FieldsetContext = createContext<FieldsetContextProps>({})

const FieldsetLayout = forwardRef(
  (props: FieldsetProps, ref: Ref<HTMLDivElement>) => {
    const {
      // Fieldset-specific props
      accordion,
      className,
      inline,
      gap = 'u4',
      legend,
      fieldsHideLabel,
      children,
      wrap,

      // Accordion Control-related props
      defaultOpen,
      isOpen,
      toggleOpen,
      onClose,
      onOpen,

      ...restProps
    } = props

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
        gap={gap}
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

    const LegendComponent = accordion ? FieldsetAccordionLegend : Legend

    const legendRender =
      typeof legend === 'string' ? (
        <LegendComponent>{legend}</LegendComponent>
      ) : (
        legend
      )

    let accordionProps: Accordion2Props = {
      defaultOpen,
      indicatorPosition: 'left',
      label: legendRender,
      onClose,
      onOpen,
    }

    if (isOpen && toggleOpen) {
      accordionProps = {
        ...accordionProps,
        isOpen,
        toggleOpen,
      }
    }

    let renderedFieldset = content

    if (legend) {
      if (accordion) {
        renderedFieldset = (
          <Accordion2 {...accordionProps}>
            <FieldsetAccordionContent>{content}</FieldsetAccordionContent>
          </Accordion2>
        )
      } else {
        renderedFieldset = (
          <SpaceVertical>
            {legendRender}
            {content}
          </SpaceVertical>
        )
      }
    }

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

const FieldsetAccordionLegend = (props: LegendProps) => (
  <Legend py="xxsmall" fontSize="small" {...props} />
)

const FieldsetAccordionContent = styled.div`
  padding-left: ${({ theme }) =>
    `calc(${theme.sizes[accordionDimensions().indicatorSize]} + ${
      theme.space[accordionDimensions().indicatorGap]
    })`};
  padding-top: ${({ theme }) => theme.space.u4};
`

export const Fieldset = styled(FieldsetLayout).attrs(({ width = '100%' }) => ({
  width,
}))<FieldsetProps>`
  ${simpleLayoutCSS}
`
