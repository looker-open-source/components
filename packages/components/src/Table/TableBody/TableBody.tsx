import React, { FunctionComponent, Ref } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { Box, BoxProps } from '../../Box'

export type TableBodyAlignment = 'bottom' | 'middle' | 'top'
export type TableTextAlignment = 'center' | 'left' | 'right'

export interface TableBodyProps
  extends Omit<BoxProps<HTMLTableSectionElement>, 'as'> {
  align?: TableBodyAlignment
  textAlign?: TableTextAlignment
}

type ComponentType = FunctionComponent<TableBodyProps>
type StyledComponentType = StyledComponent<ComponentType, TableBodyProps>

const InternalTableBody: ComponentType = props => (
  <Box
    verticalAlign={props.align || 'top'}
    textAlign={props.textAlign || 'left'}
    // @ts-ignore
    as="tbody"
    {...props}
  />
)

const TableBodyFactory = React.forwardRef<StyledComponentType, TableBodyProps>(
  (props: TableBodyProps, ref: Ref<StyledComponentType>) => (
    <InternalTableBody ref={ref} {...props} />
  )
)

/** @component */
export const TableBody = styled<ComponentType>(TableBodyFactory)``
