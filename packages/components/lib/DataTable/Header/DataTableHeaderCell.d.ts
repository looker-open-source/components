import React from 'react';
import type { DataTableColumn } from '../Column';
export interface DataTableHeaderCellProps extends Omit<DataTableColumn, 'id'> {
    className?: string;
    /**
     * Used for sorting column assignment
     */
    columnId: DataTableColumn['id'];
}
export declare const DataTableHeaderCell: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<DataTableHeaderCellProps & React.RefAttributes<HTMLTableHeaderCellElement>>, import("styled-components").DefaultTheme, {}, never>;
