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

import styled from 'styled-components'
import { FontWeights } from '@looker/design-tokens'
import React, { FC, ReactNode, useContext } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionDisclosure,
  AccordionProps,
  AccordionIndicatorProps,
} from '../Accordion'
import { IconNames } from '../Icon'
import { TreeItem } from './TreeItem'
import { TreeGroup, TreeGroupLabel } from './TreeGroup'
import { TreeContext } from './TreeContext'

export interface TreeProps extends Omit<AccordionProps, 'className'> {
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
   * If true, clicking on the detail element will not trigger the Tree's other click handlers
   * @default false
   */
  detailStopPropagation?: boolean
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

interface TreeBorderProps {
  border?: boolean
  depth: number
}

const TreeBorder = styled.div<TreeBorderProps>`
  background: ${({ border, depth, theme }) => {
    const itemBorderSize = '1px'
    const itemPaddingSize = theme.space.xxsmall
    const indicatorIconSize = theme.space.small
    const indicatorGapSize = theme.space.xxsmall
    const depthSize = `${itemBorderSize} + ${itemPaddingSize} + (${indicatorIconSize} + ${indicatorGapSize}) * ${depth}`
    const borderSpacer = `(${theme.space.small} / 2) + ${depthSize}`
    return (
      border &&
      `linear-gradient(90deg, transparent calc(${borderSpacer} - 1px), ${theme.colors.ui3}, transparent calc(${borderSpacer} + 1px))`
    )
  }};
`

const TreeStyle = styled.div<{ depth: number }>`
  ${AccordionDisclosure} {
    height: 25px;
    padding: ${({ theme }) => theme.space.xxsmall};
    padding-left: ${({ depth, theme }) =>
      `calc(${theme.space.xxsmall} + (${theme.space.xxsmall} + ${theme.space.small}) * ${depth})`}
  }

  ${TreeGroupLabel} {
    padding-left: ${({ depth, theme }) =>
      `calc(${theme.space.xxsmall} + (${theme.space.xxsmall} + ${
        theme.space.small
      }) * ${depth + 1})`};
  }

  ${TreeItem} {
    font-size: ${({ theme }) => theme.fontSizes.xxsmall};
    outline: none;
  }

  ${/* sc-selector */ TreeBorder} > ${/* sc-selector */ TreeItem},
  ${/* sc-selector */ TreeBorder} > ${/* sc-selector */ TreeGroup} > ${
  /* sc-selector */ TreeItem
} {
    border: 1px solid transparent;
    height: 25px;
    padding: ${({ theme }) => theme.space.xxsmall};
    padding-left: ${({ depth, theme }) =>
      `calc(${theme.space.xxsmall} + (${theme.space.xxsmall} + ${
        theme.space.small
      }) * ${depth + 1})`}
  }

  ${/* sc-selector */ AccordionContent} > ${/* sc-selector */ TreeBorder} > ${
  /* sc-selector */ TreeItem
}:focus {
    border-color: ${({ theme }) => theme.colors.keyFocus};
  }

  ${/* sc-selector */ TreeGroup} > ${/* sc-selector */ TreeBorder} > ${
  /* sc-selector */ TreeItem
}:focus {
    border-color: ${({ theme }) => theme.colors.keyFocus};
  }
`

const TreeLayout: FC<TreeProps> = ({
  border,
  children,
  detail,
  detailStopPropagation,
  fontWeight,
  icon,
  label,
  ...restProps
}) => {
  const { border: contextBorder, depth } = useContext(TreeContext)
  const isBorderEnabled = border || contextBorder
  const nextDepth = depth + 1

  const disclosure = (
    <TreeItem
      detail={detail}
      detailStopPropagation={detailStopPropagation}
      gapSize="xsmall"
      icon={icon}
    >
      {label}
    </TreeItem>
  )

  const content = (
    <TreeBorder border={isBorderEnabled} depth={depth}>
      {children}
    </TreeBorder>
  )

  const internalAccordion = (
    <Accordion {...indicatorProps} {...restProps}>
      <AccordionDisclosure fontWeight={fontWeight}>
        {disclosure}
      </AccordionDisclosure>
      <AccordionContent>{content}</AccordionContent>
    </Accordion>
  )

  return (
    <TreeContext.Provider value={{ border: isBorderEnabled, depth: nextDepth }}>
      <TreeStyle depth={depth}>{internalAccordion}</TreeStyle>
    </TreeContext.Provider>
  )
}

export const Tree = styled(TreeLayout)``
