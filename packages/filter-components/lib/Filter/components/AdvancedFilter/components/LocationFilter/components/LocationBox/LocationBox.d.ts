import type { BoxFilterItem } from '@looker/filter-expressions';
import type { FC } from 'react';
interface LocationBoxProps {
    onChange: (id: string, value: any) => void;
    item: BoxFilterItem;
}
export declare const LocationBox: FC<LocationBoxProps>;
export {};
