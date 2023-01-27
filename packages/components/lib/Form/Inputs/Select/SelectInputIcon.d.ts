/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { SelectOptionObject } from './types';
export declare function getOptionIcon(value: string, options: SelectOptionObject[]): JSX.Element | null;
export interface SelectInputIconProps {
    options?: SelectOptionObject[];
}
export declare const SelectInputIcon: ({ options }: SelectInputIconProps) => JSX.Element | null;
