import React from 'react';
import type { ChipProps } from '../../../Chip';
import type { FieldFilter } from './types';
interface InputFiltersChipProps extends Omit<ChipProps, 'children' | 'onDelete'> {
    filter: FieldFilter;
    onDelete: (field: FieldFilter) => void;
}
export declare const InputFiltersChip: React.ForwardRefExoticComponent<InputFiltersChipProps & React.RefAttributes<HTMLSpanElement>>;
export {};
