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
import React, { FC, useContext, useRef } from 'react'
import { Accordion, AccordionContent, AccordionDisclosure } from '../Accordion'
import { useHovered } from '../utils/useHovered'
import { undefinedCoalesce } from '../utils'
import { TreeContext } from './TreeContext'
import { indicatorDefaults } from './utils'
import { TreeItemInner, TreeStyle } from './TreeStyle'
import { TreeProps } from './types'

const TreeLayout: FC<TreeProps> = ({
  border: propsBorder,
  brand: propsBrand,
  children,
  detail,
  detailHoverDisclosure: propsDetailHoverDisclosure,
  detailAccessory: propsDetailAccessory,
  disabled,
  icon,
  label,
  className,
  branchFontWeight,
  truncate,
  dividers,
  selected,
  ...restProps
}) => {
  const disclosureRef = useRef<HTMLDivElement>(null)
  const [isHovered] = useHovered(disclosureRef)

  const treeContext = useContext(TreeContext)
  const hasBorder = undefinedCoalesce([propsBorder, treeContext.border])
  const hasBrandColoring = undefinedCoalesce([propsBrand, treeContext.brand])
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
      color={disabled ? 'text1' : 'text5'}
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
        brand: hasBrandColoring,
        depth: depth + 1,
        detailAccessory: hasDetailAccessory,
        detailHoverDisclosure: hasDetailHoverDisclosure,
      }}
    >
      <TreeStyle
        className={className}
        border={hasBorder}
        brand={hasBrandColoring}
        depth={depth}
        disabled={disabled}
        selected={selected}
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
