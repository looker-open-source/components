/// <reference types="react" />
import type { CircleFilterItem } from '@looker/filter-expressions';
interface LocationCircleProps {
    onChange: (id: string, value: any) => void;
    item: CircleFilterItem;
}
export declare const LocationCircle: ({ item, onChange }: LocationCircleProps) => JSX.Element;
export {};
