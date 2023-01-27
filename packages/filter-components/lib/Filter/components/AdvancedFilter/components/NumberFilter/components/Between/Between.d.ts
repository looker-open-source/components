/// <reference types="react" />
import type { ValidationMessageProps } from '@looker/components';
import type { FilterModel } from '@looker/filter-expressions';
interface BetweenItemProps extends FilterModel {
    bounds: string;
    high?: string;
    low?: string;
}
interface BetweenFilterProps {
    item: BetweenItemProps;
    onChange?: (id: string, value: any) => void;
    width?: string | number;
    borderRadiusLeft?: string | number;
    borderLeftColor?: string;
    validationMessage?: ValidationMessageProps;
}
export declare const Between: ({ item, onChange, validationMessage, }: BetweenFilterProps) => JSX.Element;
export {};
