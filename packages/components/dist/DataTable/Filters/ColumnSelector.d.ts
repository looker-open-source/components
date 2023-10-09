/// <reference types="react" />
import type { DataTableColumns } from '../Column';
export interface ColumnSelectorProps {
    columns: DataTableColumns;
    columnsVisible: string[];
    onColumnVisibilityChange: (value: string[]) => void;
}
export declare const ColumnSelector: ({ columns, columnsVisible: defaultColumnsVisible, onColumnVisibilityChange, }: ColumnSelectorProps) => JSX.Element;
