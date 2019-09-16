import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Box, BoxProps } from '../../Box'

export type TableDataCellProps = BoxProps<HTMLTableDataCellElement>

type ComponentType = FunctionComponent<TableDataCellProps>
type StyledComponentType = StyledComponent<ComponentType, TableDataCellProps>

const InternalTableDataCell: ComponentType = props => (
  <Box
    is="td"
    px="none"
    py="xsmall"
    borderTop="solid 1px"
    borderColor="palette.charcoal200"
    {...props}
  />
)

const TableDataCellFactory = React.forwardRef<
  StyledComponentType,
  TableDataCellProps
>((props: TableDataCellProps, ref: Ref<StyledComponentType>) => (
  <InternalTableDataCell ref={ref} {...props} />
))

/** @component */
export const TableDataCell = styled<ComponentType>(TableDataCellFactory)``
