/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { TickRendererProps } from '@visx/axis';
import type { XAxisProps } from './types';
/**
 * All tick labels longer than this will be truncated
 */
export declare const MAX_TICK_LABEL_LENGTH = 20;
export declare type TickProps = Pick<XAxisProps, 'fields' | 'valueFormat'> & TickRendererProps;
/**
 * Tick component typically used in the tickComponent prop of
 * visx <Axis> components
 */
export declare const Tick: ({ formattedValue, fields, valueFormat, ...tickProps }: TickProps) => JSX.Element;
