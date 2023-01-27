/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
export declare type XAxisDateProps = {
    label?: string;
    showTicks?: boolean;
};
/**
 * Axis component to be used when using a time scale
 */
export declare const XAxisDate: ({ label, showTicks }: XAxisDateProps) => JSX.Element;
