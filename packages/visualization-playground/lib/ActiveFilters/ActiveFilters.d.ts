import type { FC } from 'react';
import type { IQuery } from '@looker/sdk';
declare type ActiveFiltersProps = {
    filters: IQuery['filters'];
    queryId: number;
    onRemoveFilter: (name: string) => void;
    onUpdateFilter: (name: string, expression: string) => void;
};
export declare const ActiveFilters: FC<ActiveFiltersProps>;
export {};
