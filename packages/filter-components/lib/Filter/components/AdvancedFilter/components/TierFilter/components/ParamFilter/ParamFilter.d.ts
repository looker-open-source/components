/// <reference types="react" />
/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ValidationMessageProps } from '@looker/components';
import type { FilterModel } from '@looker/filter-expressions';
import type { Option } from '../../../../../../types/option';
interface ParamFilterProps {
    item: FilterModel;
    onChange?: (id?: string, props?: any) => void;
    enumerations?: Option[];
    validationMessage?: ValidationMessageProps;
}
export declare const ParamFilter: ({ item, onChange, enumerations, validationMessage, }: ParamFilterProps) => JSX.Element;
export {};
