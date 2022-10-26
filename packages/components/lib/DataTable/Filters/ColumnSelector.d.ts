import type { FC } from 'react';
import type { DataTableColumns } from '../Column';
export interface ColumnSelectorProps {
    columns: DataTableColumns;
    columnsVisible: string[];
    onColumnVisibilityChange: (value: string[]) => void;
}
export declare const ColumnSelector: FC<ColumnSelectorProps>;
