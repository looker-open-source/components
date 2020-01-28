import React from 'react'
import initial from 'lodash/initial'
import {
  Code,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableDataCell,
  Locales,
} from '@looker/components'
import styled from 'styled-components'

export const CalendarPropTable = () => {
  const localeList = initial(
    Object.values(Locales).reduce((list: any, locale: any) => {
      return [
        ...list,
        <Code key={locale}>
          {locale === 'en' ? <strong>{locale}*</strong> : locale}
        </Code>,
        ', ',
      ]
    }, [])
  )

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
            <TableDataCell pr="large">locale</TableDataCell>
            <TableDataCell pr="large">One of: {localeList}</TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">onDayClick</TableDataCell>
            <TableDataCell pr="large">
              <Code>(date: Date) => void</Code>
            </TableDataCell>
          </TableRow>
          <TableRow>
            <TableDataCell pr="large">selectedDates</TableDataCell>
            <TableDataCell pr="large">Date | Date[]</TableDataCell>
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
        </TableBody>
      </Table>
      <TableKey>*default</TableKey>
    </>
  )
}

const TableKey = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.palette.charcoal200};
  background: ${({ theme }) => theme.colors.palette.charcoal100};
  color: ${({ theme }) => theme.colors.palette.charcoal600};
  font-weight: bold;
  padding: 0.5rem;
`
