/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { VisWrapperProps } from '../VisWrapper';
import type { SDKRecord, CAll, Fields } from '../types';
export interface UnsupportedProps extends VisWrapperProps {
    data: SDKRecord[];
    config: Partial<CAll>;
    fields: Fields;
}
export declare const Unsupported: ({ data, fields, config, }: UnsupportedProps) => JSX.Element;
