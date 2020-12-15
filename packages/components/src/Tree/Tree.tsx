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
import React, { FC, ReactNode, useContext, useRef } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionDisclosure,
  AccordionProps,
} from '../Accordion'
import { IconNames } from '../Icon'
import { useHovered } from '../utils/useHovered'
import { undefinedCoalesce } from '../utils'
import { TreeContext } from './TreeContext'
import { indicatorDefaults } from './utils'
import { TreeItemInner, TreeStyle } from './TreeStyle'

export interface TreeProps
  extends Omit<AccordionProps, 'indicatorGap' | 'indicatorSize'> {
  /**
   * If true, vertical lines will extend from the Tree indicator (and all sub-Trees' indicators)
   * @default false
   */
  border?: boolean
  /**
   * Supplementary element that appears right of the Tree's label
   * Note: The detail container will stop propagation of events. Place your element(s) in the label
   *  prop if you'd like clicks on them to bubble.
   */
  detail?: ReactNode
  /**
   * If true, then the detail elements on Trees and TreeItems will only appear on hover
   * @default false
   */
  detailHoverDisclosure?: boolean
  /**
   * If true, the detail elements of child TreeItems will appear outside of the grey background on hover
   * @default false
   */
  detailAccessory?: boolean
  /**
   * Icon element that appears between the Tree indicator and the Tree label
   */
  icon?: IconNames
  /**
   * Text label of the Tree
   * Note: This is a required prop
   */
  label: ReactNode
  /**
   * If true, the internal AccordionDisclosure will have fontWeight = 'Normal'
   * @default false
   */
  branchFontWeight?: boolean
  /**
   * Prevent text wrapping on long labels and instead render truncated text
   **/
  truncate?: boolean
  /**
   * Produce a small visual space between each `TreeItem` displayed in the list so adjacent
   * items that are in a "selected" or active state have visual separation.
   * @default false
   */
  dividers?: boolean
}

const TreeLayout: FC<TreeProps> = ({
  border: propsBorder,
  children,
  detail,
  detailHoverDisclosure: propsDetailHoverDisclosure,
  detailAccessory: propsDetailAccessory,
  icon,
  label,
  className,
  branchFontWeight,
  truncate,
  dividers,
  ...restProps
}) => {
  const disclosureRef = useRef<HTMLDivElement>(null)
  const [isHovered] = useHovered(disclosureRef)

  const treeContext = useContext(TreeContext)
  const hasBorder = undefinedCoalesce([propsBorder, treeContext.border])
  const hasDetailHoverDisclosure = undefinedCoalesce([
    propsDetailHoverDisclosure,
    treeContext.detailHoverDisclosure,
  ])
  const hasDetailAccessory = undefinedCoalesce([
    propsDetailAccessory,
    treeContext.detailAccessory,
  ])
  const startingDepth = 0
  const depth = treeContext.depth ? treeContext.depth : startingDepth

  const treeItem = (
    <TreeItemInner
      detail={detail}
      detailAccessory={hasDetailAccessory}
      detailHoverDisclosure={hasDetailHoverDisclosure}
      icon={icon}
      truncate={truncate}
    >
      {label}
    </TreeItemInner>
  )

  const innerAccordion = (
    <Accordion {...indicatorDefaults} {...restProps}>
      <AccordionDisclosure ref={disclosureRef} py="none">
        {treeItem}
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
      <TreeStyle
        className={className}
        border={hasBorder}
        depth={depth}
        hovered={isHovered}
        dividers={dividers}
        branchFontWeight={branchFontWeight}
      >
        {innerAccordion}
      </TreeStyle>
    </TreeContext.Provider>
  )
}

export const Tree = styled(TreeLayout)``
