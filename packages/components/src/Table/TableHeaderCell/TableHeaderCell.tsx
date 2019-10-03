import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Box, BoxProps } from '../../Layout/Box'

export type TableHeaderCellProps = BoxProps<HTMLTableHeaderCellElement>
type ComponentType = FunctionComponent<TableHeaderCellProps>

const InternalTableHeaderCell: ComponentType = props => (
  <Box
    // @ts-ignore
    as={'th' as 'th'}
    py="xsmall"
    fontSize="xsmall"
    color="palette.charcoal400"
    fontWeight="semiBold"
    {...props}
  />
)

export const TableHeaderCell = styled<ComponentType>(InternalTableHeaderCell)``
