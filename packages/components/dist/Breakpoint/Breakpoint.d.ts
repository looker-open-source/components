/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { ReactNode } from 'react';
import type { NamedBreakpoints } from '@looker/design-tokens';
export interface BreakpointProps {
    show: NamedBreakpoints | [NamedBreakpoints?, NamedBreakpoints?];
    children?: ReactNode;
}
export declare const Breakpoint: ({ children, show }: BreakpointProps) => JSX.Element;
