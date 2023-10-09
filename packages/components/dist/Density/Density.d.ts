/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import React from 'react';
import type { DensityRamp } from '@looker/design-tokens';
export declare type DensityProps = React.PropsWithChildren<{
    scale: DensityRamp;
}>;
declare type PartialBy<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;
export declare type PartialDensityProps = PartialBy<DensityProps, 'scale'>;
/**
 * Utility component which alters the default density within the theme.
 * Wrap <Density density={1}> around other components to apply the specified
 * density value to all of the nested components.
 *
 * NOTE: If `density` is explicitly specified on a component within `Density`
 * the explicitly specified value will be used instead.
 */
export declare const Density: ({ scale, children }: DensityProps) => JSX.Element;
/**
 * Shortcut to `<Density scale={1} />`
 */
export declare const Density1: (props: PartialDensityProps) => JSX.Element;
/**
 * Shortcut to `<Density scale={0} />`
 */
export declare const Density0: (props: PartialDensityProps) => JSX.Element;
/**
 * Shortcut to `<Density scale={-1} />`
 */
export declare const DensityNegative1: (props: PartialDensityProps) => JSX.Element;
/**
 * Shortcut to `<Density scale={-2} />`
 */
export declare const DensityNegative2: (props: PartialDensityProps) => JSX.Element;
/**
 * Shortcut to `<Density scale={-3} />`
 */
export declare const DensityNegative3: (props: PartialDensityProps) => JSX.Element;
export {};
