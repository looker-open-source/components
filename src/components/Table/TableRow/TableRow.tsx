import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Box, BoxProps } from '../../Box'

export type TableRowProps = BoxProps<HTMLTableRowElement>
type ComponentType = FunctionComponent<TableRowProps>
type StyledComponentType = StyledComponent<ComponentType, TableRowProps>

const InternalTableRow: ComponentType = props => <Box is="tr" {...props} />

const TableRowFactory = React.forwardRef<StyledComponentType, TableRowProps>(
  (props: TableRowProps, ref: Ref<StyledComponentType>) => (
    <InternalTableRow ref={ref} {...props} />
  )
)

export const TableRow = styled<ComponentType>(TableRowFactory)``
