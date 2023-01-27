/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { SDKRecord, Fields, CAll } from '../types';
import type { IError } from '@looker/sdk';
declare type DebugProps = {
    ok?: boolean;
    data?: SDKRecord[];
    error?: IError;
    config?: Partial<CAll>;
    fields?: Fields;
};
export declare const Debug: ({ ok, data, error, config, fields }: DebugProps) => JSX.Element;
export {};
