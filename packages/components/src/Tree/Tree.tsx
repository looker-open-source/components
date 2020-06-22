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

import styled, { css } from 'styled-components'
import { FontWeights, Theme } from '@looker/design-tokens'
import React, { FC, ReactNode, useContext } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionDisclosure,
  AccordionProps,
  AccordionIndicatorProps,
} from '../Accordion'
import { IconNames } from '../Icon'
import { TreeItem, TreeItemPrimary } from './TreeItem'
import { TreeGroupLabel } from './TreeGroup'
import { TreeContext } from './TreeContext'

export interface TreeProps extends AccordionProps {
  /**
   * If true, vertical lines will extend from the Tree indicator (and all sub-Trees' indicators)
   * @default false
   */
  border?: boolean
  /**
   * Supplementary element that appears right of the Tree's label
   */
  detail?: ReactNode
  /**
   * If true, then the detail elements on Trees and TreeItems will only appear on hover
   * @default false
   */
  detailHoverDisclosure?: boolean
  /**
   * If true, clicking on the detail element will not trigger the Tree's other click handlers
   * @default false
   */
  detailAccessory?: boolean
  /**
   * The font weight of the Tree's text
   * @default 'semiBold'
   */
  fontWeight?: FontWeights
  /**
   * Icon element that appears between the Tree indicator and the Tree label
   */
  icon?: IconNames
  /**
   * Text label of the Tree
   * Note: This is a required prop
   */
  label: string
}

const indicatorProps: AccordionIndicatorProps = {
  indicatorGap: 'xxsmall',
  indicatorIcons: { close: 'ArrowRight', open: 'ArrowDown' },
  indicatorPosition: 'left',
  indicatorSize: 'small',
}

const TreeLayout: FC<TreeProps> = ({
  border,
  children,
  detail,
  detailHoverDisclosure,
  detailAccessory,
  fontWeight,
  icon,
  label,
  ...restProps
}) => {
  const context = useContext(TreeContext)
  const hasBorder = context.border || border
  const hasDetailHoverDisclosure =
    context.detailHoverDisclosure || detailHoverDisclosure
  const hasDetailAccessory = context.detailAccessory || detailAccessory
  const depth = context.depth ? context.depth : 0

  const disclosure = (
    <TreeItem
      detail={detail}
      detailAccessory={detailAccessory}
      gapSize="xsmall"
      icon={icon}
    >
      {label}
    </TreeItem>
  )

  const internalAccordion = (
    <Accordion {...indicatorProps} {...restProps}>
      <AccordionDisclosure fontWeight={fontWeight}>
        {disclosure}
      </AccordionDisclosure>
      <AccordionContent>{children}</AccordionContent>
    </Accordion>
  )

  return (
    <TreeContext.Provider
      value={{
        border: hasBorder,
        depth: depth + 1,
        detailAccessory: hasDetailAccessory,
        detailHoverDisclosure: hasDetailHoverDisclosure,
      }}
    >
      <TreeStyle border={hasBorder} depth={depth}>
        {internalAccordion}
      </TreeStyle>
    </TreeContext.Provider>
  )
}

export const Tree = styled(TreeLayout)``

const generateTreeBorder = (depth: number, theme: Theme) => {
  const {
    colors,
    space: { xxsmall, small },
  } = theme

  const itemBorderSize = '1px'
  const itemPaddingSize = xxsmall
  const indicatorIconSize = small
  const indicatorGapSize = xxsmall
  const depthSize = `${itemBorderSize} + ${itemPaddingSize} + (${indicatorIconSize} + ${indicatorGapSize}) * ${depth}`
  const borderSpacer = `(${small} / 2) + ${depthSize}`

  return css`
    background: linear-gradient(
      90deg,
      transparent calc(${borderSpacer} - 1px),
      ${colors.ui2},
      transparent calc(${borderSpacer})
    );
  `
}

interface TreeStyleProps {
  border?: boolean
  depth: number
}

const TreeStyle = styled.div<TreeStyleProps>`
  ${AccordionContent} {
    ${({ border, depth, theme }) => border && generateTreeBorder(depth, theme)}
  }

  ${AccordionDisclosure} {
    height: 25px;
    padding: ${({ theme }) => theme.space.xxsmall};
    padding-left: ${({ depth, theme }) =>
      `calc(${theme.space.xxsmall} + (${theme.space.xxsmall} + ${theme.space.small}) * ${depth})`};
  }

  ${AccordionDisclosure} ${TreeItemPrimary} {
    background-color: transparent;
    padding: ${({ theme }) => theme.space.none};
  }

  ${AccordionDisclosure} ${TreeItem}:focus-within {
    border-color: transparent;
  }

  ${TreeGroupLabel} {
    padding-left: ${({ depth, theme }) =>
      `calc(${theme.space.xxsmall} + (${theme.space.xxsmall} + ${
        theme.space.small
      }) * ${depth + 1})`};
  }

  ${TreeItemPrimary} {
    padding-left: ${({ depth, theme }) =>
      `calc(${theme.space.xxsmall} + (${theme.space.xxsmall} + ${
        theme.space.small
      }) * ${depth + 1})`};
  }
`
