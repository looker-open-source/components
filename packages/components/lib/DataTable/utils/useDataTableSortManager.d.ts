import type { MouseEvent, ReactNode } from 'react';
import type { DataTableColumns } from '../Column';
import type { DataTableDatum, DataTableData } from './sort_utils';
export declare const useDataTableSortManager: (caption: string, defaultData: DataTableData, defaultColumns: DataTableColumns, generateActions: (item: DataTableDatum) => ReactNode, onClickItem?: ((e: MouseEvent<HTMLTableDataCellElement>) => void) | undefined) => JSX.Element;
