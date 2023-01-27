/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { CalendarLocaleProps } from './types';
export declare type DaysOfWeekProps = CalendarLocaleProps & {
    className?: string;
};
export declare const DaysOfWeek: import("styled-components").StyledComponent<({ className, firstDayOfWeek, locale }: DaysOfWeekProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
