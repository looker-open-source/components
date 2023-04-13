/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
/// <reference types="react" />
declare type SurfaceLayoutProps = {
    className?: string;
    id?: string;
};
export declare const surfaceTransition: () => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
export declare const SurfaceBase: import("styled-components").StyledComponent<(props: SurfaceLayoutProps) => JSX.Element, import("styled-components").DefaultTheme, {
    'aria-modal': boolean;
    role: string;
}, "aria-modal" | "role">;
export {};
