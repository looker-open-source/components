/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
import type { CompatibleHTMLProps, PositionProps, SpaceProps } from '@looker/design-tokens';
export interface SpinnerProps extends SpaceProps, PositionProps, CompatibleHTMLProps<HTMLElement> {
    markers?: number;
    markerRadius?: number;
    speed?: number;
    size?: number;
    color?: string;
}
export declare const Spinner: import("styled-components").StyledComponent<(props: SpinnerProps) => JSX.Element, import("styled-components").DefaultTheme, {}, never>;
