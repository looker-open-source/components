import type { MouseEvent } from 'react';
import type { SDKRecord, TableProps } from '@looker/visualizations-adapters';
import type { SortingState, Header } from '@tanstack/table-core';
declare type UseHeadlessTableProps = Pick<TableProps, 'data' | 'config' | 'fields' | 'pivots'>;
/**
 * useHeadlessTable configures our headless table dependency. Handles
 * basic table state and sorting logic.
 */
export declare const useHeadlessTable: (props: UseHeadlessTableProps) => {
    table: import("@tanstack/table-core").Table<SDKRecord>;
    sorting: SortingState;
    handleTableSort: (header: Header<SDKRecord, unknown>, e: MouseEvent<Element>) => void;
};
export {};
