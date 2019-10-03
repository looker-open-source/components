import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { StyledSystemCompatibleHTMLProps } from '../../Layout/Box'

type TableRowProps = StyledSystemCompatibleHTMLProps<HTMLTableRowElement>
type ComponentType = FunctionComponent<TableRowProps>

const InternalTableRow: ComponentType = props => <tr {...props} />

export const TableRow = styled<ComponentType>(InternalTableRow)``
