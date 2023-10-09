import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { ReactNode } from 'react';
import React from 'react';
import type { DataTableCheckboxProps } from './DataTableCheckbox';
export interface DataTableRowProps extends DataTableCheckboxProps, Omit<CompatibleHTMLProps<HTMLElement>, 'onChange' | 'checked'> {
    /**
     * Content displayed after selection checkbox (optional) and row cells.
     * Used for DataTableActions
     */
    secondary?: ReactNode;
    hasCheckbox?: boolean;
    /**
     * Display checkbox as `th` instead of `td`
     * @default false
     */
    isHeaderRow?: boolean;
}
export declare const DataTableRow: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<DataTableRowProps & React.RefAttributes<HTMLTableRowElement>>, import("styled-components").DefaultTheme, {}, never>;
