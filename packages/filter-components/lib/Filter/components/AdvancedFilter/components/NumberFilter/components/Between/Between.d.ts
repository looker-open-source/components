import type { ValidationMessageProps } from '@looker/components';
import type { FilterModel } from '@looker/filter-expressions';
import type { FC } from 'react';
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
export declare const Between: FC<BetweenFilterProps>;
export {};
