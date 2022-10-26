import type { FC } from 'react';
import type { VisWrapperProps } from '../VisWrapper';
import type { SDKRecord, Fields, ChartLayoutProps } from '../types';
import type { CTable } from '../adapters';
export interface TableProps extends VisWrapperProps, ChartLayoutProps {
    data: SDKRecord[];
    config?: CTable;
    fields?: Fields;
}
export declare const StaticTable: FC<TableProps>;
