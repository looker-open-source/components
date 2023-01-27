/// <reference types="react" />
import type { SDKRecord, TableProps } from '@looker/visualizations-adapters';
import type { Table } from '@tanstack/react-table';
import type { useVirtual } from '../hooks';
declare type ColumnTotalsProps = Pick<TableProps, 'config' | 'totals' | 'fields'> & {
    table: Table<SDKRecord>;
    virtualizerAssets: ReturnType<typeof useVirtual>;
};
/**
 * Conditionally renders the totals row in a data table
 * @param props: ColumnTotalsProps
 * @returns
 */
export declare const ColumnTotals: ({ totals, config, fields, virtualizerAssets, table, }: ColumnTotalsProps) => JSX.Element | null;
export {};
