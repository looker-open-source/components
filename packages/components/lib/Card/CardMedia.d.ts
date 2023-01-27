/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import type { BackgroundPositionProps, CompatibleHTMLProps, BackgroundColorProps } from '@looker/design-tokens';
export interface CardMediaProps extends BackgroundPositionProps, BackgroundColorProps, CompatibleHTMLProps<HTMLDivElement> {
    image?: string;
}
export declare const CardMedia: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, CardMediaProps, never>;
