/// <reference types="react" />
import type { BoxFilterItem } from '@looker/filter-expressions';
interface LocationBoxProps {
    onChange: (id: string, value: any) => void;
    item: BoxFilterItem;
}
export declare const LocationBox: ({ item, onChange }: LocationBoxProps) => JSX.Element;
export {};
