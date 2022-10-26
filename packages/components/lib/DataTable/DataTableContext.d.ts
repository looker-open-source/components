/// <reference types="react" />
import type { MixedBoolean } from '../Form';
import type { SelectConfig } from './types';
import type { DataTableColumns } from './Column';
export interface DataTableContextProps {
    allSelected?: MixedBoolean;
    columns?: DataTableColumns;
    columnsDisplayState?: boolean[];
    onSort?: (id: string, sortDirection: 'asc' | 'desc') => void;
    select?: SelectConfig;
}
export declare const DataTableContext: import("react").Context<DataTableContextProps>;
