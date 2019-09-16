import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Box, BoxProps } from '../../Box'

export type TableHeaderCellProps = BoxProps<HTMLTableHeaderCellElement>
type ComponentType = FunctionComponent<TableHeaderCellProps>
type StyledComponentType = StyledComponent<ComponentType, TableHeaderCellProps>

const InternalTableHeaderCell: ComponentType = props => (
  <Box
    is="th"
    py="xsmall"
    fontSize="xsmall"
    color="palette.charcoal400"
    fontWeight="semiBold"
    {...props}
  />
)

const TableHeaderCellFactory = React.forwardRef<
  StyledComponentType,
  TableHeaderCellProps
>((props: TableHeaderCellProps, ref: Ref<StyledComponentType>) => (
  <InternalTableHeaderCell ref={ref} {...props} />
))

export const TableHeaderCell = styled<ComponentType>(TableHeaderCellFactory)``
