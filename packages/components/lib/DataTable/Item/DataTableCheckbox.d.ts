/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { MixedBoolean } from '../../Form';
export interface DataTableCheckboxProps {
    id?: string;
    checked?: MixedBoolean;
    disabled?: boolean;
    onChange?: () => void;
}
export declare const checkListProps: string[];
export declare const DataTableCheckbox: ({ id, onChange, checked, disabled, }: DataTableCheckboxProps) => JSX.Element;
