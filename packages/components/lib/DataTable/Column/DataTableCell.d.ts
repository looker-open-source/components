import type { ReactNode } from 'react';
import React from 'react';
import type { CompatibleHTMLProps } from '@looker/design-tokens';
import type { DataTableColumnSize } from './columnSize';
export interface DataTableCellProps extends CompatibleHTMLProps<HTMLTableDataCellElement> {
    /**
     * I18n recommended: content that is user visible should be treated for i18n
     */
    description?: ReactNode;
    indicator?: ReactNode;
    size?: DataTableColumnSize;
}
export declare const DataTableCell: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<DataTableCellProps & React.RefAttributes<HTMLElement>>, import("styled-components").DefaultTheme, {}, never>;
