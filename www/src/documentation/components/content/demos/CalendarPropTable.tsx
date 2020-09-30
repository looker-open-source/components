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
} from '@looker/components'
import styled from 'styled-components'

export const CalendarPropTable = () => {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Prop</TableHeaderCell>
            <TableHeaderCell>Type Values</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableDataCell pr="large">localization</TableDataCell>
            <TableDataCell pr="large">
              <Code>{`{month: string[], weekdaysShort:[], firstDayOfWeek: number}`}</Code>
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">onDayClick</TableDataCell>
            <TableDataCell pr="large">
              <Code>(date: Date) ={'>'} void</Code>
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">selectedDates</TableDataCell>
            <TableDataCell pr="large">
              <Code>Date</Code> | <Code>Date[]</Code> |{' '}
              <Code>DateRange (i.e. {`{ from: Date, to: Date }`})</Code>
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">size</TableDataCell>
            <TableDataCell pr="large">
              One of: <Code>small</Code>,{' '}
              <Code>
                <strong>medium*</strong>
              </Code>
              , <Code>large</Code>
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">showNextButton</TableDataCell>
            <TableDataCell pr="large">
              One of:{' '}
              <Code>
                <strong>true*</strong>
              </Code>
              , <Code>false</Code>
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">showPreviousButton</TableDataCell>
            <TableDataCell pr="large">
              One of:{' '}
              <Code>
                <strong>true*</strong>
              </Code>
              , <Code>false</Code>
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">onNextClick</TableDataCell>
            <TableDataCell pr="large">
              <Code>(date: Date) ={'>'} void</Code>
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">onNowClick</TableDataCell>
            <TableDataCell pr="large">
              <Code>(date: Date) ={'>'} void</Code>
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">onPrevClick</TableDataCell>
            <TableDataCell pr="large">
              <Code>(date: Date) ={'>'} void</Code>
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">onMonthChange</TableDataCell>
            <TableDataCell pr="large">
              <Code>(date: Date) ={'>'} void</Code>
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">viewMonth</TableDataCell>
            <TableDataCell pr="large">
              <Code>Date</Code>
            </TableDataCell>
          </TableRow>
        </TableBody>
      </Table>
      <TableKey>*default</TableKey>
    </>
  )
}

const TableKey = styled.div`
  background: ${({ theme }) => theme.colors.ui1};
  border-top: 1px solid ${({ theme }) => theme.colors.ui2};
  color: ${({ theme }) => theme.colors.text3};
  font-weight: bold;
  margin-bottom: 2rem;
  padding: 0.5rem;
`
