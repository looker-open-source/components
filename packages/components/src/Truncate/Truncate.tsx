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
import type { ReactNode } from 'react'
import React from 'react'
import styled from 'styled-components'
import type {
  TextColorProps,
  TypographyProps,
  WidthProps,
} from '@looker/design-tokens'
import {
  textColor,
  typography,
  width as widthHelper,
} from '@looker/design-tokens'
import { Span } from '../Text/Span'
import { mergeClassNames } from '../utils'
import { useTruncateTooltip } from './useTruncateTooltip'

export type TruncateProps = TextColorProps &
  TypographyProps &
  WidthProps & {
    className?: string
    /**
     * Specifying `description` will cause truncation tooltip to _always_ be presented
     * Text specified in `description` property will be displayed below `children` supplied
     */
    description?: string
    children?: ReactNode
  }

export type TruncateConfigProp =
  | undefined
  | boolean
  | { description: TruncateProps['description'] }

const getTruncateDescription = (truncate: TruncateConfigProp) =>
  typeof truncate === 'object' ? truncate.description : undefined

/**
 * If `truncate` is truthy will output a `Truncate` component.
 * If `truncate` is falsy returns a `Span`
 */
export const TruncateOptionally = ({
  truncate,
  ...props
}: TruncateProps & {
  truncate?: TruncateConfigProp
}) =>
  truncate ? (
    <Truncate description={getTruncateDescription(truncate)} {...props} />
  ) : (
    <Span {...props} />
  )

/**
 * Prevent text wrapping on long labels and instead render truncated text.
 * Renders a tooltip to view the entire text content on hover.
 **/
const TruncateLayout = ({
  children,
  className: propsClassName,
  description,
}: TruncateProps) => {
  const { tooltip, domProps } = useTruncateTooltip({
    children,
    description,
  })

  return (
    <>
      {tooltip}
      <span
        {...domProps}
        className={mergeClassNames([domProps.className, propsClassName])}
      >
        {children}
      </span>
    </>
  )
}

/**
 * @a11y-TODO we should support :focus-visible emulation here if focus can be drawn by an anchor/link within
 * the truncate children.
 **/
export const Truncate = styled(TruncateLayout).attrs(({ width = '100%' }) => ({
  width,
}))`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${textColor}
  ${typography}
  ${widthHelper}

  :focus-within {
    a {
      outline: none;
    }
  }
`
