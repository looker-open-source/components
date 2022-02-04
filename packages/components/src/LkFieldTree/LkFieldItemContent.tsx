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

import styled from 'styled-components'
import { ListItemLabel } from '../ListItem'
import { generateIndent } from '../Tree/utils'
import { lkFieldItemDensity } from './defaults'

export type LkFieldItemContentProps = {
  cursorPointer?: boolean
  depth: number
  focusVisible: boolean
}

export const LkFieldItemContent = styled.div.attrs<LkFieldItemContentProps>(
  ({ role = 'treeitem' }) => ({
    role,
  })
)<LkFieldItemContentProps>`
  ${ListItemLabel} {
    /*
      Height and padding normally get set by both the icon and label containers, but we're removing the
      vertical padding on the label container to avoid hover disclosed icons from expanding items
      in the core Looker Field Picker
    */
    padding: 0;

    /* Horizontal label padding to avoid text from bumping agaisnt background */
    padding-left: ${({ theme }) => theme.space.xxsmall};
  }

  ${({ depth }) => generateIndent({ density: lkFieldItemDensity, depth })}

  /*
    IconButtons with hovered / selected backgrounds sit above
    a non-absolutely positioned box-shadow. Absolute positioning
    and a z-index gets the box-shadow to sit above ListItem children
    with background colors.
  */
  ${({ focusVisible, theme }) =>
    focusVisible &&
    `
    &::after {
      bottom: 0;
      box-shadow: inset 0 0 0 2px ${theme.colors.keyFocus};
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
    }
  `}

  /*
    Normal TreeItemContent calculates background color, but in LkFieldItem's case,
    the background exists on the LkFieldItemLabel container to get the "label background
    only" styling.
  */
  background: none;

  color: inherit;
  cursor: ${({ cursorPointer }) => (cursorPointer ? 'pointer' : undefined)};
  display: flex;
  flex: 1;
  font-size: inherit;
  font-weight: inherit;
  margin: 0; /* safari has default margin */
  min-width: 0;
  outline: none;

  /*
    Supports absolutely positioned box-shadow
  */
  position: relative;

  text-align: left;
  text-decoration: none;
  width: 100%;

  &:hover,
  &:focus {
    color: inherit;
    text-decoration: none;
  }

  &[disabled] {
    color: ${({ theme }) => theme.colors.text1};
    cursor: not-allowed;
  }
`
