/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ReactNode } from 'react';
import React from 'react';
import type { CommonCartesianProperties } from '../types';
export declare type VisWrapperProps = {
    children?: ReactNode;
    legend?: CommonCartesianProperties['legend'];
};
export declare type VisWrapperInternalProps = VisWrapperProps & {
    className?: string;
};
export declare const VisWrapper: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<VisWrapperProps & {
    className?: string | undefined;
} & React.RefAttributes<HTMLDivElement>>, import("styled-components").DefaultTheme, {}, never>;
