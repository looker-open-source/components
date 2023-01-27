/// <reference types="react" />
import type { ExactLocationFilterItem } from '@looker/filter-expressions';
interface LocationExactProps {
    item: ExactLocationFilterItem;
    onChange: (id: string, value: any) => void;
    latString?: string;
    lonString?: string;
    lat?: string;
    lon?: string;
    placement?: 'middle' | 'right';
}
export declare const LocationExact: ({ item, onChange, latString, lonString, lat, lon, placement, }: LocationExactProps) => JSX.Element;
export {};
