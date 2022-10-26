import type { CircleFilterItem } from '@looker/filter-expressions';
import type { FC } from 'react';
interface LocationCircleProps {
    onChange: (id: string, value: any) => void;
    item: CircleFilterItem;
}
export declare const LocationCircle: FC<LocationCircleProps>;
export {};
