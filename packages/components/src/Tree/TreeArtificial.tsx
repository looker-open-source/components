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

import React, { FC } from 'react'
import { List } from '../List'
import { DensityRamp } from '../List/types'
import { listItemDimensions } from '../List/utils'
import { TreeContext } from './TreeContext'
import { TreeStyle } from './TreeStyle'

/**
 *  Wrapper component for Tree and TreeItem elements that doesn't render an actual Tree
 *  Note: Used specifically for the Field Picker UI, which uses Accordions at the top-level
 * */
export const TreeArtificial: FC<{
  density?: DensityRamp
}> = ({ children, density = 0 }) => {
  const { iconSize } = listItemDimensions(density)
  return (
    <TreeStyle depth={-1} indicatorSize={iconSize} dividers>
      <TreeContext.Provider value={{ density, depth: 0 }}>
        <List>{children}</List>
      </TreeContext.Provider>
    </TreeStyle>
  )
}
