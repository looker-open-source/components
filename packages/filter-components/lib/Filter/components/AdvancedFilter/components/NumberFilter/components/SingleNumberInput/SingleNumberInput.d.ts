/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { ValidationMessageProps } from '@looker/components';
import type { FilterModel } from '@looker/filter-expressions';
import type { GroupInputProps } from '../../../GroupInput';
interface SingleNumberInputProps extends Omit<GroupInputProps, 'onChange'> {
    item: FilterModel;
    onChange?: (id: string, value: any) => void;
    validationMessage?: ValidationMessageProps;
}
export declare const SingleNumberInput: ({ item, onChange, placement, validationMessage, }: SingleNumberInputProps) => JSX.Element;
export {};
