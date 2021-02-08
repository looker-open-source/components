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

import React from 'react'
import {
  Code,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableDataCell,
  Text,
  UnorderedList,
} from '@looker/components'
import styled from 'styled-components'

export const ListItemPropTable = () => {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Prop</TableHeaderCell>
            <TableHeaderCell>Type Values</TableHeaderCell>
            <TableHeaderCell>Description</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableDataCell pr="large">color</TableDataCell>
            <TableDataCell pr="large">
              <Code>string</Code>
            </TableDataCell>
            <TableDataCell>
              If child is of type string, <Code>color</Code> determines the
              color of the child element and icon, if present.
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">description</TableDataCell>
            <TableDataCell pr="large">
              <Code>ReactNode</Code>
            </TableDataCell>
            <TableDataCell>
              Optional description element that sits underneath the child
              element
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">detail</TableDataCell>
            <TableDataCell pr="large">
              <Code>ReactNode</Code>
            </TableDataCell>
            <TableDataCell>
              Detail element placed right of the item children
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">icon</TableDataCell>
            <TableDataCell pr="large">
              <Code>IconName (See Icon for valid icon names)</Code>
            </TableDataCell>
            <TableDataCell>
              Optional icon placed left of the item children
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">iconArtwork</TableDataCell>
            <TableDataCell pr="large">
              <Code>ReactNode</Code>
            </TableDataCell>
            <TableDataCell>
              Optional icon/logo that is not available on our components list.
              Note: use artwork prop with an svg instead of an icon name string.
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">itemRole</TableDataCell>
            <TableDataCell pr="large">
              <Code>"link" | "button"</Code>
            </TableDataCell>
            <TableDataCell>
              Sets the correct accessible role for the item:
              <BlackTextUnorderedList type="bullet">
                <li>Use "link" for items that navigate to another page</li>
                <li>
                  Use "button" for items that trigger in-page interactions, like
                  displaying a dialog
                </li>
              </BlackTextUnorderedList>
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">truncate</TableDataCell>
            <TableDataCell pr="large">
              <Code>boolean</Code>
            </TableDataCell>
            <TableDataCell>
              If true and text overflows, text children and description will be
              truncated
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">keyColor</TableDataCell>
            <TableDataCell pr="large">
              <Code>boolean</Code>
            </TableDataCell>
            <TableDataCell>
              Replace the normal uiN(1-5) color for selected and selected +
              hovered color with key colors
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">disabled</TableDataCell>
            <TableDataCell pr="large">
              <Code>boolean</Code>
            </TableDataCell>
            <TableDataCell>
              If true, the item will have a "disabled" presentation.
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">selected</TableDataCell>
            <TableDataCell pr="large">
              <Code>boolean</Code>
            </TableDataCell>
            <TableDataCell>
              If true, the item will have a darker background color. Also,
              aria-selected will be "true" for this item.
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">current</TableDataCell>
            <TableDataCell pr="large">
              <Code>boolean</Code>
            </TableDataCell>
            <TableDataCell>
              If true, the item will have a darker background color (same as
              selected). Also, aria-current will be "true" for this item.
            </TableDataCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

const BlackTextUnorderedList = styled(UnorderedList)`
  color: #000;
`
