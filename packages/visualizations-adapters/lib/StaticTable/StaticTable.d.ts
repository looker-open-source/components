/// <reference types="react" />
import type { VisWrapperProps } from '../VisWrapper';
import type { SDKRecord, Fields, ChartLayoutProps } from '../types';
import type { CTable } from '../adapters';
export interface TableProps extends VisWrapperProps, ChartLayoutProps {
    data: SDKRecord[];
    config?: CTable;
    fields?: Fields;
}
interface StaticTableProps extends Omit<TableProps, 'width'> {
    width?: TableProps['width'] | 'auto';
}
export declare const StaticTable: ({ data, fields, width, }: StaticTableProps) => JSX.Element | null;
export {};
