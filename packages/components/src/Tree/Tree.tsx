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
import { List, ListItem } from '../List'
import { ListItemContext } from '../List/ListItemContext'
import { TreeContext } from './TreeContext'
import { indicatorDefaults } from './utils'
import { TreeStyle } from './TreeStyle'
import { TreeProps } from './types'

export const ListItemInner = styled(ListItem)`
  & > button {
    padding-left: 0;
  }
`

const TreeLayout: FC<TreeProps> = ({
  border: propsBorder,
  keyColor: propsKeyColor,
  children,
  density: propsDensity,
  detail,
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
  const useKeyColor = undefinedCoalesce([propsKeyColor, treeContext.keyColor])
  const startingDepth = 0
  const depth = treeContext.depth ? treeContext.depth : startingDepth

  const { density: contextDensity } = useContext(ListItemContext)
  const density = propsDensity || contextDensity

  const treeItem = (
    <ListItemInner
      density={density}
      detail={detail}
      icon={icon}
      truncate={truncate}
    >
      {label}
    </ListItemInner>
  )

  const innerAccordion = (
    <Accordion {...indicatorDefaults} {...restProps}>
      <AccordionDisclosure ref={disclosureRef} py="none">
        {treeItem}
      </AccordionDisclosure>
      <AccordionContent>
        <List density={density}>{children}</List>
      </AccordionContent>
    </Accordion>
  )

  return (
    <TreeContext.Provider
      value={{
        border: hasBorder,
        depth: depth + 1,
        keyColor: useKeyColor,
      }}
    >
      <TreeStyle
        className={className}
        border={hasBorder}
        keyColor={useKeyColor}
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
