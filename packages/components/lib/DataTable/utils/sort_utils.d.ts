import type { DataTableColumns } from '../Column';
export declare const stringComparator: (stringA: string, stringB: string) => 0 | 1 | -1;
export declare const dateComparator: (dateA: Date, dateB: Date) => 0 | 1 | -1;
export declare type DataTableDatum = Record<string, any>;
export declare type DataTableData = DataTableDatum[];
export declare const doDataTableSort: <T>(data: T[], columns: DataTableColumns, id: string, sortDirection: 'asc' | 'desc') => {
    columns: import("../Column").DataTableColumn[];
    data: T[];
};
