import type { ExactLocationFilterItem } from '@looker/filter-expressions';
import type { FC } from 'react';
interface LocationExactProps {
    item: ExactLocationFilterItem;
    onChange: (id: string, value: any) => void;
    latString?: string;
    lonString?: string;
    lat?: string;
    lon?: string;
    placement?: 'middle' | 'right';
}
export declare const LocationExact: FC<LocationExactProps>;
export {};
