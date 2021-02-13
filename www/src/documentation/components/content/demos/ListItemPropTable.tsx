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
              If the child element is of type string, <Code>color</Code>{' '}
              determines the color of text and icon, if present.
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">description</TableDataCell>
            <TableDataCell pr="large">
              <Code>ReactNode</Code>
            </TableDataCell>
            <TableDataCell>
              <Code>description</Code> is an optional element that sits
              underneath the child element.
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">detail</TableDataCell>
            <TableDataCell pr="large">
              <Code>ReactNode</Code>
            </TableDataCell>
            <TableDataCell>
              <Code>detail</Code> is an optional element placed right of the
              child element.
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">icon</TableDataCell>
            <TableDataCell pr="large">
              <Code>IconName (See Icon for valid icon names)</Code>
            </TableDataCell>
            <TableDataCell>
              <Code>icon</Code> is an optional icon element placed left of the
              child element.
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">iconArtwork</TableDataCell>
            <TableDataCell pr="large">
              <Code>ReactNode</Code>
            </TableDataCell>
            <TableDataCell>
              <Code>iconArtwork</Code> allows you to use an svg instead of an
              icon name string to render a custom icon.
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">itemRole</TableDataCell>
            <TableDataCell pr="large">
              <Code>"link" | "button"</Code>
            </TableDataCell>
            <TableDataCell>
              <Code>itemRole</Code> sets the correct accessible role for the
              item. Below are its possible values:
              <BlackTextUnorderedList type="bullet">
                <li>Use "link" for items that navigate to another page.</li>
                <li>
                  Use "button" for items that trigger in-page interactions, like
                  displaying a dialog.
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
              truncated.
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">keyColor</TableDataCell>
            <TableDataCell pr="large">
              <Code>boolean</Code>
            </TableDataCell>
            <TableDataCell>
              Using <Code>keyColor</Code> will replace the normal ui2 background
              color for selected and selected + hovered items with key colors.
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">disabled</TableDataCell>
            <TableDataCell pr="large">
              <Code>boolean</Code>
            </TableDataCell>
            <TableDataCell>
              If true, the item will have the following properties:
              <BlackTextUnorderedList type="bullet">
                <li>color: text1</li>
                <li>cursor: not-allowed</li>
                <li>hover background: background (i.e. none)</li>
              </BlackTextUnorderedList>
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">selected</TableDataCell>
            <TableDataCell pr="large">
              <Code>boolean</Code>
            </TableDataCell>
            <TableDataCell>
              If true, the item will have a ui2 background color. Also,
              aria-selected will be "true" for this item.
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">current</TableDataCell>
            <TableDataCell pr="large">
              <Code>boolean</Code>
            </TableDataCell>
            <TableDataCell>
              If true, the item will have a ui2 background color. Also,
              aria-current will be "true" for this item.
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
